import type { AppProps } from "next/app";
import { globalStyle } from "../styles/global";

globalStyle();

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default App;

