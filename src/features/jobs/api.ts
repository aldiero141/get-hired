import type { Jobs } from "./type";

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
