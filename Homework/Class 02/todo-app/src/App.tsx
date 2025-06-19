import { useState } from 'react'
import './App.css'
import { Header } from './components/Header/Header'
import { TodoList } from './components/ToDoSection/ToDoList/ToDoList'
import { toDoList, type Todo } from './data/mocked-data';
import { CreateTodo } from './components/ToDoSection/AddToDo/AddToDo';
import { Footer } from './components/Footer/Footer';

function App() {

  const [todos, setTodos] = useState<Todo[]>(toDoList);

  const handleFinish = (id: number) => {
    const setDone = todos.map((todo) => todo.id === id ? { ...todo, isDone: true } : todo);
    setTodos(setDone);
    console.log(setDone)
  };

  const handleUndo = (id: number) => {
    const setUndo = todos.map((todo) => todo.id === id ? { ...todo, isDone: false } : todo);
    setTodos(setUndo);
    console.log(setUndo)
  }

  const handleAddTodo = (todo: Todo) => {
    setTodos([...todos, todo]);
  };

  return (
    <div className='todos'>
      <Header />
      <CreateTodo handleCreate={handleAddTodo} />
      <TodoList todos={todos} handleFinish={handleFinish} handleUndo={handleUndo} />
      <Footer />
    </div>
  )
}

export default App
