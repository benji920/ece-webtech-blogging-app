import '../styles/globals.css'
import { useEffect, useState } from 'react'
import {useContext} from 'react';
import {ContextProvider} from '../components/UserContext'
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider } from '@supabase/auth-helpers-react'


function MyApp({ Component, pageProps }) {
  const [supabase] = useState(() => createBrowserSupabaseClient())

  return (<ContextProvider supabaseClient={supabase} initialSession={pageProps.initialSession}>
    <Component {...pageProps} />
  </ContextProvider>)
}

export default MyApp
