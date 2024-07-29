"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Error({}: {

}) {
  return (
    <div className="flex justify-center items-center h-screen flex-col gap-6 ">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center flex justify-center items-center flex-col gap-6"
      >
        <h2 className="text-4xl font-bold mb-4">Oops! Something went wrong!</h2>
        <div className="">
          <Image src="/error.avif" height={300} width={300} alt="Error" />
        </div>
        <p className="text-lg mb-6">
          We are working to fix the problem. Please try again later.
        </p>
        <Link href={"/"}>
          <Button className="mt-5" variant={"link"}>
            <ArrowLeft className="mr-1" size={16} />
            Go Back Home
          </Button>
        </Link>
      </motion.div>
      <div className="absolute inset-0 pointer-events-none flex justify-center items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 1 }}
          className="w-1/2 h-1/2  rounded-full blur-2xl"
        />
      </div>
    </div>
  );
}
