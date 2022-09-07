import { useGetTodosQuery } from "../features/api/apiSlice";
import Todo from "./Todo";

export default function TodoList() {
  const { data: todos } = useGetTodosQuery();

  // const filterByStatus = (todo) => {
  //   const { status } = filters;
  //   switch (status) {
  //     case "Complete":
  //       return todo.completed;

  //     case "Incomplete":
  //       return !todo.completed;

  //     default:
  //       return true;
  //   }
  // };

  // const filterByColors = (todo) => {
  //   const { colors } = filters;
  //   if (colors.length > 0) {
  //     return colors.includes(todo?.color);
  //   }
  //   return true;
  // };

  return (
    <>
      <div className="mt-2 text-gray-700 text-sm max-h-[400px] overflow-y-auto">
        <div className=" py-2 my-2  text-gray-800">
          <h2 className="text-md font-bold mb-1">Incomplete Tasks:</h2>
          <hr />
        </div>
        {todos?.map(
          (todo) => !todo.completed && <Todo todo={todo} key={todo.id} />
        )}
        <div className=" py-2 my-2  text-gray-800">
          <h2 className="text-md font-bold mb-1">Complete Tasks:</h2>
          <hr />
        </div>
        {/* {todos
          ?.filter(filterByStatus)
          .filter(filterByColors)
          .map((todo) => todo.completed && <Todo todo={todo} key={todo.id} />)} */}
        {todos?.map(
          (todo) => todo.completed && <Todo todo={todo} key={todo.id} />
        )}
      </div>
    </>
  );
}
