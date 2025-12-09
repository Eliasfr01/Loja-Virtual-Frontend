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
import { IMaskInput } from "react-imask";
import { SpanStyle } from "./loginStyle";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Header } from "./header";
import { Footer } from "./footer";
import { registerUser } from "../services/api";
import React from "react";

const TextMaskCustom = React.forwardRef(function TextMaskCustom(props, ref) {
  const { onChange, ...other } = props;
  return (
    <IMaskInput
      {...other}
      // As props da máscara vêm AQUI DENTRO
      mask="000.000.000-00"
      definitions={{
        "#": /[1-9]/,
      }}
      // ---
      inputRef={ref}
      onAccept={(value) => onChange({ target: { name: props.name, value } })}
      overwrite
    />
  );
});

const PhoneMaskCustom = React.forwardRef(function PhoneMaskCustom(props, ref) {
  const { onChange, ...other } = props;
  return (
    <IMaskInput
      {...other}
      mask={[
        { mask: "(00) 0000-0000" }, // Telefone Fixo (8 dígitos)
        { mask: "(00) 00000-0000" }, // Telefone Celular (9 dígitos)
      ]}
      inputRef={ref}
      onAccept={(value) => onChange({ target: { name: props.name, value } })}
      overwrite
    />
  );
});
export const Register = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const [values, setValues] = React.useState({
    name: "",
    email: "",
    phone: "",
    cpf: "",
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

    console.log("Enviando para a API:", values);

    try {
      const response = await registerUser(values);
      console.log("Usuário registrado com sucesso:", response);
      setNotification({
        open: true,
        message:
          "Cadastro realizado com sucesso! Bem vindo! " + response.user.name,
        severity: "success",
      });

      // Aguarda 2 segundos (2000ms) antes de redirecionar
      setTimeout(() => {
        window.location.href = "/login"; // Sua rota de login
      }, 2000);
    } catch (error) {
      console.error(
        "Erro ao cadastrar usuário:" + (error.message || "Tente novamente.")
      );
      setNotification({
        open: true,
        message: `Erro ao cadastrar: ${error.message || "Tente novamente."}`,
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
            <strong>Crie sua conta</strong>
          </Typography>
          <Typography variant="body2">
            Preencha as informações para criar sua conta
          </Typography>
          <TextField
            name="name"
            label="Nome"
            type="text"
            required
            fullWidth
            value={values.name}
            onChange={handleChange}
          />
          <TextField
            name="email"
            label="E-mail"
            type="email"
            required
            fullWidth
            value={values.email}
            onChange={handleChange}
          />
          <TextField
            label="Whatsapp"
            name="phone"
            id="phone-mask"
            value={values.phone}
            helperText="Por favor, digite apenas números"
            onChange={handleChange}
            type="tel"
            required
            defaultCountry="BR"
            fullWidth
            InputProps={{
              inputComponent: PhoneMaskCustom,
            }}
          />
          <TextField
            label="CPF"
            required
            name="cpf"
            id="cpf-mask"
            value={values.cpf}
            onChange={handleChange}
            InputProps={{
              inputComponent: TextMaskCustom,
            }}
            fullWidth
          />
          <FormControl fullWidth required variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">Senha</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              label="Senha"
              name="password"
              type={showPassword ? "text" : "password"}
              required
              value={values.password}
              onChange={handleChange}
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
          </FormControl>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
          >
            Registre-se
          </Button>
          <Typography variant="body2" sx={{ textAlign: "center" }}>
            Já tem uma conta?{" "}
            <SpanStyle component={RouterLink} to="/login">
              Logar-se
            </SpanStyle>
          </Typography>
        </Box>
      </Box>
      <Footer />
    </>
  );
};
