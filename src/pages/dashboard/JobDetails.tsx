import { Navigate, useParams } from "react-router";
import JobDetailsTables from "@/components/job/details/job-details-table";
import { useUser } from "@/store/user";

export default function JobDetails() {
  const { jobId } = useParams();
  const { role } = useUser();

  console.warn("jobId", jobId);

  if (role !== "admin") {
    return <Navigate to="/" />;
  }

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-lg font-semibold">Frontend Developer</h1>
      <JobDetailsTables />
    </div>
  );
}
