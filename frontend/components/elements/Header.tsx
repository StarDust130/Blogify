import Image from "next/image";
import { Button } from "../ui/button";
import { ModeToggle } from "./ModeToggle";

const Header = () => {
  return (
    <header className="flex justify-between items-center h-20  px-10">
      <div className="flex justify-center items-center gap-5 cursor-pointer">
        <div className="flex justify-center items-center">
          <Image src="/logo-bg.png" alt="logo" width={50} height={50} />
          <h1 className="text-xl font-bold">Blogify</h1>
        </div>
        <div className="flex justify-center items-center gap-5">
          <h1 className="font-bold ">About</h1>
          <h1 className="font-bold ">Projects</h1>
        </div>
      </div>

      <div className="flex justify-center gap-3 items-center">
        <Button variant={"ghost"}>Login</Button>
        <Button>Sign Up</Button>
        <ModeToggle />
      </div>
    </header>
  );
};
export default Header;
