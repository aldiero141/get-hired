import { Button } from "@/components/ui/button";

type EmptyJobListProps = {
  onClick: () => void;
};

export default function EmptyJobList({ onClick }: EmptyJobListProps) {
  return (
    <div className="flex flex-col gap-3 items-center justify-center h-full w-full">
      <img src="/image/empty-artwork.svg" alt="empty-job-list" />
      <h1 className="text-lg font-semibold mt-2">No job openings available</h1>
      <p className="text-base text-muted-foreground mb-2">Create a job opening now and start the candidate process.</p>
      <Button type="button" variant="secondary" onClick={() => onClick()}>Create a new job</Button>
    </div>
  );
}
