export interface Todo {
  id: number | string;
  title: string;
  complete: boolean;
}

export function createTodo(params: Partial<Todo>) {
  return {
    title: params.title,
    complete: false
  } as Todo;
}
