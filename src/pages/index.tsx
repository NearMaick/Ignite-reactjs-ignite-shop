import Image from "next/image";
import shirt01 from "../assets/shirts/1.png";
import shirt02 from "../assets/shirts/2.png";
import { HomeContainer, Product } from "../styles/pages/home";

export default function Home() {
  return (
    <HomeContainer>
      <Product>
        <Image src={shirt01} alt='' />

        <footer>
          <strong>CamisetaX</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product>
        <Image src={shirt02} alt='' />

        <footer>
          <strong>CamisetaX</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
    </HomeContainer>
  );
}

