import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft } from "lucide-react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { z } from "zod";
import { DatePicker } from "@/components/date-picker";
import InputProfile from "@/components/input-profile";
import PhoneNumberInput from "@/components/phone-number-input";
import { toast } from "@/components/Toaster";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../../ui/form";

const formSchema = z.object({
  photo_profile: z.file(),
  full_name: z.string().min(1, "Nama Lengkap is required"),
  date_of_birth: z.date().min(1, "Tanggal Lahir is required"),
  gender: z.string().min(1, "Jenis Kelamin is required"),
  domicile: z.string().min(1, "Domisili is required"),
  phone: z.string().min(4, "Telepon is required").regex(/^\+?\d+$/, "Phone number must be number"),
  email: z.email().min(1, "Email is required"),
  linkedin_link: z.string().min(1, "Link LinkedIn is required"),
});

export default function CreateApplicationForm() {
  const navigate = useNavigate();
  const domicileOptions = [
    { value: "id", label: "Indonesia" },
    { value: "sgp", label: "Singapore" },
    { value: "my", label: "Malaysia" },
  ];

  const genderOptions = [
    { value: "male", label: "He/Him (Male)" },
    { value: "female", label: "She/Her (Female)" },
  ];

  const form = useForm <z.infer <typeof formSchema>> ({
    resolver: zodResolver(formSchema),
    defaultValues: {
      photo_profile: undefined,
      full_name: "",
      date_of_birth: undefined,
      gender: genderOptions[0].value,
      domicile: "",
      phone: "",
      email: "",
      linkedin_link: "",
    },
  });

  const handleLogin = async (value: z.infer<typeof formSchema>) => {
    console.warn(value);
    toast({ title: "Success", description: "Application submitted successfully", type: "success" });
    navigate(-1);
  };

  return (
    <div>
      <div className="flex flex-col gap-4 w-full mx-auto border max-w-5xl h-[calc(90vh-6rem)] overflow-y-auto p-12">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-4">
            <Button type="button" onClick={() => navigate(-1)} variant="outline" size="sm" className="size-8"><ArrowLeft className="size-6" /></Button>
            <h1 className="text-2xl font-bold">Apply Front End at Rekamin</h1>
          </div>

          <p className="text-sm text-muted-foreground">
            ℹ️
            this field is required to fill
          </p>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleLogin)} id="application-form" className="grid gap-4 w-full mx-auto">
            <FormField
              control={form.control}
              name="photo_profile"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Photo Profile
                    <span className="text-xs text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <InputProfile
                      onChange={field.onChange}
                    />
                  </FormControl>
                  <FormMessage withIcon />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="full_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Full Name
                    <span className="text-xs text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Enter your full name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage withIcon />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="date_of_birth"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Date of Birth
                    <span className="text-xs text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <DatePicker onChange={field.onChange} placeholder="Select date of birth" isError={form.formState.errors.date_of_birth !== undefined} />
                  </FormControl>
                  <FormMessage withIcon />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="gender"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Pronoun (Gender)
                    <span className="text-xs text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <RadioGroup
                      defaultValue={genderOptions[0].value}
                      value={field.value}
                      onValueChange={field.onChange}
                      className="[--primary:var(--color-indigo-500)] [--ring:var(--color-indigo-300)] in-[.dark]:[--primary:var(--color-indigo-500)] in-[.dark]:[--ring:var(--color-indigo-900)]"
                    >
                      <div className="flex gap-2">
                        {genderOptions.map(option => (
                          <div className="flex items-center gap-2 text-muted-foreground text-sm">
                            <RadioGroupItem value={option.value} id={option.value} />
                            <Label htmlFor={option.value}>{option.label}</Label>
                          </div>
                        ))}
                      </div>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage withIcon />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="domicile"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Domicile
                    <span className="text-xs text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Select
                      value={field.value}
                      onValueChange={field.onChange}

                    >
                      <SelectTrigger className={cn("w-full", form.formState.errors.domicile !== undefined && "border-red-500")}>
                        <SelectValue placeholder="Select domicile" />
                      </SelectTrigger>
                      <SelectContent>
                        {domicileOptions.map(option => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage withIcon />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Phone number
                    <span className="text-xs text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <PhoneNumberInput
                      isError={form.formState.errors.phone !== undefined}
                      options={[
                        { value: "+62", label: "id" },
                        { value: "+65", label: "sg" },
                        { value: "+60", label: "my" },
                      ]}
                      onChange={field.onChange}
                    />
                  </FormControl>
                  <FormMessage withIcon />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Email
                    <span className="text-xs text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Enter your email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage withIcon />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="linkedin_link"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Link LinkedIn
                    <span className="text-xs text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="https://linkedin.com/in/username"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage withIcon />
                </FormItem>
              )}
            />

          </form>
        </Form>
      </div>

      <div className="flex flex-col gap-4 w-full mx-auto bg-slate-100 max-w-5xl items-center justify-center p-6">
        <Button size="lg" form="application-form" type="submit" variant="default" className="w-full">
          Submit
        </Button>
      </div>
    </div>
  );
}
