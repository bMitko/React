import type { Todo } from "../../../data/mocked-data";
import { TodoItem } from "../ToDoItem/ToDoItem";

interface TodoListProps {
  todos: Todo[];
  handleFinish: (id: number) => void;
  handleUndo: (id: number) => void;
}

export const TodoList = (props: TodoListProps) => {
  const { todos, handleFinish, handleUndo } = props

  return (
    <ul style={{ paddingLeft: "0" }}>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} handleFinish={handleFinish} handleUndo={handleUndo} />
      ))}
    </ul>
  );
};