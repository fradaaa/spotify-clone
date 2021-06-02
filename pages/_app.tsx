import { UserProvider } from "@auth0/nextjs-auth0";
import { ThemeProvider } from "@emotion/react";
import { AppProps } from "next/app";
import Head from "next/head";
import ReactModal from "react-modal";
import { Provider } from "react-redux";
import "sanitize.css";
import { SWRConfig } from "swr";
import AudioProvider from "../components/Audio/AudioProvider";
import Layout from "../components/Layout/Layout";
import { store } from "../redux/store";
import "../styles/global.css";
import theme from "../styles/theme";

ReactModal.setAppElement("#__next");

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <UserProvider>
        <AudioProvider>
          <ThemeProvider theme={theme}>
            <SWRConfig
              value={{
                fetcher: (resource, init) =>
                  fetch(resource, init).then((res) => res.json()),
              }}
            >
              <Head>
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                  href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap"
                  rel="stylesheet"
                />
                <meta
                  name="viewport"
                  content="width=device-width, initial-scale=1"
                />
              </Head>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </SWRConfig>
          </ThemeProvider>
        </AudioProvider>
      </UserProvider>
    </Provider>
  );
}

export default MyApp;
