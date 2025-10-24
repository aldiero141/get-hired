import { LoginForm } from "@/components/authentications/login/login-form";
import { Card, CardContent } from "@/components/ui/card";

export default function LoginPage() {
  return (
    <div className="flex flex-col h-screen items-center justify-center">
      <div className="flex flex-col gap-6">
        <img src="/image/logo-rekamin.svg" className="self-start" alt="logo-rekamin" />
        <Card className="border-0">
          <CardContent>
            <LoginForm />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
