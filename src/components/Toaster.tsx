import { CircleAlert, CircleCheck, CircleX, InfoIcon } from "lucide-react";
import { toast as sonnerToast } from "sonner";
import { cn } from "@/lib/utils";

type ToastProps = {
  id: string | number;
  title: string;
  description: string;
  type: "default" | "success" | "error" | "warning" | "info";
};

export function toast(toast: Omit<ToastProps, "id">) {
  return sonnerToast.custom(id => (
    <Toast
      id={id}
      title={toast.title}
      description={toast.description}
      type={toast.type}
    />
  ));
}

function Toast(props: ToastProps) {
  const { title, description, type } = props;

  return (
    <div className={cn("flex rounded-lg bg-white shadow-lg ring-1 ring-black/5 w-full md:max-w-[364px] items-center p-4 border-l-4", type === "default" && "border-white", type === "success" && "border-primary", type === "error" && "border-red-500", type === "warning" && "border-yellow-500", type === "info" && "border-blue-500")}>
      <div className="flex flex-1 items-center gap-3">
        {
          type === "success" && (
            <CircleCheck className="text-primary size-8 opacity-60" />
          )
        }
        {
          type === "error" && (
            <CircleX className="text-red-500 size-8 opacity-60" />
          )
        }
        {
          type === "warning" && (
            <CircleAlert className="text-yellow-500 size-8 opacity-60" />
          )
        }
        {
          type === "info" && (
            <InfoIcon className="text-blue-500 size-8 opacity-60" />
          )
        }
        <div className="w-full">
          <p className="text-sm font-medium text-gray-900">{title}</p>
          <p className="mt-1 text-sm text-gray-500">{description}</p>
        </div>
      </div>
    </div>
  );
}
