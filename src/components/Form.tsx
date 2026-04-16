import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAdd } from "@fortawesome/free-solid-svg-icons" 

interface FormProps{
    onSubmit: (e: React.SubmitEvent<HTMLFormElement>) => void
}

export default function Form({onSubmit}: FormProps){
    return (
        <form action=""
        className="flex justify-center min-w-screen"
        onSubmit={(e) => onSubmit(e)}
        >
            <div className="shadow-rl rounded-4xl flex w-[60%] justify-between items-center px-5 py-1">
                <input type="text" 
                name="todo" 
                id="todo" 
                placeholder="Read react suspense docs..."
                className="w-[50%] px-4 py-2 text-lg text-black/60 rounded-3xl focus:outline-0 flex-1"
                />

                <button className="text-white bg-green-400 rounded-full flex justify-center items-center font-semibold p-1 h-8 w-8 cursor-pointer">
                    <FontAwesomeIcon icon={faAdd}/>
                </button>
            </div>
            
        </form>
    )
}