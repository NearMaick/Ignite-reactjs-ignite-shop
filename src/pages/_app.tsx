import type { AppProps } from "next/app";
import { globalStyle } from "../styles/global";

import Image from "next/image";
import logoImg from "../assets/logo.svg";
import { Container, Header } from "../styles/pages/app";

globalStyle();

function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={logoImg} alt='' />
      </Header>

      <Component {...pageProps} />
    </Container>
  );
}

export default App;

