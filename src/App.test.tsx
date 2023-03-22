import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("renders header", () => {
    render(<App />);
    const header = screen.getByText(/switch/i);
    expect(header).toBeInTheDocument();
  });
});
