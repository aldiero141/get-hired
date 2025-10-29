import type { JobsOpenings } from "@/features/job-openings/type";
import { Skeleton } from "@/components/ui/skeleton";
import { useGetJobOpenings } from "@/features/job-openings/query";
import EmptyJobOpeningList from "./empty-job-opening-list";
import JobOpeningList from "./job-opening-list";

export default function UserDashboard() {
  const { data: jobOpenings, isLoading } = useGetJobOpenings();

  return (
    <>
      {
        isLoading
          ? (
              <Skeleton className="w-full h-[calc(90vh-4rem)]" />
            )
          : jobOpenings?.length !== 0
            ? (
                <JobOpeningList data={jobOpenings as JobsOpenings[]} />
              )
            : (
                <EmptyJobOpeningList />
              )
      }
    </>
  );
}
