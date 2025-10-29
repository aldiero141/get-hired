import { CircleUserRoundIcon, XIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useFileUpload } from "@/hooks/use-file-upload";

type Props = {
  onChange: (file: File) => void;
};

export default function Component({
  onChange,
}: Props) {
  const [
    { files, isDragging },
    {
      removeFile,
      openFileDialog,
      getInputProps,
      handleDragEnter,
      handleDragLeave,
      handleDragOver,
      handleDrop,
    },
  ] = useFileUpload({
    accept: "image/*",
    onFilesChange: (files) => {
      if (files.length === 0)
        return;
      onChange(files[0].file as File);
    },
  });

  const previewUrl = files[0]?.preview || null;

  return (
    <div className="flex flex-col gap-2">
      <div className="relative inline-flex w-fit">
        <button
          className="relative flex size-16 items-center justify-center overflow-hidden rounded-full border border-dashed border-input transition-colors outline-none hover:bg-accent/50 focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 has-disabled:pointer-events-none has-disabled:opacity-50 has-[img]:border-none data-[dragging=true]:bg-accent/50"
          onClick={openFileDialog}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          data-dragging={isDragging || undefined}
          aria-label={previewUrl ? "Change image" : "Upload image"}
        >
          {previewUrl
            ? (
                <img
                  className="size-full object-cover"
                  src={previewUrl}
                  alt={files[0]?.file?.name || "Uploaded image"}
                  width={64}
                  height={64}
                  style={{ objectFit: "cover" }}
                />
              )
            : (
                <div aria-hidden="true">
                  <CircleUserRoundIcon className="size-4 opacity-60" />
                </div>
              )}
        </button>
        {previewUrl && (
          <Button
            onClick={() => removeFile(files[0]?.id)}
            size="icon"
            className="absolute -top-1 -right-1 size-6 rounded-full border-2 border-background shadow-none focus-visible:border-background"
            aria-label="Remove image"
          >
            <XIcon className="size-3.5" />
          </Button>
        )}
        <input
          {...getInputProps()}
          className="sr-only"
          aria-label="Upload image file"
          tabIndex={-1}
        />
      </div>
    </div>
  );
}
