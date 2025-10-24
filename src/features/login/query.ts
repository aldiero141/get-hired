import type { User } from "./type";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { useUserActions } from "@/store/user";
import { login } from "./api";

export function useLogin() {
  const navigate = useNavigate();
  const { setUser } = useUserActions();

  return useMutation({
    mutationFn: login,
    mutationKey: ["login"],
    onSuccess: (data) => {
      setUser(data as User);
      navigate("/dashboard");
    },
  });
}
