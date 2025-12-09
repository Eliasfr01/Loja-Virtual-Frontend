import { styled } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export const SpanStyle = styled(RouterLink)(({ theme }) => ({
  color: theme.palette.primary.main,
  textDecoration: "none",
}));
