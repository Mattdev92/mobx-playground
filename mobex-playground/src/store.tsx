import { makeObservable, observable } from "mobx";
import React from "react";

interface TodoItems {
  name: string;
}
class MobxStore {
  constructor() {
    makeObservable(this, {
      todoItems: observable,
      addItems: observable,
      deleteItem: observable,
    });
  }
  todoItems: TodoItems[] = [{ name: "Emilka" }];
  addItems(item: string) {
    this.todoItems.push({ name: item });
  }
  deleteItem(item: string) {
    console.log("here");
    this.todoItems = this.todoItems.filter(
      (todoItem) => todoItem.name !== item
    );
  }
}
export const newStore = new MobxStore();
export const MyContext = React.createContext(newStore);
