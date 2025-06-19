"use client";
import { motion } from "motion/react";

export function Heading() {
  return (
    <div className="px-8 sm:px-16 flex flex-col items-center justify-center">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl sm:text-5xl text-white/80 font-bold text-center"
      >
        Get Early Access
        <br />
        <span className="relative inline-block px-4 py-2 mt-3 sm:mt-0 rounded-xl">
          <span className="absolute inset-0 blur-sm opacity-50 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 rounded-xl"></span>
          <span className="relative bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent tracking-wide font-semibold">
            to the Future of Learning
          </span>
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-xs sm:text-base text-white/80 font-normal text-center mt-8 sm:mt-4 w-full"
      >
        <span
          className="block mx-auto text-white/40 tracking-wider w-full sm:w-[60%]"
          style={{ fontFamily: "var(--font-chewy)" }}
        >
          Join the waitlist for structured learning paths, curated content,
          progress tracking, and shareable certificates.
        </span>
      </motion.p>
    </div>
  );
}
