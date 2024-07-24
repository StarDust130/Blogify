import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";

const NotFound = () => {
  return (
    <>
      <div className="flex h-screen flex-col ">
        <div className="flex flex-1 items-center justify-center flex-col">
          <Image
            src="/not-found.png"
            alt="not-found"
            width={500}
            height={800}
            className="invert-0 dark:invert"
          />
          <div className="mx-auto max-w-xl px-4 py-8 text-center">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              We can&apos;t find that page.
            </h1>

            <p className="mt-4 text-gray-500">
              Try searching again, or return home to start from the beginning.
            </p>

            <Button className="mt-5" variant={"link"}>
              <ArrowLeft className="mr-1" size={16} />
              Go Back Home
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
export default NotFound;
