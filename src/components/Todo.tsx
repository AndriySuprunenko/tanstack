import { useTodosIds } from "../services/queries";

export default function Todo() {
  const { data, isPending, isError } = useTodosIds();

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading todos</div>;
  }

  return (
    <>
      <h1>Todo List</h1>
      <ul>
        {data.map((todoId) => (
          <li key={todoId}>{todoId}</li>
        ))}
      </ul>
    </>
  );
}
