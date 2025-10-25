import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type JobListCardProps = {
  status: "active" | "inactive" | "draft";
  title: string;
  dateStarted: string;
  range: string;
  cta: string;
};

export default function JobListCard({ status = "active", title, dateStarted, range, cta }: JobListCardProps) {
  return (
    <Card className="border-0 rounded-lg py-6 shadow-lg">
      <CardContent className="px-6">
        <div className="flex gap-2">
          <div className="flex flex-col gap-2 w-full">
            <div className="flex gap-2">
              <div
                id="status"
                className={cn("border px-2 py-1 rounded-lg h-8 w-18 flex items-center justify-center font-semibold text-sm capitalize", status === "active"
                  ? "bg-green-100/20 border-green-500 text-green-500"
                  : status === "inactive"
                    ? "bg-red-100/20 border-red-500 text-red-500"
                    : "bg-yellow-100/20 border-yellow-500 text-yellow-500")}
              >
                {status}
              </div>
              <div id="date-started" className="text-sm text-muted-foreground h-8 flex items-center justify-center border border-gray-200 px-2 py-1 rounded">
                {dateStarted}
              </div>
            </div>
            <h1 className="text-lg font-semibold m-0">
              {title || "Job Title"}
            </h1>
            <p className="text-base text-muted-foreground">
              {range || "Rp. 0 - Rp. 0"}
            </p>
          </div>
          <div className="flex items-end justify-end">
            <Button type="button" size="sm" className="text-sm font-normal rounded-lg">{cta || "Manage Job"}</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
