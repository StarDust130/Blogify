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
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { Button } from "../ui/button";
import { formSchema } from "@/lib/validation";
import { z } from "zod";
import Link from "next/link";

const LoginPage = () => {
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
    <div className="flex items-center justify-center">
      <Modal>
        <ModalBody>
          <ModalContent>
            <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
              Login to
              <span className="px-1 mx-1 py-0.5 rounded-md bg-sky-100  dark:bg-neutral-800 dark:border-neutral-700 border border-gray-200">
                Blogify!
              </span>{" "}
            </h4>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Username/Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Rick" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem className="relatve">
                      <FormLabel>Password</FormLabel>

                      <Input placeholder="********" {...field} type={"text"} />

                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className=" flex justify-between">
                  <div className="text-sm">
                    Create Account{" "}
                    <Link href={"/signup"} className="text-blue-500">
                      Sign Up
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

export default LoginPage;
