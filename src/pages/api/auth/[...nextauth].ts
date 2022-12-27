import NextAuth, { type AuthOptions } from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';

export const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    }),
  ],

  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        return {
          ...token,
        };
      }
      return token;
    },
    // TODO まだよく見てないがAccountあたりが問題になっていそう
    async session({ session }) {
      return {
        ...session,
        user: {
          ...session.user,
        },
      };
    },
  },

  // 環境変数「NEXTAUTH_SECRET」で設定している場合は不要です。
  // 適度に長いランダムな文字列を設定する必要があります。
  // JWTを暗号化するために別の秘密が明示的に定義されていない限り、
  // クッキーに署名し、JSONウェブトークンを署名および暗号化するために使用されます。
  // secret: 'RANDOM_STRINGS',
};
export default NextAuth(authOptions);
