import { AppBar, Box, Toolbar } from '@mui/material';
import { signIn, signOut, useSession } from 'next-auth/react';
import { ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
};

export const MainLayout = ({ children }: LayoutProps) => {
  const { data: session } = useSession();

  // console.log('test/session: ', session);

  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          {session ? (
            <>
              <div>{session.user?.email}</div>
              <button type="button" onClick={() => signOut()}>
                Sign out
              </button>
            </>
          ) : (
            <button type="button" onClick={() => signIn()}>
              Sign in
            </button>
          )}
        </Toolbar>
      </AppBar>

      <main>{children}</main>
    </Box>
  );
};
