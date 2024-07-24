import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-transparent">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex justify-center sm:justify-start">
            <Link href="/" className="flex items-center">
              <Image src="/logo-bg.png" alt="logo" width={50} height={50} />
              <h1 className="text-xl font-bold">Blogify</h1>
            </Link>
          </div>

          <p className="mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right">
            Copyright{" "}
            <Link
              href="https://github.com/StarDust130"
              target="_blank"
              className="hover:text-yellow-500 font-semibold"
            >
              StarDust🌟
            </Link>{" "}
            &copy; {year}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
