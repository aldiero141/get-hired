import { useQuery } from "@tanstack/react-query";
import { getMe } from "./api";

export function useGetMe() {
  return useQuery({
    queryFn: getMe,
    queryKey: ["getMe"],
  });
}
