// logica para retornar o token e validar o login
export type Credentials = { email: string; password: string };
export type LoginResult = { token: string; userId: string; status: number };

export const authenticateUser = async ({
  email,
  password,
}: Credentials): Promise<LoginResult> => {
  // Simulação de chamada a uma API de autenticação
  // Aqui posso usar fetch ou axios para fazer a requisição real

  try {
    // Aqui eu faria uma chamada real para a API de autenticação
    // Ex:
    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password, token: "teste123" }),
    });

    if (res.status !== 200) {
      console.log("Falha no login");
    } else {
      console.log("Login bem-sucedido");
    }

    const data = await res.json();
    console.log("Dados recebidos da API:", data);

    return {
      token: data,
      userId: "natanzinhoCodedev",
      status: res.status,
    };
  } catch (err) {
    console.error("Erro na autenticação:", err);
    return {
      token: "",
      userId: "",
      status: 500,
    };
  }
};
