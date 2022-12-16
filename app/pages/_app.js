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
            <div class="dark:bg-slate-600">
              <Component {...pageProps} />
            </div>
          </UserContextProvider>
        </DarkModeContextProvider>
      </SessionContextProvider>
    </div>
  );
}