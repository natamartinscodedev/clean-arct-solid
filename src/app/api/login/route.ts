import IsTokenValidate from "@/app/auth/Is-token-login";
import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({ message: "Get data sucessfull" }, { status: 200 });
};

// Login endpoint para bater na api e validar o usuário
// Aqui que a lógica de autenticação vai acontecer
// Podemos validar o email e a senha recebidos no corpo da requisição via POST e retornar um token ou mensagem de erro
//
export const POST = async (request: Request) => {
  try {
    const body = await request.json();
    const { email, password, token } = body;

    // Aqui você pode adicionar a lógica para validar o email e a senha
    const { tokenValid, messager } = IsTokenValidate({ token });
    console.log("Validação de token:", tokenValid, messager);

    if (!email || !password) {
      // caso falte email ou senha, retornamos um erro
      return NextResponse.json(
        { message: "Email e senha são obrigatórios" },
        { status: 400 }
      );
    }

    if (tokenValid === true) {
      return NextResponse.json({ message: messager }, { status: 200 });
    } else {
      return NextResponse.json({ message: messager }, { status: 401 });
    }
  } catch (error) {
    return NextResponse.json(
      { message: "Erro ao processar a requisição" },
      { status: 500 }
    );
  }
};
