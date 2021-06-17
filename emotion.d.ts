import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    gray: string;
    primary: string;
    primaryVariant: string;
    secondary: string;
    background: string;
    surface: string;
    surface2: string;
    surface3: string;
    surface4: string;
    lightBorder: string;
    darkBorder: string;
    error: string;
    onPrimary: string;
    onSurface: string;
    onError: string;
  }
}
