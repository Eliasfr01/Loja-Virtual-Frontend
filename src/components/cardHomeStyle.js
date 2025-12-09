import { styled, Typography } from "@mui/material";

export const TypographyInfoCard = styled(Typography)(({ theme }) => ({
  color: theme.palette.colorTitle.main,
  fontFamily: "'Albert Sans', sans-serif",
  fontWeight: 400,
  lineHeight: 1.8,
}));
