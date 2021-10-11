import React from "react";
import { MyContext, newStore } from "./store";
import MyComponent from "./myComponent/myComponent";

function App() {
  return (
    <MyContext.Provider value={newStore}>
      <div>
        <div>Hello from React and Mobx Playground !</div>
        <MyComponent />
      </div>
    </MyContext.Provider>
  );
}

export default App;
