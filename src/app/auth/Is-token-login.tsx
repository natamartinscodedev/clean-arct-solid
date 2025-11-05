// tratamento de autenticação de login
// aqui podemos adicionar lógica para verificar se o usuário está autenticado
// e redirecionar para dashboard/pagina de user ou bloquear o acesso conforme necessário
type TokenValidateProps = { token: string };

const IsTokenValidate = ({ token }: TokenValidateProps) => {
  try {
    // funcionalidade de validação de token simples
    // em um caso real, aqui faríamos uma verificação mais robusta, talvez consultando um banco de dados ou serviço externo
    if (token !== "teste123") {
      return {
        tokenValid: false,
        messager: "Token inválido",
        token: null,
      };
    }

    return {
      tokenValid: true,
      messager: "Token válido",
      token: token,
    };
  } catch (error) {
    return { error: "Erro na verificação de token" };
  }
};

export default IsTokenValidate;
