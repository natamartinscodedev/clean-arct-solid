// HomePage.test.tsx (ou .tsx caso esteja usando TSX)
import { render, screen } from "@testing-library/react";
import HomePage from "./page";

describe("Home Page", () => {
  it("should render the home page correctly", () => {
    render(<HomePage />);
    const heading = screen.getByText("Welcome to the Home Page");
    const paragraph = screen.getByText(
      "This is the main landing page of the application."
    );
    const loginLink = screen.getByText("Login");

    expect(heading).toBeInTheDocument();
    expect(paragraph).toBeInTheDocument();
    expect(loginLink).toBeInTheDocument();
  });

  it("should have a link to the login page", () => {
    render(<HomePage />);
    const loginLink = screen.getByText("Login");
    expect(loginLink).toHaveAttribute("href", "/log-in");
  });
});
