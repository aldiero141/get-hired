import { SearchIcon } from "lucide-react";
import { useState } from "react";
import CreateJobModal from "@/components/job/create/create-job-modal";
import EmptyJobList from "@/components/job/list/empty-job-list";
import JobListCard from "@/components/job/list/job-list-card";
import { Input } from "@/components/ui/input";
import CreateCard from "./create-card";

const jobList = [
  {
    id: "job_20251001_0001",
    slug: "frontend-developer",
    title: "Frontend Developer",
    status: "active",
    salary_range: {
      min: 7000000,
      max: 8000000,
      currency: "IDR",
      display_text: "Rp7.000.000 - Rp8.000.000",
    },
    list_card: {
      badge: "Active",
      started_on_text: "started on 1 Oct 2025",
      cta: "Manage Job",
    },
  },
  {
    id: "job_20251001_0002",
    slug: "frontend-developer",
    title: "Frontend Developer",
    status: "inactive",
    salary_range: {
      min: 7000000,
      max: 8000000,
      currency: "IDR",
      display_text: "Rp7.000.000 - Rp8.000.000",
    },
    list_card: {
      badge: "Active",
      started_on_text: "started on 1 Oct 2025",
      cta: "Manage Job",
    },
  },
  {
    id: "job_20251001_0003",
    slug: "frontend-developer",
    title: "Frontend Developer",
    status: "draft",
    salary_range: {
      min: 7000000,
      max: 8000000,
      currency: "IDR",
      display_text: "Rp7.000.000 - Rp8.000.000",
    },
    list_card: {
      badge: "Active",
      started_on_text: "started on 1 Oct 2025",
      cta: "Manage Job",
    },
  },
];

export default function AdminDashboard() {
  const [openCreateModal, setOpenCreateModal] = useState(false);

  return (
    <>
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
              <JobListCard key={index} status={job.status as "active" | "inactive" | "draft"} title={job.title} dateStarted={job.list_card.started_on_text} range={job.salary_range.display_text} cta={job.list_card.cta} />
            ))}
            {jobList.length === 0 && <EmptyJobList onClick={() => setOpenCreateModal(true)} />}
          </div>
        </div>
        <div className="col-span-2">
          <CreateCard onClick={() => setOpenCreateModal(true)} />
        </div>
      </div>
      { openCreateModal && <CreateJobModal openCreateModal={openCreateModal} setOpenCreateModal={setOpenCreateModal} />}
    </>
  );
}
