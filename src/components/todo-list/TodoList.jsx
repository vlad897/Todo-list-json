import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

import TodoListItem from "../todo-list-item/TodoListItem";


const TodoList = ({todos, getTodos, deleteTodo, editTodo, itemsPerPage}) => {

   // We start with an empty list of items.
   const [currentItems, setCurrentItems] = useState(todos);
   const [pageCount, setPageCount] = useState(0);
   // Here we use item offsets; we could also use page offsets
   // following the API or data you're working with.
   const [itemOffset, setItemOffset] = useState(0);


   
   useEffect(() => {
      // Fetch items from another resources.
      const endOffset = itemOffset + itemsPerPage;
      console.log(`Loading items from ${itemOffset} to ${endOffset}`);
      
      console.log(currentItems);
      setPageCount(Math.ceil(todos.length / itemsPerPage));

      console.log(todos)

      setCurrentItems(todos.slice(itemOffset, endOffset))
    }, [itemOffset, itemsPerPage, todos]);
  
    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
      const newOffset = event.selected * itemsPerPage % todos.length;
      console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
      setItemOffset(newOffset);
    };
   

   return (

      <ul>
         {currentItems.length 
            ?
            <>
               {currentItems.map(todo => <TodoListItem key={todo.id} todo={todo} deleteTodo={deleteTodo} editTodo={editTodo} /> )}
               <ReactPaginate
                  className="text-xl flex justify-between mt-2"
                  nextLabel="next >"
                  onPageChange={handlePageClick}
                  pageRangeDisplayed={3}
                  marginPagesDisplayed={2}
                  pageCount={pageCount}
                  previousLabel="< previous"
                  renderOnZeroPageCount={null}
               />
            </>
            :
         <h1 className="text-xl">No Todos</h1>}
      </ul>
   )
};


export default TodoList;