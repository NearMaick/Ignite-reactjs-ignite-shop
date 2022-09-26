import { useRouter } from "next/router";
import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from "../../styles/pages/product";

export default function Product() {
  const { query } = useRouter();

  return (
    <ProductContainer>
      <ImageContainer></ImageContainer>
      <ProductDetails>
        <h1>CamisetaX</h1>
        <span>7990</span>

        <p>
          Mussum Ipsum, cacilds vidis litro abertis. Mauris nec dolor in eros
          commodo tempor. Mussum Ipsum, cacilds vidis litro abertis. Admodum
          accumsan disputationi eu sit. Vide electram sadipscing et per. Per
          aumento de cachacis, eu reclamis. Paisis, filhis, espiritis santis.
          Cevadis im ampola pa arma uma pindureta.
        </p>

        <button>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  );
}
