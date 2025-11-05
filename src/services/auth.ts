// logica para retornar o token e validar o login
export type Credentials = { email: string; password: string };
export type LoginResult = { token: string; userId: string };

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

    if (!res.ok) {
      throw new Error("Falha na autenticação");
    } else {
      console.log("Login bem-sucedido");
    }

    const data = await res.json();

    return { token: data.message, userId: "natanzinho Codedev" };
  } catch (error) {
    throw new Error("Erro na autenticação");
  }
};
