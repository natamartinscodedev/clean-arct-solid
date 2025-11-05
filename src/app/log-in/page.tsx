"use client";

import { authenticateUser } from "@/services/auth";
import { useState } from "react";

const Login = () => {
  // Essa pagina de login, fica responsavel por capturar os dados do usuario
  // e chamar a funcao de autenticação do serviço auth.ts, apenas isso!
  // caso mude futuramente de framework ou biblioteca, só alteramos a pagina de login
  // sem impactar na logica de autenticação que esta isolada no serviço auth.ts e na api/login/index.ts

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    // função para capturar o submit do form de login
    event.preventDefault();
    setLogin(true);
    const { userId, token } = await authenticateUser({ email, password });
    console.log("Usuário logado com ID:", userId, "Token:", token);

    if (token) {
      // criar tratamento de menssagem de sucesso ou erro em aquivo separado
      setLogin(false);
      // redirecionar para a pagina protegida ou dashboard
      console.log("Redirecionando para a página protegida...");
    } else {
      setLogin(false);
      console.log("Falha no login. Verifique suas credenciais.");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} method="post" className="form_login">
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" disabled={login === true}>
          Login
        </button>
      </form>
    </>
  );
};

export default Login;
