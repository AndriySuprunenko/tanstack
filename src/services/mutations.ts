import { useMutation } from "@tanstack/react-query";
import { Todo } from "../types/todo";
import { createTodo } from "./api";

export function useCreateTodo() {
  return useMutation({
    mutationFn: (newTodo: Todo) => createTodo(newTodo),
  });
}
