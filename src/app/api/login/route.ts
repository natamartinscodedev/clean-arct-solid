import IsTokenValidate from "@/app/auth/Is-token-login";
import { NextResponse } from "next/server";

// Login endpoint para bater na api e validar o usuário
// Aqui que a lógica de autenticação vai acontecer
// Podemos validar o email e a senha recebidos no corpo da requisição via POST e retornar um token ou mensagem de erro
//

type tokenValidate = { token: string; email?: string; password?: string };

export const POST = async (request: Request) => {
  try {
    const body = await request.json();
    const { email, password, token }: tokenValidate = body;
    const emailMock = "nata.codedev@gmail.com";
    const passwordMock = "123456";

    // Aqui você pode adicionar a lógica para validar o email e a senha
    const { tokenValid } = IsTokenValidate({ token });

    if (
      email !== emailMock ||
      password !== passwordMock ||
      tokenValid !== true
    ) {
      // caso falte email ou senha, retornamos um erro
      return NextResponse.json(
        { message: "Email or password is incorrect!" },
        { status: 401 }
      );
    } else {
      return NextResponse.json({ message: "login valido" }, { status: 200 });
    }
  } catch (error) {
    return NextResponse.json(
      { message: "Erro ao processar a requisição" },
      { status: 500 }
    );
  }
};
