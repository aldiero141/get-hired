import type { CandidateResponse, FormattedCandidate } from "@/features/jobs/type";
import dayjs from "dayjs";
import { useState } from "react";
import TablePagination from "@/components/table-pagination";
import { Skeleton } from "@/components/ui/skeleton";
import { useGetCandidates } from "@/features/jobs/query";
import EmptyJobDetailsTable from "./empty-job-details-table";
import { columns } from "./table/column";
import { DataTable } from "./table/data-table";

export default function JobDetailsTables() {
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(1);

  const { data: responseData, isLoading } = useGetCandidates();

  function formatCandidates(response: CandidateResponse): FormattedCandidate[] | null {
    if (!response)
      return null;
    return response.data.map((candidate) => {
      const attrMap = Object.fromEntries(
        candidate.attributes.map(attr => [attr.key, attr.value]),
      );

      return {
        id: candidate.id,
        email: attrMap.email || "",
        full_name: attrMap.full_name || "",
        phone: attrMap.phone || "",
        photo_profile: attrMap.photo_profile || "",
        date_of_birth: dayjs(attrMap.date_of_birth).format("DD MMMM YYYY") || "",
        domicile: attrMap.domicile || "",
        gender: attrMap.gender || "",
        linkedin_link: attrMap.linkedin_link || "",
      };
    });
  }

  return (
    <div className="flex flex-col gap-8 rounded-md border px-4 py-6 ">
      {isLoading
        ? <Skeleton className="h-[calc(80vh-4rem)]" />
        : responseData?.data
          ? (
              <>
                <DataTable columns={columns} data={formatCandidates(responseData as CandidateResponse) || []} />
                <TablePagination
                  rowsPerPage={rowsPerPage}
                  setRowsPerPage={setRowsPerPage}
                  page={page}
                  setPage={setPage}
                  totalItems={responseData?.data.length || 0}
                />
              </>
            )
          : (
              <EmptyJobDetailsTable />
            )}
    </div>
  );
}
