import { Box, Typography, useTheme } from "@mui/material";
import { Button } from "@mui/material";

export const Footer = () => {
  const theme = useTheme();
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "2% 5%",
        }}
      >
        <Typography
          variant="subtitle1"
          color={theme.palette.colorTextHeader.main}
        >
          &copy; 2025 Asa Branca
        </Typography>
        <Button
          variant="text"
          size="small"
          sx={{ fontFamily: "'Albert Sans', sans-serif" }}
        >
          Termos e Condições - Política de Privacidade
        </Button>
      </Box>
    </>
  );
};
