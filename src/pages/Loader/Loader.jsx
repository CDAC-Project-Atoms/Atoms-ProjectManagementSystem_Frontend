import { Skeleton } from "@/components/ui/skeleton";

const Loader = () => {
  return (
    <div className="space-y-2 p-5 lg:p-20">
      {[1, 1, 1, 1, 1, 1, 1, 1, 1].map((item, index) => (
        <Skeleton key={index} className="h-[10vh] w-full rounded-xl" />
      ))}
    </div>
  );
};

export default Loader;
