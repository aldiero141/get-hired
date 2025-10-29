import { toast } from "@/components/Toaster";

export function logout(): Promise<boolean> {
  return new Promise((resolve) => {
    setTimeout(() => {
      localStorage.removeItem("user");
      toast({ title: "Success", description: "Logout successfully", type: "success" });
      resolve(true);
    }, 500);
  });
}
