import type { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { FC } from 'react'
import { LayoutPages, Routes, LayoutDashboard, LayoutAuth } from '../layouts'
import { dehydrate, QueryClient } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { graphQLClientS } from '../../graphql/react-query/graphQLClient'
import { SITESV2, SITEV2 } from '../../graphql'
import { paths } from '../../utils/functionV2'
import { useGetSite } from '../../graphql/react-query/reactQuery';
import { getQuery, getURL, capitalizar } from '../../utils/functionV3';


interface Props {
  
}

const Index: FC<Props> = () => {
  const { asPath } = useRouter()
  const query = getQuery(asPath)
  const { data:session, status } = useSession()

  // console.log(getQuery(asPath).at(1));
  
  
  // console.log(new Date("2022-10-06T23:32:57.129Z"));
  return (
    <>
      {
      query && query[0] === "dashboard"   
      ?
        <LayoutDashboard >
          <Routes />
        </LayoutDashboard>
      :
      query && query[0] === "auth" 
      ?
      <LayoutAuth >
        <Routes />
      </LayoutAuth>
      :
      <LayoutPages >
        <Routes />
      </LayoutPages>
    }
      
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { siteV2 } = await graphQLClientS.request(SITEV2, { _id: process.env.API_SITE })
  return {
    paths: paths(siteV2).map(data =>( {params: data})),
    // paths: [{ params: { slug: [] } }],
    fallback: 'blocking'
  };
}

export const getStaticProps: GetStaticProps = async (context: any) => {
  const { params } = context
  
  
  
  const { slug = [] } = params as { slug: string[] }
  const _id = process.env.API_SITE!
  const site = process.env.API_SITE

  const queryClient = new QueryClient()
  
  await queryClient.prefetchQuery(["get-site", _id],  async () => {
    const { siteV2 } = await graphQLClientS.request(
      SITEV2,
      { _id }
    );
    return siteV2;
  })
  await queryClient.prefetchQuery(["get-sites"], async () => {
    const { sitesV2 } = await graphQLClientS.request(
      SITESV2
    );
    return sitesV2;
  })
  // await queryClient.prefetchQuery(["get-products-furniture", site], async () => {
  //   const { furnitures } = await graphQLClientP.request( FURNITURIES, { site } );
  //   return furnitures;
  // })
  // await queryClient.prefetchQuery(["get-products-gift", site], async () => {
  //   const { gifts } = await graphQLClientP.request( GIFTS, { site } );
  //   return gifts;
  // })
  // await queryClient.prefetchQuery(["get-products-teddy", site], async () => {
  //   const { teddys } = await graphQLClientP.request( TEDDYS, { site } );
  //   return teddys;
  // })
  // await queryClient.prefetchQuery(["get-products-jeweler", site], async () => {
  //   const { jewelers } = await graphQLClientP.request( JEWELERS, { site } );
  //   return jewelers;
  // })

  // if ((slug[0] === 'detalles' && slug[1] ==='jeweler') || (slug[0] === 'dashboard' && slug[2] ==='jeweler')  ) {
  //   const slug = params?.slug![0] === 'detalles' ? params?.slug![2] : params?.slug![3]
  //   await queryClient.prefetchQuery(["get-product-jeweler-by-slug", slug], async () => {
  //     const { jewelerBySlug } = await graphQLClientP.request( JEWELER_BY_SLUG, { slug } );
  //     return jewelerBySlug;
  //   })
  // } else if ((slug[0] === 'detalles' && slug[1] ==='teddy') || (slug[0] === 'dashboard' && slug[2] ==='teddy')  ) {
  //   const slug = params?.slug![0] === 'detalles' ? params?.slug![2] : params?.slug![3]
  //   await queryClient.prefetchQuery(["get-product-teddy-by-slug", slug], async () => {
  //     const { teddyBySlug } = await graphQLClientP.request( TEDDY_BY_SLUG, { slug } );
  //     return teddyBySlug;
  //   })
  // } else if ((slug[0] === 'detalles' && slug[1] ==='furniture') || (slug[0] === 'dashboard' && slug[2] ==='furniture')  ) {
  //   const slug = params?.slug![0] === 'detalles' ? params?.slug![2] : params?.slug![3]
  //   await queryClient.prefetchQuery(["get-product-furniture-by-slug", slug], async () => {
  //     const { furnitureBySlug } = await graphQLClientP.request( FURNITURE_BY_SLUG, { slug } );
  //     return furnitureBySlug;
  //   })
  // } else if ((slug[0] === 'detalles' && slug[1] ==='gift') || (slug[0] === 'dashboard' && slug[2] ==='gift')) {
  //   const slug = params?.slug![0] === 'detalles' ? params?.slug![2] : params?.slug![3]
  //   await queryClient.prefetchQuery(["get-product-gift-by-slug", slug], async () => {
  //     const { giftBySlug } = await graphQLClientP.request( GIFT_BY_SLUG, { slug } );
  //     return giftBySlug;
  //   })
  // }


  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: 86400,
  }
}

export default Index
