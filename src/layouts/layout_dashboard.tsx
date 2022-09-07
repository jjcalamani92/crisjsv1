/* This example requires Tailwind CSS v2.0+ */
import { FC, Fragment } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head';
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

          <link rel="icon" href={"https://res.cloudinary.com/dqsbh2kn0/image/upload/v1662447369/qgy7hht1b12tfc8tyrx8.jpg"} />
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
