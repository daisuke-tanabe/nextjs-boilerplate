import { DefaultSession } from "next-auth";

declare module "next-auth" {
  // 拡張してアクセストークンを含むようにしている
  interface Session {
    user: {
      accessToken?: string;
    } & DefaultSession['user'];
  }

  // 拡張してアクセストークンを含むようにしている
  interface JWT {
    accessToken?: string;
  }
}
