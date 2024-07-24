"use client";
import React, { useState } from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalTrigger,
} from "../ui/animated-modal";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { Button } from "../ui/button";
import { formSchema } from "@/lib/validation";
import { z } from "zod";
import Image from "next/image";
import { Camera } from "lucide-react";
import Link from "next/link";

const SignupPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e: any) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event: any) => {
        setSelectedImage(event.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div className="  flex items-center justify-center">
      <Modal>
        <ModalBody>
          <ModalContent>
            <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
              Sign Up to
              <span className="px-1 mx-1 py-0.5 rounded-md bg-sky-100  dark:bg-neutral-800 dark:border-neutral-700 border border-gray-200">
                Blogify!
              </span>{" "}
            </h4>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <FormItem className="flex flex-col items-center">
                  <FormLabel>Profile Picture</FormLabel>
                  <FormControl>
                    <div className="relative w-32 h-32 flex  rounded-full overflow-hidden bg-gray-200">
                      <Input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="absolute inset-0 z-20 w-full h-full opacity-0 cursor-pointer"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        {selectedImage ? (
                          <Image
                            src={selectedImage}
                            alt="Profile"
                            className="w-full h-full object-cover"
                            layout="fill"
                          />
                        ) : (
                          <Image
                            src="/rick.jpeg"
                            alt="Profile Placeholder"
                            className="w-full h-full object-cover"
                            layout="fill"
                          />
                        )}
                      </div>
                      <div className="absolute bottom-2 right-3 z-10 bg-white p-1 cursor-pointer rounded-full shadow-lg">
                        <Camera
                          size={24}
                          className="text-gray-700 hover:text-gray-900 transition-colors duration-300"
                        />
                      </div>
                    </div>
                  </FormControl>
                  {!selectedImage && (
                    <FormDescription>
                      *This is a Placeholder Image. Please Select your Profile
                      Picture.
                    </FormDescription>
                  )}

                  <FormMessage />
                </FormItem>
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Username</FormLabel>
                      <FormControl>
                        <Input placeholder="Rick" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex justify-between items-center w-full space-x-4">
                  <div className="w-1/2">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input
                              className="w-full"
                              type="email"
                              placeholder="rick@blogify.com"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="w-1/2 ">
                    <FormField
                      control={form.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Password</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="********"
                              {...field}
                              type="text"
                            />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                <div className=" flex justify-between">
                  <div className="text-sm">
                    Already Have Account{" "}
                    <Link href={"/login"} className="text-blue-500">
                      Login
                    </Link>
                  </div>
                  <Button type="submit">Submit</Button>
                </div>
              </form>
            </Form>
          </ModalContent>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default SignupPage;
