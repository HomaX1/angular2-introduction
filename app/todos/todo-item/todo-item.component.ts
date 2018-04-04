import { Component, Input, Output, EventEmitter } from "@angular/core";

import { Todo } from "../../shared/todo";

@Component({
    moduleId: module.id,
    selector: 'todo-item',
    templateUrl: 'todo-item.component.html',
    styleUrls: ['todo-item.component.css']
})

export class TodoItemComponent {
    @Input() todo: Todo;
    @Output() delete = new EventEmitter();
    @Output() toggle = new EventEmitter();

    onToggle() {
        this.toggle.emit(this.todo);
    }

    onDelete() {
        this.delete.emit(this.todo); // emit() вызывает событие, при этом вызовится метод указанный в шаблоне, т.е. метод delete() у родительского компонента (видно в todo-list.component.html)
    }
}