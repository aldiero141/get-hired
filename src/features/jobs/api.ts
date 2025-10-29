import type { CandidateResponse, Jobs } from "./type";
import { responseGetCandidate } from "@/lib/response-data/responseGetCandidate";

export function getJobs(): Promise<Jobs[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (!localStorage.getItem("user")) {
        throw new Error("User not found");
      }
      const user = JSON.parse(localStorage.getItem("user") || "{}") as Jobs[];
      resolve(user);
    }, 500);
  });
}

export function getCandidates(): Promise<CandidateResponse> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(responseGetCandidate);
    }, 500);
  });
}
