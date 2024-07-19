import Image from "next/image";
import { Button } from "../ui/button";
import { ModeToggle } from "./ModeToggle";
import Link from "next/link";
import { Input } from "../ui/input";
import { KeyboardIcon, Search, SearchIcon } from "lucide-react";

const Header = () => {
  return (
    <header className="flex justify-between items-center h-20 px-10 ">
      <div className="flex items-center gap-5 cursor-pointer">
        <Link href="/" className="flex items-center">
          <Image src="/logo-bg.png" alt="logo" width={50} height={50} />
          <h1 className="text-xl font-bold">Blogify</h1>
        </Link>

        <div className="flex items-center gap-5">
          <Link href="/blogs">
            <h1 className="font-bold text-gray-500 text-sm hover:text-primary  ">
              Blogs
            </h1>
          </Link>
          <Link href="/about">
            <h1 className="font-bold text-gray-500 text-sm hover:text-primary ">
              About
            </h1>
          </Link>
          <Link href="/projects">
            <h1 className="font-bold text-gray-500  text-sm hover:text-primary">
              Projects
            </h1>
          </Link>
        </div>
      </div>

      <div className="relative flex items-center rounded-full shadow-sm">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <Input
          type="text"
          placeholder="Search Blogs"
          className="pl-12 pr-14 py-2 w-full bg-transparent outline-none rounded-lg focus:ring-0 placeholder-gray-400"
        />
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex items-center space-x-1 text-gray-400">
          <span className="font-semibold text-sm">⌘</span>
          <span className="font-light text-sm">K</span>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Link href="/login">
          <Button variant="ghost" className=" transition">
            Login
          </Button>
        </Link>
        <Link href="/signup">
          <Button className=" transition">Sign Up</Button>
        </Link>
        <ModeToggle />
      </div>
    </header>
  );
};
export default Header;