import { useQuery } from "@tanstack/react-query";
import { getJobOpenings } from "./api";

export function useGetJobOpenings() {
  return useQuery({
    queryFn: getJobOpenings,
    queryKey: ["getJobOpenings"],
  });
}
