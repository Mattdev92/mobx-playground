import React from "react";
import { render } from "@testing-library/react";
import MyComponent from "./myComponent";

it("renders my Component correctly", () => {
  const { getByTestId } = render(<MyComponent />);
  expect(getByTestId("mylist")).toHaveTextContent("My Item");
});
