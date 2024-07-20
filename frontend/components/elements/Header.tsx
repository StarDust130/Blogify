"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { ModeToggle } from "./ModeToggle";
import Link from "next/link";
import { Input } from "../ui/input";
import { Menu, Search } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all md:h-20 md:px-10 px-5  duration-300 ${
        isScrolled
          ? "bg-gray-100 dark:bg-primary-foreground shadow-md "
          : "bg-transparent"
      }`}
    >
      <div className="flex w-full justify-between items-center ">
        <div className="flex items-center gap-5 cursor-pointer">
          <Link href="/" className="flex items-center">
            <Image src="/logo-bg.png" alt="logo" width={50} height={50} />
            <h1 className="text-xl hidden md:block font-bold">Blogify</h1>
          </Link>

          <div className="md:flex items-center gap-5 hidden ">
            <Link href="/blogs">
              <h1 className="font-bold text-gray-500 text-sm hover:text-primary">
                Blogs
              </h1>
            </Link>
            <Link href="/about">
              <h1 className="font-bold text-gray-500 text-sm hover:text-primary">
                About
              </h1>
            </Link>
            <Link href="/projects">
              <h1 className="font-bold text-gray-500 text-sm hover:text-primary">
                Projects
              </h1>
            </Link>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <div className="relative flex items-center rounded-full shadow-sm">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              type="text"
              placeholder="Search Blogs"
              className="pl-12 pr-14 py-2 w-full bg-transparent rounded-lg placeholder-gray-400 border-2"
            />
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex items-center space-x-1 text-gray-400">
              <span className="font-semibold text-sm">⌘</span>
              <span className="font-light text-sm">K</span>
            </div>
          </div>
          <Link href="/login">
            <Button variant="ghost" className="transition">
              Login
            </Button>
          </Link>
          <Link href="/signup">
            <Button className="transition">Sign Up</Button>
          </Link>
          <ModeToggle />
        </div>

        <div className="flex md:hidden gap-1 justify-center items-center">
          <ModeToggle />
          <Link href="/login">
            <Button variant="ghost" size={"sm"} className="transition">
              Login
            </Button>
          </Link>
          <Sheet>
            <SheetTrigger>
              <Menu />
            </SheetTrigger>

            <SheetContent className="p-4">
              <SheetHeader className="space-y-4">
                <Link href="/" className="flex items-center space-x-1">
                  <h1 className="text-xl font-bold tracking-tight">Blogify</h1>
                </Link>
                <nav className="flex flex-col space-y-2">
                  <Link
                    href="/blogs"
                    className="text-lg font-semibold hover:text-primary transition duration-300"
                  >
                    Blogs
                  </Link>
                  <Link
                    href="/about"
                    className="text-lg font-semibold hover:text-primary transition duration-300"
                  >
                    About
                  </Link>
                  <Link
                    href="/projects"
                    className="text-lg font-semibold hover:text-primary transition duration-300"
                  >
                    Projects
                  </Link>
                </nav>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
