import { useTodosIds } from "../services/queries";

export default function Todo() {
  const todosIdsQuery = useTodosIds();

  if (todosIdsQuery.isPending) {
    return <div>Loading...</div>;
  }

  if (todosIdsQuery.isError) {
    return <div>Error: {todosIdsQuery.error.message}</div>;
  }

  return (
    <>
      <h1>Todo List</h1>
      <ul>
        {todosIdsQuery.data.map((todoId) => (
          <li key={todoId}>{todoId}</li>
        ))}
      </ul>
    </>
  );
}
