import { assignVars, createThemeContract, style } from "@vanilla-extract/css";

export const vars = createThemeContract({
  fonts: {
    sansSerif: null,
  },
  colors: {
    background: null,
    primary: null,
    secondary: null,
    spotifyGreen: null,
  },
});

export const theme = style({
  vars: assignVars(vars, {
    fonts: {
      sansSerif: "var(--font-inter)",
    },
    colors: {
      background: "#fafaf9",
      primary: "#18181b",
      secondary: "#71717a",
      spotifyGreen: "#1ed760",
    },
  }),

  margin: 0,
  backgroundColor: vars.colors.background,
  color: vars.colors.primary,

  "@media": {
    "(prefers-color-scheme: dark)": {
      vars: assignVars(vars.colors, {
        background: "#18181b",
        primary: "#fafaf9",
        secondary: "#a1a1aa",
        spotifyGreen: "#1ed760",
      }),
    },
  },
});
