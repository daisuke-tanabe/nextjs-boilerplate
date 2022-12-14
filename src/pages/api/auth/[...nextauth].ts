import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],

  // 環境変数「NEXTAUTH_SECRET」で設定している場合は不要です。
  // 適度に長いランダムな文字列を設定する必要があります。
  // JWTを暗号化するために別の秘密が明示的に定義されていない限り、
  // クッキーに署名し、JSONウェブトークンを署名および暗号化するために使用されます。
  // secret: '',
};
export default NextAuth(authOptions);
