import { FC } from "react"
import { useRouter } from 'next/router';
import { Login } from "../components/login";
import { Hero2 } from "../components/page/hero";

interface Routes {
}

export const Routes: FC<Routes> = ({ }) => {
  const { asPath } = useRouter()



  switch (asPath) {
    case '/':
      return <Hero2/>
    case '/dashboard':
      return <h1>Dashboard</h1>
    case '/auth/login':
      return <Login />
    default:
      return null

  }
}