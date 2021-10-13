import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import MyComponent from "./myComponent";
import { MyContext, newStore } from "../store";

describe("my first group of test", () => {
  beforeEach(() => {
    render(
      <MyContext.Provider value={newStore}>
        <MyComponent />
      </MyContext.Provider>
    );
  });
  it("renders my Component correctly", () => {
    expect(screen.getByTestId("mylist")).toHaveTextContent("My Item");
  });
  it("add new item works correctly", () => {
    const input = screen.getByTestId("inputt");
    fireEvent.change(input, { target: { value: "Mati" } });
    fireEvent.click(screen.getByTestId("button"));
    expect(screen.getByTestId("Mati")).toBeDefined();
  });
  it("delete works correctly", () => {
    const input = screen.getByTestId("inputt");
    fireEvent.change(input, { target: { value: "Kamil" } });
    fireEvent.click(screen.getByTestId("button"));
    expect(screen.getByTestId("Kamil")).toBeDefined();
    fireEvent.click(screen.getByTestId("deleteMati"));
    const Mat = screen.queryByText("Mati");
    expect(Mat).toBe(null);
  });
});
