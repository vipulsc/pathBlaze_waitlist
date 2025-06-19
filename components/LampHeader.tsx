"use client";
import { motion } from "motion/react";

export function LampHeader() {
  return (
    <div className="flex flex-col items-center justify-center">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "20%" }}
        transition={{ duration: 2.5 }}
        className="h-1 bg-[#00FFFF]/80 blur-xs rounded-full"
      />
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "16%" }}
        transition={{ duration: 2.5 }}
        className="h-40 -mt-24 bg-[#00FFFF]/50 blur-2xl rounded-full"
      />
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "8%" }}
        transition={{ duration: 5 }}
        className="h-[120px] -mt-32 bg-[#00FFFF]/30 blur-3xl rounded-full"
      />
    </div>
  );
}
