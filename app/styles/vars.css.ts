import { assignVars, createThemeContract, style } from "@vanilla-extract/css";

export const vars = createThemeContract({
  fonts: {
    sansSerif: null,
    serif: null,
  },
  colors: {
    background: null,
    primary: null,
    secondary: null,
    starlingTeal: null,
  },
});

export const theme = style({
  vars: assignVars(vars, {
    fonts: {
      sansSerif: "var(--font-poppins)",
      serif: "var(--font-merriweather)",
    },
    colors: {
      background: "#ffffff",
      primary: "#000000",
      secondary: "#404040",
      starlingTeal: "#19d3c5",
    },
  }),

  backgroundColor: vars.colors.background,
  color: vars.colors.primary,

  "@media": {
    "(prefers-color-scheme: dark)": {
      vars: assignVars(vars.colors, {
        background: "#1e293b",
        primary: "#ffffff",
        secondary: "#cbd5e1",
        starlingTeal: "#19d3c5",
      }),
    },
  },
});
