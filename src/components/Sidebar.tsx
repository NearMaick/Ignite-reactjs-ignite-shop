import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import {
  Button,
  Flex,
  IconButton,
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
