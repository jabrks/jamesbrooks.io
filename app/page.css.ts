import { keyframes, style } from "@vanilla-extract/css";
import { vars } from "./styles/vars.css";

export const main = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
});

export const content = style({
  position: "relative",
  left: "2.5rem",
  zIndex: 2,
});

const horizontalReveal = keyframes({
  "0%": { transform: "scaleX(100%)" },
  "100%": { transform: "scaleX(0%)" },
});

export const span = style({
  position: "relative",
  padding: "0 1rem",
  marginRight: "auto",
  backgroundColor: vars.colors.background,
  zIndex: 1,

  "::before": {
    content: "",
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: vars.colors.primary,
    transformOrigin: "right",
    animation: `${horizontalReveal} 0.5s 0.75s ease forwards`,
    zIndex: 2,
  },

  "::after": {
    content: "",
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: vars.colors.background,
    transformOrigin: "right",
    animation: `${horizontalReveal} 0.5s 0.5s ease forwards`,
    zIndex: 3,
  },
});

export const heading = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.25rem",
  fontFamily: vars.fonts.sansSerif,
  fontSize: "6rem",
  margin: 0,
});

export const paragraph = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.25rem",
  fontFamily: vars.fonts.serif,
  fontSize: "1.5rem",
  margin: "2.5rem 0 0",
  color: vars.colors.secondary,
});

export const starling = style({
  position: "relative",
  textDecoration: "none",
  color: vars.colors.primary,
  zIndex: 1,

  "::before": {
    content: "",
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: vars.colors.starlingTeal,
    zIndex: -1,
    transform: "scaleY(20%)",
    transformOrigin: "bottom",
    transition: ".2s transform",
  },

  selectors: {
    "&:hover::before": {
      transform: "scaleY(50%)",
    },
  },
});

const fadeIn = keyframes({
  "0%": { opacity: 0 },
  "100%": { opacity: 1 },
});

export const link = style({
  position: "relative",
  textDecoration: "none",
  color: "inherit",
  display: "inline-block",
  fontFamily: vars.fonts.sansSerif,
  fontSize: "1.25rem",
  fontWeight: "600",
  marginTop: "4rem",
  marginLeft: "1rem",
  paddingBottom: "0.3125rem",
  opacity: 0,
  animation: `${fadeIn} 0.5s 2.25s ease forwards`,

  "::before": {
    content: "",
    position: "absolute",
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: vars.colors.primary,
    height: "2px",
    transition: ".35s opacity, .35s transform",
  },

  selectors: {
    "&:hover::before": {
      opacity: 0,
      transform: "translateY(5px)",
    },
  },
});

const verticalReveal = keyframes({
  "0%": { transform: "scaleY(100%)" },
  "100%": { transform: "scaleY(0%)" },
});

export const profile = style({
  position: "relative",
  left: "-2.5rem",
  zIndex: 1,

  "::before": {
    content: "",
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: vars.colors.primary,
    transformOrigin: "top",
    animation: `${verticalReveal} 0.5s 1.75s ease forwards`,
    zIndex: 2,
  },

  "::after": {
    content: "",
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: vars.colors.background,
    transformOrigin: "top",
    animation: `${verticalReveal} 0.5s 1.5s ease forwards`,
    zIndex: 3,
  },
});
