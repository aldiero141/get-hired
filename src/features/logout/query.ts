import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { useUserActions } from "@/store/user";
import { logout } from "./api";

export function useLogout() {
  const navigate = useNavigate();
  const { setUser } = useUserActions();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: logout,
    mutationKey: ["logout"],
    onSuccess: () => {
      setUser({ username: "", role: "" });
      queryClient.invalidateQueries({ queryKey: ["user"] });
      navigate("/auth/login");
    },
  });
}
