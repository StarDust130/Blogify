"use client";
import React, { useState } from "react";
import { Modal, ModalBody, ModalContent } from "../ui/animated-modal";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useToast } from "../ui/use-toast";
import { useRouter } from "next/navigation";

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
import { Loader } from "lucide-react";
import { handleError } from "@/helpers/ErrorMsg";
import axios from "axios";

const LoginPage = () => {
  const { toast } = useToast();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      usernameOrEmail: "",
      password: "",
    },
  });

  //! Handle Form Submit 🍀
  const onSubmit = async () => {
    try {
      setLoading(true);
      const data = form.getValues();
      console.log("Form Data:", data); // Log form data for debugging

      const response = await axios.post("/api/users/login", data);

      console.log("API Response:", response); // Log response for debugging

      toast({
        title: "Login Success 🎉",
        description: "You have successfully logged in.",
      });

      router.push("/blogs");
    } catch (error: any) {
      console.log("Error:", error); // Log full error for debugging

      const errorMessage =
        error.response?.data?.error || error.message || "Something went wrong";
      handleError(errorMessage);
    } finally {
      setLoading(false);
      form.reset();
    }
  };

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
                  name="usernameOrEmail"
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
                  <Button type="submit">
                    {loading ? (
                      <span className="flex justify-center gap-2">
                        <Loader className="animate-spin mr-2" />
                        Loading...
                      </span>
                    ) : (
                      "Submit"
                    )}
                  </Button>
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
