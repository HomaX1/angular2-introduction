import { Component, OnInit } from "@angular/core";

import {Todo} from "../shared/todo";
import {TodoService} from "../shared/todo.service";


@Component({
    moduleId: module.id,
    selector: 'todos',
    templateUrl: 'todos.component.html',
    styleUrls: ['todos.component.css']
})

export class TodosComponent implements OnInit {
    todos: Todo[];

    constructor(private todoService: TodoService) { //конструктор создан для инициализации свойств
        this.todos = [];
    }

    ngOnInit() { //момент инициализации компонента
        this.todoService.getTodos().subscribe(todos => this.todos = todos);
    }

    create(title: string) {
        this.todoService.createTodo(title).subscribe(todo => this.todos.push(todo));
    }

    delete(todo: Todo) {
        this.todoService.deleteTodo(todo).subscribe(response => {
                let index = this.todos.indexOf(todo);

                if (index > -1) {
                    this.todos.splice(index, 1);
                }
            }
        ); //от todo-item мы получим задачу, а дальше отправим в сервис
    }

    toggle(todo: Todo) {
        this.todoService.toggleTodo(todo).subscribe(response => {
                todo.completed = !todo.completed;
            }
        ); //от todo-list мы получим задачу, а дальше отправим в сервис
    }
}