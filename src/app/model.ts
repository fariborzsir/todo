export class Model {
  user: string;
  items: TodoItem[];

  constructor() {
    this.user = "Fariborz";
    this.items = [new TodoItem("Buy Flowers", false),
      new TodoItem("Get Shoes", false),
      new TodoItem("Collect Tickets", true),
      new TodoItem("Call Janet", false)]
  }
}

export class TodoItem {
  action: string;
  done: boolean;

  constructor(action: string, done: boolean) {
    this.action = action;
    this.done = done;
  }
}
