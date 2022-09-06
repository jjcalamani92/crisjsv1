/* This example requires Tailwind CSS v2.0+ */
import { FC, Fragment } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link';
import Head from 'next/head';
import { HeaderDashboard } from '../components/header/headerDashboard';
import { Main } from '../components/main';

interface LayoutAuth {
  children: React.ReactNode;
}

export const LayoutAuth: FC<LayoutAuth> = ({ children }) => {
  const { query, asPath } = useRouter()


  return (
    <>

      <div className="min-h-full">
        <Head>
          <title>Login</title>
          <meta name="keywords" />

          <link rel="icon" href={"/logo.svg"} />
        </Head>
        {/* <HeaderDashboard /> */}
        <Main>
          {children}
        </Main>
        
      </div>
    </>
  )
}
