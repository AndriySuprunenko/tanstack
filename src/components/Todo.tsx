import { useTodos, useTodosIds } from "../services/queries";

export default function Todo() {
  const { data, isPending, isError } = useTodosIds();
  const todosQueries = useTodos(data);

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading todos</div>;
  }

  return (
    <>
      <h1>Todo List</h1>
      <ul>{data?.map((todoId) => <li key={todoId}>{todoId}</li>)}</ul>
      <h2>Todo Details</h2>
      <ul>
        {todosQueries.map(({ data }) => (
          <li key={data?.id}>
            <h3>Id: {data?.id}</h3>
            <h3>Title: {data?.title}</h3>
            <p>Description: {data?.description}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
