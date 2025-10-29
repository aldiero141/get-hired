export default function NotFoundPage() {
  return (
    <div className="mx-auto w-full h-full pt-2 max-w-md flex flex-col flex flex-col w-full min-h-screen justify-center items-center">
      <img src="/404.svg" className="w-3/4" alt="404" />
      <p className="text-center text-gray-500">
        Maaf, halaman yang anda cari tidak ditemukan.
      </p>
    </div>
  );
}
