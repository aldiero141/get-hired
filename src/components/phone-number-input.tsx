import { useEffect, useId, useState } from "react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";

type Props = {
  options: { value: string; label: string }[];
  onChange: (value: string) => void;
  isError: boolean;
};

export default function PhoneNumberInput({ options, onChange, isError }: Props) {
  const [valueInput, setValueInput] = useState("");
  const [selectValue, setSelectValue] = useState(options[0].value);

  useEffect(() => {
    onChange(`${selectValue}${valueInput}`);
  }, [valueInput, selectValue]);

  const id = useId();
  return (
    <div className="*:not-first:mt-2 w-full">
      <div className="flex rounded-md shadow-xs w-full">
        <Select
          value={selectValue}
          onValueChange={selectValue => setSelectValue(selectValue)}
        >
          <SelectTrigger className={cn("rounded-r-none", isError && "border-red-500")}>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {options.map(option => (
              <SelectItem key={option.value} value={option.value} className="w-fit">
                <img src={`https://flagcdn.com/${option.label}.svg`} alt={option.label} className="size-4 rounded-full object-cover" />
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <div className="relative w-full">
          <Input
            id={id}
            className={cn("peer ps-10 pe-9 -ms-px rounded-s-none shadow-none focus-visible:z-10", isError && "border-red-500")}
            placeholder="82XXXXXXXXX"
            type="text"
            value={valueInput}
            onChange={e => setValueInput(e.target.value)}
          />
          <div className="pointer-events-none absolute inset-y-[calc(50%-11px)] start-0 flex items-center justify-center ps-2 text-muted-foreground/80 peer-disabled:opacity-50 h-6 text-sm">
            {selectValue}
          </div>
        </div>
      </div>
    </div>
  );
}
