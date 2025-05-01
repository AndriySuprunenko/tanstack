import { SubmitHandler, useForm } from "react-hook-form";
import { useCreateTodo } from "../services/mutations";
import { useTodos, useTodosIds } from "../services/queries";
import { Todo as TodoInterface } from "../types/todo";

export default function Todo() {
  const { data } = useTodosIds();
  const todosQueries = useTodos(data);

  const { register, handleSubmit } = useForm<TodoInterface>();

  const createTodoMutation = useCreateTodo();
  const handleCreateTodo: SubmitHandler<TodoInterface> = (data) => {
    createTodoMutation.mutate(data);
  };

  return (
    <>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit(handleCreateTodo)}>
        <input {...register("title")} placeholder="Title" />
        <input {...register("description")} placeholder="Description" />
        <input
          type="submit"
          disabled={createTodoMutation.isPending}
          value={createTodoMutation.isPending ? "Creating..." : "Create todo"}
        />
      </form>
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
