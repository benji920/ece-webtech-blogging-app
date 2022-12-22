import "../styles/globals.css";
import "../styles/Switch.css";

import { useState } from "react";
import React from "react";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { UserContextProvider } from "../components/UserContext";
import {
  DarkModeContext,
  DarkModeContextProvider,
} from "../components/DarkModeContext.js";
import { NextUIProvider } from "@nextui-org/react";
import { useContext } from "react";

export default function MyApp({ Component, pageProps }) {
  const [supabaseClient] = useState(() => createBrowserSupabaseClient());
  return (
    <div class="dark:bg-slate-600">
      <SessionContextProvider
        supabaseClient={supabaseClient}
        initialSession={pageProps.initialSession}
      >
        <DarkModeContextProvider>
          <UserContextProvider>
            <Component {...pageProps} />
          </UserContextProvider>
        </DarkModeContextProvider>
      </SessionContextProvider>
    </div>
  );
}
