'use client';
import { useRef } from "react";

export default function AddTodoForm ({addTodo}){

    const inputRef=useRef();

    async function handleSubmit(event){
        event.preventDefault()
        try{
            await addTodo(inputRef.current.value)
        }catch(err){
            alert(err.message)
        }
        
        inputRef.current.value=""
    }

    return <form className="w-full max-w-sm mx-auto px-4 py-2" onSubmit={handleSubmit}>
    <div className="flex items-center border-b-2 border-teal-500 py-2">
        <input
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            name="content" type="text" placeholder="Add a task" ref={inputRef} required/>
        <button
            className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
            type="submit">
            Add
        </button>
    </div>
</form>
}