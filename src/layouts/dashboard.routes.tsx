/* eslint-disable react/no-children-prop */
import { useRouter } from "next/router"
import { FC } from "react"
import { useGetSites } from "../../graphql/react-query/reactQuery"
import { getSitesAsPaths, getChildrens0, getChildren0AsPaths, getChildrens1, getChildren1AsPaths, getChildren2AsPaths, getChildrens2, getChildrens3 } from "../../utils/functionV3"
import { Stats, Stats1, Stats2, CardSiteDashboard, HeadingSiteDashboard, HeadingChildrenDashboard, Hero1, Hero2, Hero3, Hero4, Hero5 } from "../components"
import { CardChildrenDashboard } from "../components/card/cardChildren"
import Markdown from "markdown-to-jsx";
import * as hero from '../components';
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import markdownComponent from '../hook/useMarkdown';
import dynamic from "next/dynamic";
import { useState } from "react";

const MDEditor = dynamic(
  () => import("@uiw/react-md-editor"),
  { ssr: false }
);

interface Dashboard {

}
export const Dashboard: FC<Dashboard> = ({ }) => {
  const [value, setValue] = useState<any>("**Hello world!!!**");
  const { asPath } = useRouter()
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
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3  lg:grid-cols-4 xl:grid-cols-6 ">
            {sites?.map((site, i: number) => (
              <CardSiteDashboard key={i} site={site} />
            ))}
          </div>
        </>)
    case getSitesAsPaths(sites!).find(data => data === asPath):
      return (
        <>
          <HeadingChildrenDashboard />

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3  lg:grid-cols-4 xl:grid-cols-6 ">
            {getChildrens0(sites!, asPath)!.map((children, i: number) => (
              <CardChildrenDashboard key={i} children={children} />
            ))}
          </div>
        </>)
    case getChildren0AsPaths(sites!).find(data => data === asPath):
      return (
        <>
          <HeadingChildrenDashboard />
          
          <div className="my-2">

          <MDEditor value={value} onChange={setValue} height={500} enableScroll />
          </div>
          
          {
            markdownComponent(Hero1)
          }

          {
            markdownComponent(Hero2)
          }
          {
            markdownComponent(Hero3)
          }

          {
            markdownComponent(Hero4)
          }

          {
            markdownComponent(Hero5)
          }
          {
            getChildrens1(sites!, asPath) &&
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3  lg:grid-cols-4 xl:grid-cols-6 ">
              {getChildrens1(sites!, asPath)!.map((children, i: number) => (
                <CardChildrenDashboard key={i} children={children} />
              ))}
            </div>
          }
        </>)
    case getChildren1AsPaths(sites!).find(data => data === asPath):
      return (
        <>
          <HeadingChildrenDashboard />

          {
            getChildrens2(sites!, asPath) &&
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3  lg:grid-cols-4 xl:grid-cols-6 ">
              {getChildrens2(sites!, asPath)!.map((children, i: number) => (
                <CardChildrenDashboard key={i} children={children} />
              ))}
            </div>
          }
        </>)
    case getChildren2AsPaths(sites!).find(data => data === asPath):
      return (
        <>
          <HeadingChildrenDashboard />
          {
            getChildrens3(sites!, asPath) &&
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3  lg:grid-cols-4 xl:grid-cols-6 ">
              {getChildrens3(sites!, asPath)!.map((children, i: number) => (
                <CardChildrenDashboard key={i} children={children} />
              ))}
            </div>
          }
        </>)
    default:
      return null

  }

}