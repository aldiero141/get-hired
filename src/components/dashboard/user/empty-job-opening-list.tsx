export default function EmptyJobOpeningList() {
  return (
    <div className="flex flex-col min-h-[calc(80vh-4rem)] items-center justify-center gap-2">
      <img src="/image/empty-artwork.svg" className="size-64 mb-4" alt="empty-artwork" />
      <h1 className="text-base">No job openings available</h1>
      <p className="text-gray-500 text-sm">Please wait for the next batch of openings.</p>
    </div>
  );
}
