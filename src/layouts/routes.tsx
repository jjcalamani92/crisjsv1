import { FC } from "react"
import { useRouter } from 'next/router';
import { Login } from "../components/login";

interface Routes {
}

export const Routes: FC<Routes> = ({ }) => {
  const { asPath } = useRouter()



  switch (asPath) {
    case '/':
      return <h1>{asPath}</h1>
    case '/auth/login':
      return <Login />
    default:
      return null

  }
}