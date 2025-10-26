import type { JobsOpenings } from "@/features/job-openings/type";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { useState } from "react";
import { NavLink } from "react-router";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import JobOpeningListRadio from "./job-opening-list-radio";

type Props = {
  data: JobsOpenings[];
};

export default function JobOpeningList({ data }: Props) {
  const [activeJobOpeningID, setActiveJobOpeningID] = useState<string>(data[0].id);

  function getActiveJobOpeningDetails(jobOpeningID: string) {
    return data.find(jobOpening => jobOpening.id === jobOpeningID);
  }

  return (
    <div className="flex flex w-full h-full px-32 py-4 justify-center gap-3">
      <ScrollArea className="w-full h-full max-w-1/3 min-h-[calc(90vh-4rem)] max-h-[calc(90vh-4rem)] flex flex-col gap-4 px-4">
        <JobOpeningListRadio
          data={data}
          setActiveJobOpeningID={setActiveJobOpeningID}
        />
      </ScrollArea>
      <div className="w-full h-full max-w-2/3 min-h-[calc(90vh-4rem)] flex flex-col gap-4 border border-gray-200 rounded-lg p-4">
        {activeJobOpeningID && (
          <div>
            <div className="flex gap-2 justify-between pb-2">
              <div className="flex gap-4 items-start">
                <img src="/image/logo-icon-rekamin.svg" alt="logo-company" />
                <div className="flex flex-col text-left gap-1">
                  <div className={cn(`text-xs rounded text-center text-background font-medium w-fit px-2 py-1`, getActiveJobOpeningDetails(activeJobOpeningID)?.type === "Full-time"
                    ? "bg-green-500"
                    : getActiveJobOpeningDetails(activeJobOpeningID)?.type === "Part-time"
                      ? "bg-yellow-500"
                      : "bg-orange-500")}
                  >
                    {getActiveJobOpeningDetails(activeJobOpeningID)?.type}
                  </div>
                  <h1 className="text-lg font-semibold text-foreground">
                    {getActiveJobOpeningDetails(activeJobOpeningID)?.title}
                  </h1>
                  <p className="text-sm font-medium text-muted-foreground">{getActiveJobOpeningDetails(activeJobOpeningID)?.company}</p>
                </div>
              </div>
              <NavLink to={`/dashboard/apply-job/${getActiveJobOpeningDetails(activeJobOpeningID)?.id}`} className="flex gap-2 justify-between pb-2">
                <Button type="button" variant="secondary" size="sm" className="w-fit text-sm font-semibold">Apply</Button>
              </NavLink>
            </div>
            <Separator className="border-t mt-2 mb-4 bg-transparent" />
            <div className="flex flex-col max-h-[calc(80vh-4rem)] overflow-y-auto">
              <p>{getActiveJobOpeningDetails(activeJobOpeningID)?.descriptions}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
