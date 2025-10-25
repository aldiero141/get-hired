import { Button } from "@/components/ui/button";

type CreateCardProps = {
  onClick: () => void;
};

export default function CreateCard({ onClick }: CreateCardProps) {
  return (
    <div className='w-full h-full max-h-[168px] bg-[url("/image/sidecard-bg-image.jpg")] bg-cover bg-start bg-no-repeat rounded-lg'>
      <div className="flex flex-col bg-black/40 rounded-lg w-full h-full justify-center p-8 text-white gap-1">
        <h1 className="text-2xl font-medium">Recruit the best candidates</h1>
        <p className="text-lg">Create jobs, invite, and hire with ease</p>
        <Button type="button" variant="default" className="mt-4 text-base font-normal" onClick={onClick}>Create a new job</Button>
      </div>
    </div>
  );
}
