import Link from "next/link";
import { ImageContainer, SuccessContainer } from "../styles/pages/success";

export default function Success() {
  return (
    <SuccessContainer>
      <h1>Compra efetuada</h1>
      <ImageContainer></ImageContainer>

      <p>
        Muito boa, <strong>Maick Souza</strong>, sua <strong>Camiseta X</strong>{" "}
        já está a caminho de sua casa
      </p>

      <Link href='/'>Voltar ao catálogo</Link>
    </SuccessContainer>
  );
}
