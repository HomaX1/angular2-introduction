import { Component, Input } from "@angular/core";

import { Todo } from "../shared/todo";

@Component({
    moduleId: module.id,
    selector: 'todo-list',
    templateUrl: 'todo-list.component.html',
    styleUrls: ['todo-list.component.css']
})

export class TodoListComponent {
    @Input() todos: Todo[];

    toggle(todo: Todo) { // todo у нас объект и в нем мы свойству title задаем тип string, completed - boolean
        todo.completed = !todo.completed;
    }

    delete(todo: Todo) {
        let index = this.todos.indexOf(todo);

        if(index > -1) {
            this.todos.splice(index,1);
        }
    }
}