import type { AppProps } from "next/app";
import { globalStyle } from "../styles/global";

import logoImg from "../assets/logo.svg";
import { Container, Header } from "../styles/pages/app";

globalStyle();

function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <img src={logoImg} alt='' />
      </Header>

      <Component {...pageProps} />
    </Container>
  );
}

export default App;

