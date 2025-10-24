import type { User } from "./type";

export function getMe(): Promise<User> {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (!localStorage.getItem("user")) {
        throw new Error("User not found");
      }
      const user = JSON.parse(localStorage.getItem("user") || "{}") as User;
      resolve(user);
    }, 500);
  });
}
