import { useState } from "react";
import { NavLink } from "react-router";
import { FieldDescription } from "@/components/ui/field";
import { cn } from "@/lib/utils";
import LoginWithLink from "./login-with-link";
import LoginWithPassword from "./login-with-password";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [loginType, setLoginType] = useState("with-password");

  return (
    <div className={cn("flex flex-col gap-6 min-w-lg", className)} {...props}>
      <div className="flex flex-col items-start gap-2 text-center">
        <h1 className="text-xl font-bold">Masuk ke Rekamin</h1>
        <FieldDescription>
          Belum punya akun?
          {" "}
          <NavLink to="/auth/register" className="!no-underline">
            <span className="text-primary">
              Daftar menggunakan email
            </span>
          </NavLink>
        </FieldDescription>
      </div>

      {
        loginType === "with-password"
          ? (
              <LoginWithPassword handleChangeType={() => setLoginType("with-link")} />
            )
          : (
              <LoginWithLink handleChangeType={() => setLoginType("with-password")} />
            )
      }
    </div>
  );
}
