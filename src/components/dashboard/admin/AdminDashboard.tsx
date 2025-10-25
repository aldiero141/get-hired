import { SearchIcon } from "lucide-react";
import { useState } from "react";
import EmptyJobList from "@/components/job-list/EmptyJobList";
import JobListCard from "@/components/job-list/JobListCard";
import { Input } from "@/components/ui/input";
import CreateCard from "./CreateCard";

const jobList = [
  {
    status: "active",
    title: "Job Title",
    dateStarted: "01 Oct 2025",
    range: "Rp. 0 - Rp. 0",
  },
  {
    status: "inactive",
    title: "Job Title",
    dateStarted: "01 Oct 2025",
    range: "Rp. 0 - Rp. 0",
  },
  {
    status: "draft",
    title: "Job Title",
    dateStarted: "01 Oct 2025",
    range: "Rp. 0 - Rp. 0",
  },
];

export default function AdminDashboard() {
  const [openCreateModal, setOpenCreateModal] = useState(false);

  return (
    <div className="grid grid-cols-8 gap-6 w-full h-[calc(90vh-4rem)]">
      <div className="col-span-6 flex flex-col gap-4 w-full h-full ">
        <div className="relative">
          <Input id="search" className="peer pe-9" placeholder="Search..." type="text" />
          <div className="pointer-events-none absolute inset-y-0 end-0 flex items-center justify-center pe-3 text-muted-foreground/80 peer-disabled:opacity-50">
            <SearchIcon size={16} className="text-primary" aria-hidden="true" />
          </div>
        </div>
        <div id="list-section" className="w-full h-full flex flex-col gap-4">
          {jobList.map((job, index) => (
            <JobListCard key={index} status={job.status as "active" | "inactive" | "draft"} title={job.title} dateStarted={job.dateStarted} range={job.range} />
          ))}
          {jobList.length === 0 && <EmptyJobList onClick={() => setOpenCreateModal(true)} />}
        </div>
      </div>
      <div className="col-span-2">
        <CreateCard onClick={() => setOpenCreateModal(true)} />
      </div>
    </div>
  );
}
