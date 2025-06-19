import { useState } from "react";
import { type Todo } from "../../../data/mocked-data";
import './AddToDo.css'

interface CreateTodoProps {
    handleCreate: (todo: Todo) => void
}

export const CreateTodo = (props: CreateTodoProps) => {
    const { handleCreate } = props
    const [newTodo, setNewTodo] = useState('');

    const handleDescripton = (value: string) => {
        setNewTodo(value)
    }

    const handleAdd = () => {
        if (newTodo.trim() !== '') {
            const addNewTodo: Todo = {
                id: Date.now(),
                description: newTodo,
                isDone: false
            }
            handleCreate(addNewTodo)
            setNewTodo('')
            console.log(addNewTodo)
        }
    };

    return (
        <div className="create">
            <input
                type="text"
                value={newTodo}
                onChange={(e) => { const value = e.target.value; handleDescripton(value) }}
                placeholder="New todo..."
            />
            &nbsp;
            <button className="createBtn" onClick={handleAdd}>Create</button>
        </div>
    );
};