import { useQuery, useQueries } from "@tanstack/react-query";
import { getTodos, getTodo } from "./api";

export function useTodosIds() {
  return useQuery({
    queryKey: ["todos"],
    queryFn: getTodos,
  });
}

export function useTodos(id: (number | undefined)[] | undefined) {
  return useQueries({
    queries:
      id?.map((todoId) => ({
        queryKey: ["todo", todoId],
        queryFn: () => getTodo(todoId!),
      })) ?? [],
  });
}
