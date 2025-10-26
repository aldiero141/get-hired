"use client";

import type { ColumnDef } from "@tanstack/react-table";
import type { FormattedCandidate } from "@/features/jobs/type";
import { Checkbox } from "@/components/ui/checkbox";

function HeaderComponent(header: string) {
  return (
    <div className="w-full flex">
      <h6 className="text-sm font-semibold">{header}</h6>
    </div>
  );
}

export const columns: ColumnDef<FormattedCandidate>[] = [
  {
    accessorKey: "full_name",
    header: () => {
      return (
        <div className="flex items-center gap-8">
          <Checkbox />
          <p className="text-sm">Nama Lengkap</p>
        </div>
      );
    },
    cell: ({ row }) => {
      return (
        <div className="flex items-center gap-8">
          <Checkbox />
          <p className="text-sm">{row.original.full_name}</p>
        </div>
      );
    },
  },
  {
    accessorKey: "email",
    header: () => HeaderComponent("Email Address"),
    cell: ({ row }) => row.original.email || "-",
  },
  {
    accessorKey: "phone",
    header: () => HeaderComponent("Phone Number"),
    cell: ({ row }) => row.original.phone || "-",
  },
  {
    accessorKey: "date_of_birth",
    header: () => HeaderComponent("Date of Birth"),
    cell: ({ row }) => row.original.date_of_birth || "-",
  },
  {
    accessorKey: "domicile",
    header: () => HeaderComponent("Domicile"),
    cell: ({ row }) => row.original.domicile || "-",
  },
  {
    accessorKey: "gender",
    header: () => HeaderComponent("Gender"),
    cell: ({ row }) => row.original.gender || "-",
  },
  {
    accessorKey: "linkedin",
    header: () => HeaderComponent("Link LinkedIn"),
    cell: ({ row }) => {
      return (
        <div className="flex items-center gap-2">
          <a className="text-blue-500 underline" href={row.original.linkedin_link}>{row.original.linkedin_link}</a>
        </div>
      );
    },
  },
];
