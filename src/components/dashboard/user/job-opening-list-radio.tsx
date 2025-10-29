import type { JobsOpenings } from "@/features/job-openings/type";
import { IconCash, IconMapPin } from "@tabler/icons-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

type Props = {
  data: JobsOpenings[];
  setActiveJobOpeningID: (jobOpeningID: string) => void;
};

function JobOpeningListRadio({ data, setActiveJobOpeningID }: Props) {
  return (
    <RadioGroup className="flex flex-col gap-2 w-full" defaultValue={data[0].id} onValueChange={setActiveJobOpeningID}>
      {data.map(jobOpening => (
        <label
          key={`${jobOpening.id}`}
          className={cn(`relative flex cursor-pointer flex-col w-full gap-3 rounded-md border border-input px-2 py-3 text-center`, "shadow-xs transition-[color,box-shadow] outline-none has-focus-visible:border-ring has-focus-visible:ring-[3px] has-focus-visible:ring-ring/50", "has-data-disabled:cursor-not-allowed has-data-disabled:opacity-50 has-data-[state=checked]:border-primary/50 has-data-[state=checked]:bg-primary/10")}
        >
          <RadioGroupItem
            id={`${jobOpening.id}-${jobOpening.title}`}
            value={jobOpening.id}
            className="sr-only after:absolute after:inset-0"
          />
          <div className="flex flex-col gap-2 p-2">
            <div className="flex gap-2  pb-2">
              <img src="/image/logo-icon-rekamin.svg" alt="logo-company" />
              <div className="flex flex-col text-left">
                <p className="text-base font-medium text-foreground">
                  {jobOpening.title}
                </p>
                <p className="text-base font-medium text-muted-foreground">{jobOpening.company}</p>
              </div>
            </div>
            <Separator className="border-t border-dashed bg-transparent" />
            <div className="flex flex-col items-start gap-2 ">
              <p className="flex items-center gap-2 text-base font-medium text-muted-foreground">
                <IconMapPin />
                {" "}
                {jobOpening.location}
              </p>
              <p className="flex items-center gap-2 text-base font-medium text-muted-foreground">
                <IconCash />
                {" "}
                {jobOpening.salary_range.display_text}
              </p>
            </div>
          </div>
        </label>
      ))}
    </RadioGroup>
  );
}
export default JobOpeningListRadio;
