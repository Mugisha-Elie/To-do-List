import Form from "./components/Form"
import Todolist from "./components/TodoList"
import {useState} from 'react';
import type{ TodoObj } from "./types/todoObj";


export default function App(){
  const [todos, setTodo] = useState<TodoObj[]>([])

  function handleTodo(e:React.SubmitEvent<HTMLFormElement>){
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const todo = formData.get("todo") as string;
    if(todo.trim() === ""){
      return
    }else if(todos.some(todoObj => todoObj.todo.trim() === todo.trim())){
      alert("Todo already exist!")
      form.reset()
      return;
    }
    setTodo([{todo, id: Date.now(), isComplete: false}, ...todos]);
    form.reset()

  }

  function handleComplete(id:number){
    setTodo((todos) => {
      return todos.map(todo => {
        if(todo.id === id){
          return {
            ...todo,
            isComplete: !todo.isComplete
          }
        }else{
          return todo;
        }
      } )
    });
  }

  function handleDelete(id: number){
    setTodo((todos) => todos.filter(todo => todo.id !== id))
  }

  return(
    <div className="min-h-screen">
      <header className="text-8xl font-semibold text-black/10 text-center py-5">todos</header>
      <div>
        <Form onSubmit={handleTodo}/>
        <div>
          <Todolist todos={todos} onComplete={handleComplete}   onDelete={handleDelete}/>
        </div>
      </div>
    </div>
  )
}
