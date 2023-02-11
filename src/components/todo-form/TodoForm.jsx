import { useState } from "react";


const TodoForm = ({addTodo, deleteTodo}) => {

   const [name, setName] = useState("");


   return (
      <form action="submit" className="flex m-2">
         <input value={name} onChange={e => setName(e.target.value)} type="text" placeholder="Add some todo" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
         <button 
            onClick=
            {e => {
               e.preventDefault();
               addTodo(name);
               setName("");
               }
            }
            type="submit"
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
         >Add</button>
      </form>
   )
};


export default TodoForm;