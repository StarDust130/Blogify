"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { MoonIcon as Moon, SunIcon as Sun } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";
import { MoonStar } from "lucide-react";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Or return a placeholder component while mounting
  }

  const isDark = theme === "dark";

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      <AnimatePresence initial={false} mode="wait">
        {isDark ? (
          <motion.div
            key="sun"
            initial={{ opacity: 0, rotate: -180, scale: 0 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 180, scale: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute "
          >
            <Sun className="md:h-[1.5rem] md:w-[1.5rem] h-[1rem] w-[1rem]" />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ opacity: 0, rotate: -180, scale: 0 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 180, scale: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute "
          >
            <MoonStar  className="md:h-[1.5rem] md:w-[1.5rem] h-[1rem] w-[1rem] " />
          </motion.div>
        )}
      </AnimatePresence>
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
