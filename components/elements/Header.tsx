"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { ModeToggle } from "./ModeToggle";
import Link from "next/link";
import { Input } from "../ui/input";
import { Menu, Search as SearchIcon } from "lucide-react";
import Search from "./Search";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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
      className={`fixed top-0 left-0 w-full z-50 transition-all  md:px-10 px-5  duration-300 ${
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
              <h1 className="font-bold  text-sm hover:text-primary">Blogs</h1>
            </Link>
            <Link href="/about">
              <h1 className="font-bold  text-sm hover:text-primary">About</h1>
            </Link>
            <Link href="/projects">
              <h1 className="font-bold text-sm hover:text-primary">Projects</h1>
            </Link>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <div className="relative flex items-center rounded-full shadow-sm">
            <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              type="text"
              onClick={() => setOpen(!open)}
              placeholder="Search Blogs"
              className="pl-12 pr-14 py-2 w-full cursor-pointer bg-transparent rounded-lg placeholder-gray-400 border-2"
            />
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex items-center space-x-1 text-gray-400">
              <span className="font-semibold text-sm">⌘</span>
              <span className="font-light text-sm">K</span>
            </div>
          </div>

          <SignedIn>
            <UserButton />
          </SignedIn>

          <SignedOut>
            <Link href="/signin">
              <Button variant="ghost" className="transition">
                Login
              </Button>
            </Link>
            <Link href="/signup">
              <Button className="transition">Sign Up</Button>
            </Link>
          </SignedOut>
          <ModeToggle />
        </div>

        <div className="flex md:hidden gap-1 justify-center items-center">
          <SearchIcon
            onClick={() => setOpen(!open)}
            className="mr-3"
            size={18}
          />
          <Link href="/signin">
            <Button variant="secondary" size={"sm"} className="transition">
              Login
            </Button>
          </Link>
          <ModeToggle />
          <DropdownMenu>
            <DropdownMenuTrigger>
              {" "}
              <Menu />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <Link href="/blogs">
                <DropdownMenuItem> Blogs</DropdownMenuItem>
              </Link>
              <Link href="/about">
                <DropdownMenuItem> About</DropdownMenuItem>
              </Link>
              <Link href="/projects">
                <DropdownMenuItem> Projects</DropdownMenuItem>
              </Link>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <Search setOpen={setOpen} open={open} />
      </div>
    </header>
  );
};

export default Header;
