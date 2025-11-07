import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LoginPage from "./page";

// mock next/navigation
const pushMock = jest.fn();

jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: pushMock,
    replace: jest.fn(),
    // adicione outras props/metodos que seu componente usa
  }),
}));

describe("Test login page", () => {
  it("shoud render the tites page login", () => {
    render(<LoginPage />);
    const useremailLabel = screen.getByText("Email");
    const userpasswordLabel = screen.getByText("Password");
    const userbutomLogin = screen.getByText("Login");

    expect(useremailLabel).toBeInTheDocument();
    expect(userpasswordLabel).toBeInTheDocument();
    expect(userbutomLogin).toBeInTheDocument();
  });

  it("expect render error login", async () => {
    render(<LoginPage />);
    const inputEmail = screen.getByTestId("email");
    const inputPassword = screen.getByTestId("password");
    const loginButton = screen.getByRole("button", { name: /login/i });

    await userEvent.type(inputEmail, "nata.codedev@gmail.com");
    await userEvent.type(inputPassword, "12345");

    userEvent.click(loginButton);

    const errorMessage = await screen.findByTestId("error-msg-login");

    expect(errorMessage).toBeInTheDocument();
    expect(errorMessage).toHaveTextContent(
      "Falha no login. Verifique suas credenciais."
    );
  });

  //   it("expect pass on login", async () => {
  //     render(<LoginPage />);
  //     const inputEmail = screen.getByTestId("email");
  //     const inputPassword = screen.getByTestId("password");
  //     const loginButton = screen.getByRole("button", { name: /login/i });

  //     await userEvent.type(inputEmail, "nata.codedev@gmail.com");
  //     await userEvent.type(inputPassword, "123456");

  //     userEvent.click(loginButton);

  //     expect(pushMock).toHaveBeenCalledWith("/dashboard/UserId");
  //   });
});
