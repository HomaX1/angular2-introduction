import { Component, OnInit } from "@angular/core";

import { Todo } from "../shared/todo";
import { TodoService } from "../shared/todo.service";

@Component({
    moduleId: module.id,
    selector: 'todo-list',
    templateUrl: 'todo-list.component.html',
    styleUrls: ['todo-list.component.css']
})

export class TodoListComponent implements OnInit {
    todos: Todo[];

    constructor(private todoService: TodoService) { //конструктор создан для инициализации свойств
        this.todos = [];
    }

    ngOnInit() { //момент инициализации компонента
        this.todoService.getTodos().then(todos => this.todos = todos);
    }

    delete(todo: Todo) {
        this.todoService.deleteTodo(todo); //от todo-item мы получим задачу, а дальше отправим в сервис
    }

    toggle(todo:Todo) {
        this.todoService.toggleTodo(todo); //от todo-list мы получим задачу, а дальше отправим в сервис
    }
}