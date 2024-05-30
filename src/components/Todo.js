'use client';

export default function Todo({t,deleteTodo,toggleTodo}){
    return <li className="py-4">
        <div className="flex justify-between items-center">
            <input id={t.id} name="todo1" type="checkbox"
                className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
                onChange={()=>toggleTodo(t.id,!t.complete)}
                checked={t.complete}/>
            <label htmlFor={t.id} className="ml-3 block text-gray-900">
                <span className={`text-lg font-medium ${t.complete && "line-through text-gray-400"}`}>{t.content}</span>
            </label>
            <button onClick={()=>deleteTodo(t.id)}>🗑️</button>
        </div>
    </li>
}