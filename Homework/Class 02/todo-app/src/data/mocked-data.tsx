export interface Todo {
    id: number,
    description: string,
    isDone: boolean
}

export const toDoList: Todo[] = [
    { id: 1, description: 'Code with React', isDone: true },
    { id: 2, description: 'Workout', isDone: false },
    { id: 3, description: 'Buy birthday gifts', isDone: false },
    { id: 4, description: 'Get haircut', isDone: true },
    { id: 5, description: 'Plan trip', isDone: false }
];