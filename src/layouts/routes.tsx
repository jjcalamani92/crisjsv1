import { FC } from "react"
import { useRouter } from 'next/router';
import { Login, Hero2, Pricing } from "../components";
import { Dashboard } from "./dashboard.routes";
import { getChildren0AsPaths, getChildren1AsPaths, getChildren2AsPaths, getSitesAsPaths } from "../../utils/functionV3";
import { useGetSites } from "../../graphql/react-query/reactQuery";

interface Routes {

}

export const Routes: FC<Routes> = ({ }) => {
  const { asPath } = useRouter()
  const { data: sites } = useGetSites();

  switch (asPath) {
    case '/':
      return <Hero2/>
    case '/pricing':
      return <Pricing />
    case ['/dashboard', '/dashboard/sites', getSitesAsPaths(sites!), getChildren0AsPaths(sites!), getChildren1AsPaths(sites!), getChildren2AsPaths(sites!)].flat(10).find(data => data === asPath):
      return <Dashboard />
    case '/auth/login':
      return <Login />
    default:
      return null

  }
}