import NextHead from 'next/head';
import NextLink from 'next/link';
import { ReactElement } from 'react';

import { MainLayout } from '../../components/Layout'

const Content = () => {
  return (
    <>
      <NextHead>
        <title>Content Page - Next.js Boilerplate</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/public/favicon.ico" />
      </NextHead>

      <h1>Content Page - Next.js Boilerplate</h1>

      <NextLink href="/">to Home Page</NextLink>
    </>
  );
};

Content.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>;

export default Content;
