"use client";
import React, { useState } from "react";
import { Modal, ModalBody, ModalContent } from "../ui/animated-modal";
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
import { signupForm } from "@/lib/validation";
import { z } from "zod";
import Image from "next/image";
import { Camera, Loader, Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useToast } from "../ui/use-toast";
import { useRouter } from "next/navigation";
import axios from "axios";
import { SignUp } from "@clerk/nextjs";

const SignupPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const { toast } = useToast();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  //! Function to handle image change
  const handleImageChange = (e: any) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event: any) => {
        setSelectedImage(event.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  //! React Hook Form for Signup
  const form = useForm<z.infer<typeof signupForm>>({
    resolver: zodResolver(signupForm),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  const SignupFormHandler = async (data: z.infer<typeof signupForm>) => {
    try {
      setLoading(true);

      const response = await axios.post("/api/users/signup", data);
      console.log("Signup success", response.data);

      toast({
        title: "Signup Success 🎉",
        description: "You have successfully signed up.",
      });

      router.push("/login");
    } catch (error: any) {
      console.log(error);
      const errMsg = error.response.data.error;

      toast({
        title: "Signup Failed 😢",
        description: errMsg,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
      form.reset();
    }
  };

  return (
    <Modal>
      <ModalBody>
        <ModalContent>
          <SignUp />
        </ModalContent>
      </ModalBody>
    </Modal>
  );
};

export default SignupPage;
