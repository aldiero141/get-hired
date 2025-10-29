import dayjs from "dayjs";
import { CalendarIcon, ChevronDownIcon } from "lucide-react";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

type Props = {
  onChange: (date: Date | undefined) => void;
  placeholder: string;
  isError: boolean;
};

export function DatePicker({ onChange, placeholder, isError }: Props) {
  const [open, setOpen] = React.useState(false);
  const [date, setDate] = React.useState<Date | undefined>(undefined);

  return (
    <div className="flex gap-3">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className={cn("w-full justify-between items-center font-normal", isError && "border-red-500")}
          >
            <div
              className="flex justify-center items-center gap-2"
            >
              <CalendarIcon className={cn("size-3", isError && "text-red-500")} />
              <span className="text-xs text-muted-foreground">{date ? dayjs(date).format("DD MMM YYYY") : placeholder}</span>
            </div>
            <ChevronDownIcon className={cn("size-4", isError && "text-red-500")} />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto overflow-hidden p-0" align="start">
          <Calendar
            mode="single"
            selected={date}
            captionLayout="dropdown"
            onSelect={(date) => {
              setDate(date);
              setOpen(false);
              onChange(date);
            }}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
