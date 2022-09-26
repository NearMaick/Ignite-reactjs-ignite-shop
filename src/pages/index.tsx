import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import Stripe from "stripe";

import { stripe } from "../lib/stripe";
import { HomeContainer, Product } from "../styles/pages/home";

import { GetStaticProps } from "next";

import "keen-slider/keen-slider.min.css";
import Link from "next/link";

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
        <Link href={`/product/${product.id}`} key={product.id}>
          <Product className='keen-slider__slide'>
            <Image
              src={product.imageUrl}
              alt=''
              width={520}
              height={480}
              priority
            />

            <footer>
              <strong>{product.name}</strong>
              <span>{product.price}</span>
            </footer>
          </Product>
        </Link>
      ))}
    </HomeContainer>
  );
}

export const getStaticProps: GetStaticProps = async () => {
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
      price: Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(price.unit_amount! / 100),
    };
  });

  const twoHoursRevalidate = 60 * 60 * 2;

  return {
    props: { products },
    revalidate: twoHoursRevalidate,
  };
};

