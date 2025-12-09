import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import logoHeaderDefault from "../assets/img/logo-header.png";
import logoHeaderHome from "../assets/img/logo-header-white.png";
import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";
import React from "react";

const pages = [
  { label: "Camisas", id: "quemsomos" },
  { label: "Bottons", id: "projetos" },
  { label: "Canecas", id: "equipe" },
];

export const Header = ({ variant = "default" }) => {
  const theme = useTheme();

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const isHome = variant === "home";

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const defaultStyles = {
    backgroundColor: "white",
  };

  const homeStyles = {
    backgroundColor: "transparent",
    boxShadow: "none",
  };

  const defaultLoginStyles = {
    color: "colorDefault.main",
    borderColor: "primary.main",
  };
  const homeLoginStyles = {
    backgroundColor: "colorDefault.main",
    color: "primary.main",
    borderColor: "colorDefault.main",
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.9)",
      borderColor: "colorDefault.main",
    },
  };

  const defaultRegisterStyles = {
    backgroundColor: "transparent",
    color: "primary.main",
    "&:hover": {
      backgroundColor: "primary.dark",
      color: "colorDefault.main",
    },
  };

  const homeRegisterStyles = {
    backgroundColor: "transparent",
    borderColor: "colorDefault.main",
    color: "colorDefault.main",
    "&:hover": {
      borderColor: "primary.main",
      backgroundColor: "primary.main",
    },
  };

  const homeButtonStyles = {
    color: theme.palette.colorDefault.main,
  };

  const dafaultButtonStyles = {
    color: theme.palette.colorTextHeader.main,
  };

  const appBarStyles = isHome ? homeStyles : defaultStyles;
  const loginStyles = isHome ? homeLoginStyles : defaultLoginStyles;
  const registerStyles = isHome ? homeRegisterStyles : defaultRegisterStyles;
  const positionToUse = isHome ? "absolute" : "sticky";
  const colorButton = isHome ? homeButtonStyles : dafaultButtonStyles;
  const logoToUse = isHome ? logoHeaderHome : logoHeaderDefault;

  return (
    <AppBar
      position={positionToUse}
      sx={{ ...appBarStyles, top: 0, zIndex: 999 }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ position: "relative" }}>
          <Box
            component="img"
            src={logoToUse}
            alt="Logo Asa Branca"
            sx={{ display: { xs: "none", md: "flex" }, mr: 1, height: 50 }}
          />

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
                textAlign: "center",
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.id}
                  onClick={handleCloseNavMenu}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    sx={{
                      textAlign: "center",
                      fontFamily: "Onest",
                      color: colorButton,
                    }}
                  >
                    {page.label}
                  </Typography>
                </MenuItem>
              ))}
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: 1, p: 2 }}
              >
                <Button
                  component={RouterLink}
                  to="/register"
                  variant="outlined"
                  sx={{ borderRadius: 5 }}
                >
                  Inscreva-se
                </Button>
                <Button
                  component={RouterLink}
                  to="/login"
                  variant="contained"
                  endIcon={<LoginIcon />}
                  sx={{ borderRadius: 5 }}
                >
                  Entrar
                </Button>
              </Box>
            </Menu>
          </Box>

          <Box
            component="img"
            src={logoToUse}
            alt="Logo Asa Branca"
            sx={{
              display: { xs: "flex", md: "none" },
              height: 40,
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          />

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page.id}
                component={Link}
                to={page.id}
                smooth={true}
                duration={500}
                spy={true}
                offset={-70}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: colorButton,
                  fontFamily: "Onest",
                  display: "block",
                }}
              >
                {page.label}
              </Button>
            ))}
          </Box>

          <Box
            sx={{ flexGrow: 0, display: { xs: "none", md: "flex" }, gap: 2 }}
          >
            <Button
              variant="outlined"
              sx={{ ...registerStyles, borderRadius: 5 }}
            >
              Inscreva-se
            </Button>
            <Button
              variant="contained"
              endIcon={<LoginIcon />}
              sx={{ ...loginStyles, borderRadius: 5 }}
            >
              Entrar
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
