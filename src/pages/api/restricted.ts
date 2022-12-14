import type { NextApiRequest, NextApiResponse } from 'next';
import { unstable_getServerSession } from 'next-auth/next';

import { authOptions } from './auth/[...nextauth]';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await unstable_getServerSession(req, res, authOptions);

  if (session) {
    res.send({
      content: '保護されたコンテンツです。ログインしているため、このコンテンツにアクセスすることができます。',
    });
  } else {
    res.send({
      error: '保護されたコンテンツを閲覧するには、サインインする必要があります。',
    });
  }
};
