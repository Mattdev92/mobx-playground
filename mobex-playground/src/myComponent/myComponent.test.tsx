import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import MyComponent from "./myComponent";
import { MyContext, newStore } from "../store";

describe("my first group of test", () => {
  it("renders my Component correctly", () => {
    const { getByTestId } = render(
      <MyContext.Provider value={newStore}>
        <MyComponent />
      </MyContext.Provider>
    );
    expect(getByTestId("mylist")).toHaveTextContent("My Item");
  });
  it("add new item works correctly", () => {
    const { getByTestId } = render(
      <MyContext.Provider value={newStore}>
        <MyComponent />
      </MyContext.Provider>
    );
    const input = getByTestId("inputt");
    fireEvent.change(input, { target: { value: "Mati" } });
    fireEvent.click(screen.getByTestId("button"));
    expect(getByTestId("Mati")).toBeDefined();
  });
});
