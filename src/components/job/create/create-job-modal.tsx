import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { defaultField } from "./field-list";

type CreateJobModalProps = {
  openCreateModal: boolean;
  setOpenCreateModal: (open: boolean) => void;
};

const formSchema = z.object({
  title: z.string().min(1, "Title is required"),
  type: z.string().min(1, "Type is required"),
  description: z.string().min(1, "Description is required"),
  number_of_candidate: z.string().min(1, "Number of candidate is required").regex(/^\d+$/, "Number of candidate must be a number"),
  max_salary: z.string().min(1, "Max salary is required").regex(/^\d+$/, "Max salary must be a number").optional(),
  min_salary: z.string().min(1, "Min salary is required").regex(/^[\d.]+$/, "Min salary must be a number").optional(),
});

export default function CreateJobModal({ openCreateModal, setOpenCreateModal }: CreateJobModalProps) {
  const [fieldValues, setFieldValues] = useState<Record<string, string>>(
    defaultField.reduce((acc, field) => {
      acc[field.key] = "mandatory"; // Default value
      return acc;
    }, {} as Record<string, string>),
  );

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      type: "",
      description: "",
      number_of_candidate: "",
      max_salary: "",
      min_salary: "",
    },
  });

  const handleFieldChange = (fieldKey: string, value: string) => {
    setFieldValues(prev => ({
      ...prev,
      [fieldKey]: value,
    }));
  };

  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    // Log all the field values
    console.warn("Form values:", values);
    console.warn("Field values:", fieldValues);

    // Here you can submit the form with both the form values and field values
    // For example:
    // const formData = { ...values, fieldSettings: fieldValues };
    // submitForm(formData);
  };

  return (
    <Dialog open={openCreateModal} onOpenChange={setOpenCreateModal}>
      <DialogContent className="flex flex-col gap-0 p-0 sm:max-h-[min(900px,80vh)] sm:max-w-5xl [&>button:last-child]:top-5">
        <DialogHeader className="contents space-y-0 text-left">
          <DialogTitle className="border-b px-6 py-4 text-base">
            Job Opening
          </DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form id="create-job" onSubmit={form.handleSubmit(handleSubmit)} className="flex flex-col gap-4 p-6 overflow-y-scroll">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Job Name
                    <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Ex. Frontend Engineer"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage withIcon />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Job Type
                    <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select job type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="full-time">Full-time</SelectItem>
                        <SelectItem value="part-time">Part-time</SelectItem>
                        <SelectItem value="contract">Contract</SelectItem>
                        <SelectItem value="internship">Internship</SelectItem>
                        <SelectItem value="freelance">Freelance</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage withIcon />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Job Description
                    <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Ex."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage withIcon />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="number_of_candidate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Number of Candidate Needed
                    <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Ex. 5"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage withIcon />
                </FormItem>
              )}
            />

            <Separator className="h-0 border-t border-dashed bg-transparent my-4" />

            <FormLabel>
              Job Salary
            </FormLabel>
            <div className="grid grid-cols-2 gap-4 w-full">
              <FormField
                control={form.control}
                name="min_salary"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Minimum Estimated Salary
                    </FormLabel>
                    <FormControl>
                      <div className="relative">
                        <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-black font-semibold text-sm peer-disabled:opacity-50">
                          Rp.
                        </div>
                        <Input
                          className="peer ps-9"
                          type="text"
                          placeholder="Ex. 5.000.000"
                          {...field}
                        />
                      </div>
                    </FormControl>
                    <FormMessage withIcon />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="max_salary"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Maximum Estimated Salary
                    </FormLabel>
                    <FormControl>
                      <div className="relative">
                        <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-black font-semibold text-sm peer-disabled:opacity-50">
                          Rp.
                        </div>
                        <Input
                          className="peer ps-9"
                          type="text"
                          placeholder="Ex. 5.000.000"
                          {...field}
                        />
                      </div>
                    </FormControl>
                    <FormMessage withIcon />
                  </FormItem>
                )}
              />
            </div>

            <div className="border rounded p-4 flex flex-col gap-6 pb-6 mt-4">
              <h1 className="text-sm font-semibold">
                Minimum Profile Information Required
              </h1>
              {
                defaultField.map(fieldItem => (
                  <div key={fieldItem.key} className="flex justify-between border-b pb-4 last:pb-0 last:border-b-0">
                    <FormLabel>
                      {fieldItem.label}
                    </FormLabel>
                    <RadioGroup
                      className="flex flex-wrap gap-2"
                      value={fieldValues[fieldItem.key]}
                      onValueChange={value => handleFieldChange(fieldItem.key, value)}
                    >
                      {fieldItem.radioItems.map(item => (
                        <label
                          key={`${fieldItem.key}-${item.value}`}
                          className={cn("relative flex rounded-full border border-gray-200 min-w-16 px-4 justify-center has-data-[state=checked]:border-primary has-data-[state=checked]:text-primary p-2", item.isDisable && "bg-gray-200 text-gray-400")}
                        >
                          <RadioGroupItem
                            id={`${fieldItem.key}-${item.value}`}
                            value={item.value}
                            className="sr-only after:absolute after:inset-0"
                            disabled={item.isDisable}
                          />
                          <p className="text-sm leading-none font-normal">
                            {item.label}
                          </p>
                        </label>
                      ))}
                    </RadioGroup>
                  </div>
                ))
              }

            </div>
          </form>
        </Form>

        <DialogFooter className="flex flex-col justify-end w-full gap-2 mt-4 border-t p-4">
          <Button form="create-job" size="sm" type="submit" variant="default" className="w-fit self-end">
            Publish Job
          </Button>
        </DialogFooter>

      </DialogContent>
    </Dialog>
  );
}
