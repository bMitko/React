import type { Todo } from "../../../data/mocked-data";
import './ToDoItem.css'

interface TodoItemProps {
  todo: Todo;
  handleFinish: (id: number) => void;
  handleUndo: (id: number) => void;
}

export const TodoItem = (props: TodoItemProps) => {
  const { todo, handleFinish, handleUndo } = props

  return (
    <li className={todo.isDone ? 'done' : 'notDone'}>
      <span className={todo.isDone ? 'doneDesc' : 'notDoneDesc'}>{todo.description}</span>

      {!todo.isDone && (
        <button className="notDoneBtn" onClick={() => handleFinish(todo.id)}>✔</button>
      )}
      {todo.isDone && (
        <button className="doneBtn" onClick={() => handleUndo(todo.id)}>↶</button>
      )}
    </li>
  )
}