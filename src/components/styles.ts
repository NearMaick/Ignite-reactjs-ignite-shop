import { blackA, green, mauve, violet } from "@radix-ui/colors";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { keyframes } from "@stitches/react";
import { styled } from "../styles";

export const overlayShow = keyframes({
  "0%": { opacity: 0 },
  "100%": { opacity: 1 },
});

export const contentShow = keyframes({
  "0%": { opacity: 0, transform: "translate(-50%, -48%) scale(.96)" },
  "100%": { opacity: 1, transform: "translate(-50%, -50%) scale(1)" },
});

export const StyledOverlay = styled(DialogPrimitive.Overlay, {
  backgroundColor: blackA.blackA9,
  position: "fixed",
  inset: 0,
  "@media (prefers-reduced-motion: no-preference)": {
    animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
});

export const StyledContent = styled(DialogPrimitive.Content, {
  backgroundColor: "$gray900",
  borderRadius: 8,
  // boxShadow:
  //   "hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px",
  position: "fixed",
  top: 0,
  // left: "50%",
  right: 0,
  // transform: "translate(-50%, -50%)",
  width: "100vw",
  maxWidth: "450px",
  height: "100vh",
  padding: 25,
  // "@media (prefers-reduced-motion: no-preference)": {
  //   animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  // },
  "&:focus": { outline: "none" },
});

export const StyledTitle = styled(DialogPrimitive.Title, {
  fontWeight: 500,
  color: "$gray300",
  margin: "10px 0 20px",
  fontSize: 17,
});

// Your app...
export const Box = styled("div", {});

export const Flex = styled("div", {
  display: "flex",
  marginTop: 25,
  justifyContent: "flex-end",
});

export const Button = styled("button", {
  all: "unset",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 4,
  padding: "0 15px",
  fontSize: 15,
  lineHeight: 1,
  fontWeight: 500,
  height: 35,

  variants: {
    variant: {
      violet: {
        backgroundColor: "white",
        color: violet.violet11,
        boxShadow: `0 2px 10px ${blackA.blackA7}`,
        "&:hover": { backgroundColor: mauve.mauve3 },
        "&:focus": { boxShadow: `0 0 0 2px black` },
      },
      green: {
        backgroundColor: green.green4,
        color: green.green11,
        "&:hover": { backgroundColor: green.green5 },
        "&:focus": { boxShadow: `0 0 0 2px ${green.green7}` },
      },
    },
  },

  defaultVariants: {
    variant: "violet",
  },
});

export const IconButton = styled("button", {
  all: "unset",
  fontFamily: "inherit",
  borderRadius: "100%",
  height: 25,
  width: 25,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  color: "$gray300",
  position: "absolute",
  top: 10,
  right: 10,

  "&:hover": { backgroundColor: violet.violet4 },
  "&:focus": { boxShadow: `0 0 0 2px ${violet.violet7}` },
});
