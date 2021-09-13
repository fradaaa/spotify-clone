import { UserProvider } from "@auth0/nextjs-auth0";
import { ThemeProvider } from "@emotion/react";
import { Provider } from "react-redux";
import { SWRConfig } from "swr";
import { store } from "../redux/store";
import theme from "../styles/theme";
import AudioProvider from "./Audio/AudioProvider";

const Providers = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <Provider store={store}>
      <UserProvider>
        <AudioProvider>
          <ThemeProvider theme={theme}>
            <SWRConfig
              value={{
                fetcher: async (resource, init) => {
                  const res = await fetch(resource, init);
                  return await res.json();
                },
                provider: () => new Map(),
              }}
            >
              {children}
            </SWRConfig>
          </ThemeProvider>
        </AudioProvider>
      </UserProvider>
    </Provider>
  );
};

export default Providers;
