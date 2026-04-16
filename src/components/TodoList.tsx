import Todo from "./Todo"
import type { TodoObj } from "../types/todoObj"

interface TodoListProps{
    todos: TodoObj[];
    onComplete: (id: number) => void;
    onDelete: (id: number) => void;
}


export default function Todolist({todos, onComplete, onDelete}: TodoListProps){
    return(
        <div className="flex justify-center p-2">
            <div className="space-y-5 mt-5">
                {todos.length > 0 && <h2>Todos:</h2>}
                <div className="flex flex-col items-center justify-center gap-3">
                    {todos.map((todo:TodoObj) => (
                        <Todo 
                        key={todo.id} 
                        todo={todo} 
                        onComplete={() => onComplete(todo.id)} 
                        onDelete={() => onDelete(todo.id)} />
                    ))}
                </div>
            </div>
        </div>
    )
}