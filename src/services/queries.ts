import { useQuery } from "@tanstack/react-query";
import { getTodos } from "./api";

export function useTodosIds() {
  return useQuery({
    queryKey: ["todos"],
    queryFn: getTodos,
  });
}
