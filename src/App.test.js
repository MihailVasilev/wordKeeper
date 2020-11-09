import { render, screen } from "@testing-library/react";
import ConnectedApp from "./App";

test("renders learn react link", () => {
  render(<ConnectedApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
