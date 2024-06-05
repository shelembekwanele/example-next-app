import Todo from "@/components/Todo";
import prisma from "./db";
import { redirect } from "next/navigation";
import AddTodoForm from "@/components/AddTodoForm";
import BadWordsFilter from "bad-words";
import Image from "next/image";

const filter =new BadWordsFilter();

async function addTodo(content){
    'use server'
    if(filter.isProfane(content)){
      throw new Error("Inapropriate language.")
    }
    await prisma.todo.create({data:{content}})
    redirect("/")
}

async function deleteTodo(id){
  'use server'
  await prisma.todo.delete({where:{id}})
  redirect("/")
}

async function toggleTodo(id,complete){
  'use server'
  await prisma.todo.update({where:{id},data:{complete}})
  redirect("/")
}

export default async function Home() {

  const todos=await prisma.todo.findMany();

  return (
    <main className="">
      <div className="p-3 absolute flex items-center gap-2 shadow-lg rounded-lg">
        <Image src={"https://portfolio-pjqy.vercel.app/logo.png"} width={50} height={50} alt=""/>
        <small>
        <a className="underline" href="https://portfolio-pjqy.vercel.app/" target="_blank">Kwanele</a>
        </small>
      </div>
      <div>
        
      </div>
      <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-16">
        <div className="px-4 py-2">
            <h1 className="text-gray-800 font-bold text-2xl uppercase">Public To-Do List</h1>
        </div>
        <AddTodoForm addTodo={addTodo}/>
        <ul className="divide-y divide-gray-200 px-4">
            {todos.map(t=>{
              return <Todo key={t.id} t={t} deleteTodo={deleteTodo} toggleTodo={toggleTodo}/>
            })}
        </ul>
    </div>
    </main>
  );
}
