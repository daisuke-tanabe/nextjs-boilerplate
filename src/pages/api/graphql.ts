import {ApolloGateway, IntrospectAndCompose, RemoteGraphQLDataSource } from '@apollo/gateway';
import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { parse as cookieParse } from 'cookie';

console.log(process.env.NEXT_AUTH_SESSION_TOKEN_NAME)

const gateway = new ApolloGateway({
  supergraphSdl: new IntrospectAndCompose({
    subgraphs: [
      // nameは任意の文字列値
      // クエリプラン（？）、エラー、ログに使用される
      // https://www.apollographql.com/docs/apollo-server/using-federation/api/apollo-gateway/#methods-2
      { name: 'user', url: process.env.SUB_GRAPH_SERVICE_URL },
    ]
  }),
  // nameはサービスによって処理を変える時に使いそう
  // 公式サンプルのRemoteGraphQLDataSourceを継承する方法だと認証しないとリソース取得ができなくなる
  buildService({ url}) {
    return new RemoteGraphQLDataSource({
      url,
      willSendRequest({ request, context }) {
        if (Object.keys(context).length > 0) {
          request.http?.headers.set('authorization', context.authorization);
        }
      }
    })
  }
});

const server = new ApolloServer({
  gateway,
});

export default startServerAndCreateNextHandler(server, {
  context: async (req) => {
    const cookie = req.headers?.cookie;

    if (cookie) {
      const cookies = cookieParse(cookie);
      const sessionToken = cookies[process.env.NEXT_AUTH_SESSION_TOKEN_NAME as string];
      if (sessionToken) {
        return {
          authorization: `Bearer ${sessionToken}`
        }
      }
    }

    return {};
  },
});
