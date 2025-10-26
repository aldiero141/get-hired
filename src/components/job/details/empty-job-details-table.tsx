export default function EmptyJobDetailsTable() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 h-[calc(80vh-4rem)]">
      <img className="size-64" src="/image/empty-candidate-artwork.svg" alt="empty-candidate-artwork" />
      <p className="text-center text-base font-semibold">No candidates found</p>
      <p className="text-center text-sm text-gray-500">
        Share your job vacancies so that more candidates will apply.
      </p>
    </div>
  );
}
