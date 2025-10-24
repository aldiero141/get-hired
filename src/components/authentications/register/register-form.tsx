import { useState } from "react";
import { NavLink } from "react-router";
import { FieldDescription } from "@/components/ui/field";
import { cn } from "@/lib/utils";
import RegisterWithLink from "./register-with-link";
import RegisterWithPassword from "./register-with-password";

export function RegisterForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [registerType, setRegisterType] = useState("with-password");

  return (
    <div className={cn("flex flex-col gap-6 min-w-lg", className)} {...props}>
      <div className="flex flex-col items-start gap-2 text-center">
        <h1 className="text-xl font-bold">Bergabung dengan Rekamin</h1>
        <FieldDescription>
          Sudah punya akun?
          {" "}
          <NavLink to="/auth/login" className="!no-underline">
            <span className="text-primary">
              Masuk
            </span>
          </NavLink>
        </FieldDescription>
      </div>

      {
        registerType === "with-password"
          ? (
              <RegisterWithPassword handleChangeType={() => setRegisterType("with-link")} />
            )
          : (
              <RegisterWithLink handleChangeType={() => setRegisterType("with-password")} />
            )
      }
    </div>
  );
}
