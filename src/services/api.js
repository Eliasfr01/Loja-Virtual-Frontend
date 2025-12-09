import axios from "axios";

// 1. URL base extraída das suas imagens
const api = axios.create({
  baseURL: "https://loja-virtual-backend.vercel.app/api/v0",
});

// 2. Função de Cadastro (Register)
export const registerUser = async (data) => {
  try {
    // 3. Endpoint exato do Postman
    const response = await api.post("/user/register", data);

    // 4. Sucesso! Retorna os dados (o objeto 'user' que vimos na imagem)
    return response.data;
  } catch (error) {
    // 5. Joga o erro (ex: "Email já existe") para o componente tratar
    throw error.response.data;
  }
};

// 6. Função de Login (PENDENTE)
export const loginUser = async (data) => {
  try {
    const response = await api.post("/user/login", data);

    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
