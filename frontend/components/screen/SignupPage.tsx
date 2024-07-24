"use client";
import React from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "../ui/animated-modal";

import { Button } from "../ui/button";
import { MoveRight } from "lucide-react";

const SignupPage = () => {

  return (
    <div className="  flex items-center justify-center">
      <Modal>
        <ModalTrigger className=" flex justify-center group/modal-btn">
          <Button className="relative group text-center overflow-hidden">
            <span className="block transition-transform duration-500 ease-in-out group-hover:translate-x-40">
              Signup
            </span>
            <div className="absolute inset-0 flex text-xs items-center justify-center transition-transform duration-500 ease-in-out -translate-x-40 group-hover:translate-x-0 z-20">
              Let&apos;s Go!
            </div>
          </Button>
        </ModalTrigger>
        <ModalBody>
          <ModalContent>
            <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
              Sign Up to
              <span className="px-1 mx-1 py-0.5 rounded-md  dark:bg-neutral-800 dark:border-neutral-700 border border-gray-200">
                Blogify!
              </span>{" "}
            </h4>
          </ModalContent>
          <ModalFooter className="gap-4">
          
            <Button>
              SignUp <MoveRight className="ml-1" size={12} />
            </Button>
          </ModalFooter>
        </ModalBody>
      </Modal>
    </div>
  );
};


export default SignupPage;
