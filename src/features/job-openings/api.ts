import type { JobsOpenings } from "./type";
import { jobList } from "../../lib/response-data/reponseGetJobOpenings";

export function getJobOpenings(): Promise<JobsOpenings[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(jobList as JobsOpenings[]);
      // resolve([]);
    }, 500);
  });
}
