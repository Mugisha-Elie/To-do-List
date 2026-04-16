import { faTrash, faCheck } from "@fortawesome/free-solid-svg-icons";
import type { TodoObj } from "../types/todoObj";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Todo{
    todo: TodoObj;
    onComplete: (id:number) => void
    onDelete: (id: number) => void
}

export default function Todo({todo, onComplete, onDelete}: Todo){
    return(
        <div
        className="w-200 border border-black/5 shadow rounded-2xl space-y-3"
        >
            <div className="flex items-center justify-between w-full p-3 px-5">
                <div className="flex items-center gap-4 w-[90%]">
                    <button 
                    onClick={() => onComplete(todo.id)}
                    className={`flex items-center justify-center cursor-pointer border border-black/20 rounded p-1 h-5 w-5 text-xs text-white ${todo.isComplete 
                        ? "bg-green-400"
                        : "bg-white"
                    }`}>

                        {todo.isComplete && <FontAwesomeIcon icon={faCheck}/>}
                    </button>

                    <p className={`text-lg text-black/60 w-[90%]  truncate overflow-clip
                        ${todo.isComplete 
                        && "decoration line-through text-gray-400 italic"}`}
                    >{todo.todo}</p>
                </div>

                <button 
                onClick={() => onDelete(todo.id)}
                className="text-red-500 text-xl bg-black/6 p-3 h-12 w-12 rounded-full flex justify-center items-center"
                >
                    <FontAwesomeIcon icon={faTrash}/>
                </button>
            </div>
        </div>
    )
}