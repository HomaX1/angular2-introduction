import { Injectable } from "@angular/core";
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Todo } from "./todo";


@Injectable()
export class TodoService {
    private apiUrl = 'api/todos';
    todos: Todo[] = []; //свойство класса

    constructor(private http: Http) {}

    getTodos(): Promise<Todo[]> { //метод который возвращает задачи, : Todo[] - возвращаемый тип данных
        return this.http.get(this.apiUrl)
                        .toPromise()
                        .then(response => response.json().data)
                        .then(todos => this.todos = todos)
                        .catch(this.handleError);
    }

    createTodo(title: string) {
        let headers = new Headers({ 'Content-Type': 'application/json'} );
        let options = new RequestOptions({ headers });
        let todo = new Todo(title);

        this.http.post(this.apiUrl, todo, options)
                .toPromise()
                .then(response => response.json().data)
                .then(todo => this.todos.push(todo))
                .catch(this.handleError);
    }

    deleteTodo(todo: Todo) {
        let headers = new Headers({ 'Content-Type': 'application/json'} );
        let options = new RequestOptions({ headers });
        let url = `${this.apiUrl}/${todo.id}`;

        this.http.delete(url, options)
            .toPromise()
            .then(response => {
                let index = this.todos.indexOf(todo);

                if(index > -1) {
                    this.todos.splice(index,1);
                }
            })
            .catch(this.handleError);
    }

    toggleTodo(todo: Todo) {
        let headers = new Headers({ 'Content-Type': 'application/json'} );
        let options = new RequestOptions({ headers });
        let url = `${this.apiUrl}/${todo.id}`;

        this.http.put(url, todo, options)
            .toPromise()
            .then(response => {
                todo.completed = !todo.completed;
            })
            .catch(this.handleError);
    }

    private handleError(error: any) {
        console.error('Произошла ошибка!', error);
        return Promise.reject(error.message || error);
    }
}