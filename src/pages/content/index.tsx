import { useQuery, gql } from '@apollo/client';
import NextHead from 'next/head';
import NextLink from 'next/link';
import { ReactElement } from 'react';

import { MainLayout } from '../../components/Layout';

const Content = () => {
  const { data, loading } = useQuery<{ user: { status: string }}>(
    gql`
      query User {
        user {
          status
        }
      }
    `
  );

  return (
    <>
      <NextHead>
        <title>Content Page - Next.js Boilerplate</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/public/favicon.ico" />
      </NextHead>

      <h1>Content Page - Next.js Boilerplate</h1>

      <h2>Apollo Client Test</h2>
      <div>データ取得とBearerのチェック</div>
      <div>user?: { loading ? 'null' : data?.user.status }</div>

      <NextLink href="/">to Home Page</NextLink>
    </>
  );
};

Content.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>;

export default Content;
