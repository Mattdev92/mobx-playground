import React, { useContext, useState } from "react";
import { observer } from "mobx-react";
import { MyContext } from "../store";

const MyComponent = observer(() => {
  const mobxStore = useContext(MyContext);
  const [item, setItem] = useState("");
  return (
    <>
      <h1 data-testid='mylist'>My Item list</h1>
      <ul>
        {mobxStore.todoItems.map((elem, i) => (
          <div key={`${i},${elem}`}>
            <li>
              Hello from MyCoponent item number {i} which is {elem.name}
            </li>
            <button onClick={() => mobxStore.deleteItem(elem.name)}>
              delete this item
            </button>
          </div>
        ))}
      </ul>
      <input
        value={item}
        name="input"
        type="text"
        onChange={(e) => setItem(e.target.value)}
        onKeyUp={(e) => {
          if (e.keyCode === 13) {
            mobxStore.addItems(item);
            setItem("");
          }
        }}
      />
      <button
        onClick={() => {
          mobxStore.addItems(item);
          setItem("");
        }}
      >
        Add me to the list
      </button>
    </>
  );
});

export default MyComponent;
