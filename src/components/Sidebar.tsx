import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import Image from "next/image";

import ShirtImage from "../assets/shirt.png";

import {
  Button,
  Flex,
  IconButton,
  ImageContainer,
  StyledContent,
  StyledOverlay,
  StyledTitle,
} from "./styles";

export function SidebarCart() {
  return (
    <DialogPrimitive.Root>
      <DialogPrimitive.Trigger asChild>
        <Button>Adicionar à sacola</Button>
      </DialogPrimitive.Trigger>
      <DialogPrimitive.Portal>
        <StyledOverlay />
        <StyledContent>
          <StyledTitle>Sacola de compras</StyledTitle>
          <div>
            <ImageContainer>
              <Image src={ShirtImage} alt='' />
            </ImageContainer>
            <div>
              <p>Camiseta X</p>
              <span>R$ 79,90</span>
            </div>
          </div>

          <div>
            <div>
              <span>Quantidade:</span>
              <span>3 items</span>
            </div>

            <div>
              <span>Total:</span>
              <span>R$ 79,90</span>
            </div>
          </div>

          <Flex>
            <DialogPrimitive.Close asChild>
              <Button>Finalizar compra</Button>
            </DialogPrimitive.Close>
          </Flex>
          <DialogPrimitive.Close asChild>
            <IconButton aria-label='Close'>
              <Cross2Icon />
            </IconButton>
          </DialogPrimitive.Close>
        </StyledContent>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}
