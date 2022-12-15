import NextAuth, { type AuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],

  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        return {
          ...token,
          accessToken: account.access_token
        }
      }
      return token;
    },
    // TODO まだよく見てないがAccountあたりが問題になっていそう
    // @ts-ignore
    async session({ session, token }) {
      return {
        ...session,
        user: {
          ...session.user,
          accessToken: token.accessToken
        }
      }
    }
  },


  // 環境変数「NEXTAUTH_SECRET」で設定している場合は不要です。
  // 適度に長いランダムな文字列を設定する必要があります。
  // JWTを暗号化するために別の秘密が明示的に定義されていない限り、
  // クッキーに署名し、JSONウェブトークンを署名および暗号化するために使用されます。
  secret: '2b149d2e0a0d6df043efa36257a755542c403967dac905f95aae52124961f25a',
};
export default NextAuth(authOptions);
