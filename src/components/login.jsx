import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
  Snackbar,
  Alert,
  Link as MuiLink,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { Header } from "./header";
import { Footer } from "./footer";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { SpanStyle } from "./loginStyle";
import { loginUser } from "../services/api";
import React from "react";

export const Login = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const [values, setValues] = React.useState({
    email: "",
    password: "",
  });

  const [notification, setNotification] = React.useState({
    open: false,
    message: "",
    severity: "success", // pode ser 'success' ou 'error'
  });

  const handleCloseNotification = (event, reason) => {
    // Não fecha o alerta se o usuário clicar fora (clickaway)
    if (reason === "clickaway") {
      return;
    }
    setNotification((prev) => ({ ...prev, open: false }));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const dataToSend = {
      email: values.email,
      password: values.password,
    };

    console.log("Enviando para o login:", dataToSend);

    try {
      // 4. Chame a API de login
      const response = await loginUser(dataToSend);

      // 5. SUCESSO!
      console.log("Login bem-sucedido:", response);

      // 6. SALVE O TOKEN! (A parte mais importante)
      localStorage.setItem("authToken", response.token);

      setNotification({
        open: true,
        message:
          "Login realizado com sucesso! Bem vindo! " + response.user.name,
        severity: "success",
      });

      // Aguarda 2 segundos (2000ms) antes de redirecionar
      setTimeout(() => {
        window.location.href = "/login"; // Sua rota de login
      }, 2000);
    } catch (error) {
      // 8. ERRO!
      console.error("Erro no login:", error);
      // 'error.message' deve ser "Email ou senha incorretos" ou algo assim
      setNotification({
        open: true,
        message: `Erro ao logar: ${error.message || "Tente novamente."}`,
        severity: "error",
      });
    }
  };

  return (
    <>
      <Header />
      <Snackbar
        open={notification.open}
        autoHideDuration={6000} // Fecha após 6 segundos
        onClose={handleCloseNotification}
        // Posição (opcional, mas 'top' 'right' é bom)
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={handleCloseNotification}
          severity={notification.severity}
          variant="filled" // Deixa o fundo colorido
          sx={{ width: "100%" }}
        >
          {notification.message}
        </Alert>
      </Snackbar>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
        }}
      >
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
            width: "30%",
            margin: "5% 0",
            gap: 2,
          }}
        >
          <Typography variant="h5">
            <strong>Bem vindo de volta</strong>
          </Typography>
          <Typography variant="body2">
            Preencha as informações para entrar na sua conta
          </Typography>
          <TextField
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            label="E-mail"
            fullWidth
          />
          <FormControl fullWidth variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">Senha</InputLabel>
            <OutlinedInput
              label="Senha"
              id="outlined-adornment-password"
              name="password"
              value={values.password}
              onChange={handleChange}
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label={
                      showPassword
                        ? "hide the password"
                        : "display the password"
                    }
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    onMouseUp={handleMouseUpPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ mt: 2 }}
            >
              Entrar
            </Button>
            <Typography variant="body2" sx={{ textAlign: "center", mt: 2 }}>
              Ainda não tem conta?{" "}
              <SpanStyle component={RouterLink} to="/register">
                Inscreva-se
              </SpanStyle>
            </Typography>
          </FormControl>
        </Box>
      </Box>
      <Footer />
    </>
  );
};
