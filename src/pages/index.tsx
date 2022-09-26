import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";

import { HomeContainer, Product } from "../styles/pages/home";

import shirt01 from "../assets/shirts/1.png";
import shirt02 from "../assets/shirts/2.png";

import "keen-slider/keen-slider.min.css";

export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  });

  return (
    <HomeContainer ref={sliderRef} className='keen-slider'>
      <Product className='keen-slider__slide'>
        <Image src={shirt01} alt='' width={520} height={480} />

        <footer>
          <strong>CamisetaX</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product className='keen-slider__slide'>
        <Image src={shirt02} alt='' width={520} height={480} />

        <footer>
          <strong>CamisetaX</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
    </HomeContainer>
  );
}

