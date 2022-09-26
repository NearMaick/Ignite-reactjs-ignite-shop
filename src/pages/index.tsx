import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import Stripe from "stripe";

import { stripe } from "../lib/stripe";
import { HomeContainer, Product } from "../styles/pages/home";

import { GetServerSideProps } from "next";

import "keen-slider/keen-slider.min.css";

interface HomeProps {
  products: {
    id: string;
    name: string;
    imageUrl: string;
    price: number;
  }[];
}

export default function Home({ products }: HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  });

  return (
    <HomeContainer ref={sliderRef} className='keen-slider'>
      {products.map((product) => (
        <Product key={product.id} className='keen-slider__slide'>
          <Image src={product.imageUrl} alt='' width={520} height={480} />

          <footer>
            <strong>{product.name}</strong>
            <span>
              {Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(product.price)}
            </span>
          </footer>
        </Product>
      ))}
    </HomeContainer>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await stripe.products.list({
    expand: ["data.default_price"],
  });

  const products = response.data.map((product) => {
    const { id, name, images, default_price } = product;

    const price = default_price as Stripe.Price;

    return {
      id,
      name,
      imageUrl: images[0],
      price: price.unit_amount! / 100,
    };
  });

  return {
    props: { products },
  };
};

