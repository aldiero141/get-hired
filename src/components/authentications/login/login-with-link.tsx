import { zodResolver } from "@hookform/resolvers/zod";
import { Mail } from "lucide-react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { FieldSeparator } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../../ui/form";

const formSchema = z.object({
  username: z.string().min(1, "Username is required"),
});

type Props = {
  handleChangeType: () => void;
};

export default function LoginWithLink({
  handleChangeType,
}: Props) {
  const form = useForm <z.infer <typeof formSchema>> ({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  const handleLogin = async (value: z.infer<typeof formSchema>) => {
    console.warn(value);
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleLogin)} className="grid gap-4 w-full mx-auto">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>

                <FormLabel>Alamat email</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    {...field}
                  />
                </FormControl>
                <FormMessage withIcon />
              </FormItem>
            )}
          />

          <div className="flex justify-end">
            <NavLink to="/auth/forgot-password" className="text-sm text-primary">
              Lupa kata sandi?
            </NavLink>
          </div>

          <div className="flex flex-col justify-end w-full gap-2 mt-4">
            <Button size="lg" type="submit" variant="secondary" className="w-full text-black">
              Masuk
            </Button>
            <FieldSeparator className="my-2">or</FieldSeparator>
            <Button variant="outline" size="lg" type="button" className="w-full py-3" onClick={handleChangeType}>
              <Mail className="size-4" />
              Kirim link login melalui email
            </Button>
            <Button variant="outline" size="lg" type="button" className="w-full py-3">
              <img src="/image/google-icon.svg" className="size-6" alt="google" />
              Masuk dengan Google
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
