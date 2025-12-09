import { Box, ButtonBase, styled, Typography } from "@mui/material";

export const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  height: 550,
  [theme.breakpoints.down("sm")]: {
    width: "100% !important", // Overrides inline-style
    height: 100,
  },
  "&:hover, &.Mui-focusVisible": {
    zIndex: 1,
    "& .MuiImageBackdrop-root": {
      backgroundColor: theme.palette.primary.main,
      opacity: 1,
    },
  },
}));

export const ImageSrc = styled("span")({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: "cover",
  backgroundPosition: "center 40%",
});

export const Image = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.common.white,
}));

export const ImageBackdrop = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  opacity: 0,
  backgroundColor: theme.palette.primary.main,
  transition: theme.transitions.create(
    ["background-color", "opacity"], // Assista ambas
    {
      duration: 300,
      easing: theme.transitions.easing.easeInOut,
    }
  ),
}));

export const BoxInfo = styled(Box)(({ theme }) => ({
  padding: "5% 15%",
}));

export const BoxCard = styled(Box)(({ theme }) => ({
  padding: "2% 15% 5%",
  display: "flex",
  justifyContent: "space-around",
  gap: "2%",
}));

export const TypographyStyle1 = styled(Typography)(
  ({ theme, mainText, variantCard }) => ({
    color: theme.palette.colorTitle.main,
    fontFamily: "'Albert Sans', sans-serif",
    fontWeight: 700,

    ...(mainText && {
      fontWeight: 400,
    }),

    ...(variantCard && {
      color: theme.palette.secondary.main,
    }),
  })
);

export const TypographyStyle2 = styled("span")(({ theme }) => ({
  color: theme.palette.primary.main,
}));
