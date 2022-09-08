/* eslint-disable react/no-children-prop */
import { useRouter } from "next/router"
import { FC } from "react"
import { useGetSites } from "../../graphql/react-query/reactQuery"
import { getSitesAsPaths, getChildrens0, getChildren0AsPaths, getChildrens1, getChildren1AsPaths, getChildren2AsPaths, getChildrens2, getChildrens3, getQuery } from "../../utils/functionV3"
import { Stats, Stats1, Stats2, CardSiteDashboard, HeadingSiteDashboard, HeadingChildrenDashboard, Hero1, Hero2, Hero3, Hero4, Hero5, Hero6, Grid } from "../components"
import { CardChildrenDashboard } from "../components/card/cardChildren"
// import Markdown from "markdown-to-jsx";
import * as hero from '../components';
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import markdownComponent from '../hook/useMarkdown';
import dynamic from "next/dynamic";
import { useState } from "react";

// const MDEditor = dynamic(
//   () => import("@uiw/react-md-editor").then((mod) => mod.default),
//   { ssr: false }
// );
// const EditerMarkdown = dynamic(
//   () =>
//     import("@uiw/react-md-editor").then((mod) => {
//       return mod.default.Markdown;
//     }),
//   { ssr: false }
// );
// const Markdown = dynamic(
//   () => import("@uiw/react-markdown-preview").then((mod) => mod.default),
//   { ssr: false }
// );

interface Dashboard {

}
export const Dashboard: FC<Dashboard> = ({ }) => {
  const [value, setValue] = useState<any>("**Hello world!!!**");
  const { asPath } = useRouter()
  const query = getQuery(asPath)
  const { data: sites } = useGetSites();


  // console.log(getChildren2AsPaths(sites!));

  switch (asPath) {
    case '/dashboard':
      return (
        <>
          <Stats />
          <Stats1 />
          <Stats2 />
        </>)
    case '/dashboard/sites':
      return (
        <>
          <HeadingSiteDashboard title="Sites" />
          <Grid>
            {sites?.map((site, i: number) => (
              <CardSiteDashboard key={i} site={site} />
            ))}
          </Grid>
        </>)
    case getSitesAsPaths(sites!).find(data => data === asPath):
      return (
        <>
          <HeadingChildrenDashboard />

          <Grid>

            {getChildrens0(sites!, asPath)!.map((children, i: number) => (
              <CardChildrenDashboard key={i} children={children} />
              ))}
          </Grid>
        </>)
    case getChildren0AsPaths(sites!).find(data => data === asPath):
      return (
        <>
          <HeadingChildrenDashboard />
          {
            query[3] === 'home' &&
            markdownComponent(Hero1)
          }

          {
            getChildrens1(sites!, asPath) &&
            <Grid>

              {getChildrens1(sites!, asPath)!.map((children, i: number) => (
                <CardChildrenDashboard key={i} children={children} />
              ))}
            </Grid>
          }
        </>)
    case getChildren1AsPaths(sites!).find(data => data === asPath):
      return (
        <>
          <HeadingChildrenDashboard />

          {
            getChildrens2(sites!, asPath) &&
            <Grid>
              {getChildrens2(sites!, asPath)!.map((children, i: number) => (
                <CardChildrenDashboard key={i} children={children} />
              ))}
            </Grid>
          }
        </>)
    case getChildren2AsPaths(sites!).find(data => data === asPath):
      return (
        <>
          <HeadingChildrenDashboard />
          {
            getChildrens3(sites!, asPath) &&
            <Grid>
              {getChildrens3(sites!, asPath)!.map((children, i: number) => (
                <CardChildrenDashboard key={i} children={children} />
              ))}
            </Grid>
          }
        </>)
    default:
      return null

  }

}