import { Component } from "@angular/core";

import { Todo } from "./shared/todo";
import { todos } from "./shared/data";

@Component({
    moduleId: module.id, //делаем, что бы была возможность писать app.component.html вместо ./app/app.component.html
    selector: 'app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
})
export class AppComponent {
    title: string = 'Angular To - Do';
    todos: Todo[] = todos;

    create(title: string) {
        const todo = new Todo(title);
        this.todos.push(todo);
    }
}