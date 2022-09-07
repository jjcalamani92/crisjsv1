import '../../styles/globals.css'
// import '../../ant.css'

import type { AppProps } from 'next/app'
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useState } from 'react';
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { SessionProvider } from 'next-auth/react';


function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  }))
  return (
    <SessionProvider session={session}>

      <QueryClientProvider client={queryClient}>

        <Hydrate state={pageProps.dehydratedState}>


       
          <Component {...pageProps} />
        
          <ReactQueryDevtools initialIsOpen={false} />
        </Hydrate>
      </QueryClientProvider>
    </SessionProvider>
  )
}


export default MyApp
