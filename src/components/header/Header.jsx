

const Header = ({todos}) => {

   const countDoneTodos = todos.filter(el => el.done === true).length;

   return (
      <>
         <h1 className="text-2xl">Todo List</h1>
         <h1 className="title text-2xl">
            {countDoneTodos + " / " + todos.length}
         </h1>
      </>
      );
};


export default Header;