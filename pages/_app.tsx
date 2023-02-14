import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { Session, SessionContextProvider } from "@supabase/auth-helpers-react";
import { AppProps } from "next/app";
import Head from "next/head";
import router from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { useState } from "react";
import ReactModal from "react-modal";
import "sanitize.css";
import Layout from "../components/Layout/Layout";
import Providers from "../components/Providers";
import "../styles/global.css";

router.events.on("routeChangeStart", () => NProgress.start());
router.events.on("routeChangeComplete", () => NProgress.done());
router.events.on("routeChangeError", () => NProgress.done());

NProgress.configure({ showSpinner: false });
ReactModal.setAppElement("#__next");

function MyApp({
  Component,
  pageProps,
}: AppProps<{ initialSession: Session }>) {
  const [supabaseClient] = useState(() => createBrowserSupabaseClient());

  return (
    <SessionContextProvider
      supabaseClient={supabaseClient}
      initialSession={pageProps.initialSession}
    >
      <Providers>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Providers>
    </SessionContextProvider>
  );
}

export default MyApp;
