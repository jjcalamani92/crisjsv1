/* This example requires Tailwind CSS v2.0+ */
import { FC, Fragment } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link';
import Head from 'next/head';
import { HeaderDashboard } from '../components/header/headerDashboard';
import { Main } from '../components/main';
import { Notification } from '../components/notification';
import { Sidebar } from '../components/header/sidebar';


interface LayoutDashboard {
  children: React.ReactNode;
}

export const LayoutDashboard: FC<LayoutDashboard> = ({ children }) => {
  const { query, asPath } = useRouter()


  return (
    <>

      <div className="min-h-full">
        <Head>
          <title>Dashboard</title>
          <meta name="keywords" />

          <link rel="icon" href={"/logo.svg"} />
        </Head>
        {/* <HeaderDashboard /> */}
        <Sidebar>
          {children}
        </Sidebar>
        {/* <h1>Hola</h1> */}
        {/* <Notification /> */}
        {/* <Main> */}
        {/* </Main> */}
        
      </div>
    </>
  )
}
