import { useQuery } from "@tanstack/react-query";
import { getCandidates, getJobs } from "./api";

export function useGetJobs() {
  return useQuery({
    queryFn: getJobs,
    queryKey: ["getJobs"],
  });
}

export function useGetCandidates() {
  return useQuery({
    queryFn: getCandidates,
    queryKey: ["getCandidates"],
  });
}
