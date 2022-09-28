import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import { useState } from "react";
import Stripe from "stripe";
import { stripe } from "../../lib/stripe";
import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from "../../styles/pages/product";

interface ProductProps {
  product: {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
    description: string;
    defaultPriceId: string;
  };
}

export default function Product({ product }: ProductProps) {
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false);
  const { imageUrl, name, price, description, defaultPriceId } = product;

  async function handleBuyProduct() {
    try {
      setIsCreatingCheckoutSession(true);

      const response = await fetch("http://localhost:3000/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ priceId: defaultPriceId }),
      });
      const { checkoutSession } = await response.json();

      console.log(checkoutSession);
    } catch (error) {
      setIsCreatingCheckoutSession(false);
      alert("Falha ao redirecionar ao checkout!");
    }
  }

  return (
    <ProductContainer>
      <ImageContainer>
        <Image src={imageUrl} width={520} height={480} alt='' priority />
      </ImageContainer>
      <ProductDetails>
        <h1>{name}</h1>
        <span>{price}</span>

        <p>{description}</p>

        <button disabled={isCreatingCheckoutSession} onClick={handleBuyProduct}>
          Comprar agora
        </button>
      </ProductDetails>
    </ProductContainer>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  const productId = params!.id;

  const product = await stripe.products.retrieve(productId, {
    expand: ["default_price"],
  });

  const { id, name, images, description } = product;
  const price = product.default_price as Stripe.Price;
  const oneHourRevalidate = 60 * 60 * 1;

  return {
    props: {
      product: {
        id,
        name,
        description,
        imageUrl: images[0],
        price: new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(price.unit_amount! / 100),
        defaultPriceId: price.id,
      },
    },
    revalidate: oneHourRevalidate,
  };
};
