import { Component } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent {

  todos : string[] = []

  addTodo(todo : string) : void {
    this.todos.push(todo)
  }

  removeTodo(index : number) : void {
    this.todos.splice(index, 1)
  }
}
