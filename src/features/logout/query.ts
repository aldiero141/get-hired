import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { useUserActions } from "@/store/user";
import { logout } from "./api";

export function useLogout() {
  const navigate = useNavigate();
  const { setUser } = useUserActions();

  return useMutation({
    mutationFn: logout,
    mutationKey: ["logout"],
    onSuccess: () => {
      setUser({ username: "", role: "" });
      navigate("/auth/login");
    },
  });
}
