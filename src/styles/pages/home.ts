import { styled } from "..";

export const HomeContainer = styled("main", {
  display: "flex",
  gap: "3rem",
  width: "100%",
  maxWidth: "calc(100vw - ((100wv - 1180px) / 2))",
  marginLeft: "auto",
  minHeight: 656,
});

export const Product = styled("a", {
  cursor: "pointer",
  background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
  padding: "0.25rem",
  position: "relative",
  overflow: "hidden",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  img: {
    objectFit: "cover",
  },

  footer: {
    position: "absolute",
    bottom: "0.25rem",
    left: "0.25rem",
    right: "0.25rem",
    padding: "2rem",

    backgroundColor: "rgba(0, 0, 0, 0.6)",
    borderRadius: 6,

    display: "flex",
    justifyContent: "space-between",
  },
});
