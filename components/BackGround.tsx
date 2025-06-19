"use client";
import { motion, MotionConfig } from "motion/react";

export function BackGround() {
  return (
    <MotionConfig transition={{ duration: 1.5 }}>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1.5,
          }}
          className="absolute inset-0 h-full w-full bg-[#000000] bg-[linear-gradient(to_right,#00FFFF16_0px,transparent_1px),linear-gradient(to_bottom,#00FFFF16_0px,transparent_1px)] bg-[size:52px_52px] pointer-events-none"
          style={{
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)",
            maskImage:
              "linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)",
          }}
        ></motion.div>
      </motion.div>
    </MotionConfig>
  );
}
