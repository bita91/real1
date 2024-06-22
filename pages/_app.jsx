// import "@/styles/globals.css";

import { ThemeProvider } from "styled-components";
// import GlobalStyle from "../Component/Style/Globalestyle";
import GlobalStyle from "../Component/Style/Globalestyle";
import "../public/font/font.css";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={{}}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
