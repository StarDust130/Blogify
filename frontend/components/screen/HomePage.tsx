"use client";
import Image from "next/image";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

import Link from "next/link";
import {
  FaPenNib,
  FaLaptopCode,
  FaCameraRetro,
  FaPaintBrush,
  FaMusic,
  FaFilm,
} from "react-icons/fa";
import { ArrowRight } from "lucide-react";

const HomePage = () => {
  return (
    <>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="md:text-3xl font-bold text-center md: text-2xl">
              Explore Creativity & Innovation
            </h2>
          </motion.div>

          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <motion.div
              className="relative h-64 overflow-hidden sm:h-80 lg:h-full"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                alt="Hero Image"
                src="https://images.unsplash.com/photo-1496843916299-590492c751f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80"
                className="absolute inset-0 h-full w-full object-cover"
                layout="fill"
              />
            </motion.div>

            <motion.div
              className="lg:py-16"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <article className="space-y-4 ">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  Dive into a collection of stories, insights, and tips from our
                  team of experts. Discover new perspectives and expand your
                  horizons with our curated content.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  Whether you&apos;re looking to enhance your skills or simply
                  seeking inspiration, we have something for everyone. Explore
                  the art of storytelling, stay updated with the latest tech
                  trends, and immerse yourself in the world of creativity.
                </motion.p>
              </article>
            </motion.div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-lg text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Welcome to Our Blog
            </h2>
            <p className="mt-4 text--300">
              Discover insightful articles, tips, and stories from our team.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                Icon: FaPenNib,
                title: "Writing Tips",
                description:
                  "Enhance your writing skills with our expert advice and techniques.",
              },
              {
                Icon: FaLaptopCode,
                title: "Tech Insights",
                description:
                  "Stay updated with the latest trends and innovations in technology.",
              },
              {
                Icon: FaCameraRetro,
                title: "Photography",
                description:
                  "Explore the art of photography and improve your skills with our tips.",
              },
              {
                Icon: FaPaintBrush,
                title: "Art & Design",
                description:
                  "Get creative with our art and design tutorials and inspiration.",
              },
              {
                Icon: FaMusic,
                title: "Music",
                description:
                  "Dive into the world of music with our reviews and recommendations.",
              },
              {
                Icon: FaFilm,
                title: "Film & TV",
                description:
                  "Discover the latest in film and television with our reviews and analyses.",
              },
            ].map(({ Icon, title, description }, idx) => (
              <motion.div
                key={idx}
                className="block rounded-xl border border--800 p-8 cursor-pointer shadow-xl   transition hover:border-sky-500/10 hover:shadow-sky-500/10"
                whileHover={{ scale: 1.05, rotate: 1 }}
                whileTap={{ scale: 0.95, rotate: -1 }}
              >
                <Icon className="text--500 size-10" />
                <h2 className="mt-4 text-xl font-bold text--300">{title}</h2>
                <p className="mt-1 text-sm text--300">{description}</p>
                <Link href="#" className="mt-4 text-sm text--500">
                  Read more
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link href="/signup" className="text-xl font-bold">
                <Button variant={"link"}>
                  Explore More <ArrowRight size={16} className="ml-1" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};
export default HomePage;
