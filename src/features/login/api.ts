// import api from "@/lib/axios";
import type { User } from "./type";

type LoginCredentials = {
  username: string;
  password: string;
  expiresInMins?: number;
};

export function login(credentials: LoginCredentials): Promise<User> {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (credentials.username === "user@email.com" && credentials.password === "User@1234") {
        const user = {
          username: credentials.username,
          role: "user",
        };
        localStorage.setItem("user", JSON.stringify(user));
        resolve(user);
        return;
      }

      if (credentials.username === "admin@email.com" && credentials.password === "Admin@1234") {
        const user = {
          username: credentials.username,
          role: "admin",
        };
        localStorage.setItem("user", JSON.stringify(user));
        resolve(user);
        return;
      }

      throw new Error("Invalid credentials");
    }, 500);
  });
}
