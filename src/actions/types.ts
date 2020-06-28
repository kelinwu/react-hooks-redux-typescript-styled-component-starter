import { FetchTodosAction, DeleteTodoAction } from './todos'

export enum ActionTypes {
    fetchTodos,
    delteTodo
}

export type Action = FetchTodosAction | DeleteTodoAction

