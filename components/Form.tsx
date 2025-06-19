"use client";
import { useState } from "react";
import { User, Mail, Loader2 } from "lucide-react";
import confetti from "canvas-confetti";
import { motion } from "motion/react";

export default function Form() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [wantsUpdates, setWantsUpdates] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [isLoading, setIsLoading] = useState(false);
  const [showCongrats, setShowCongrats] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name, wants_updates: wantsUpdates }),
      });

      if (res.ok) {
        setStatus("success");
        setEmail("");
        setName("");
        setWantsUpdates(false);
        triggerConfetti();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }

    setIsLoading(false);

    setTimeout(() => {
      setStatus("idle");
    }, 60000);
  };

  const triggerConfetti = () => {
    setShowCongrats(true);
    confetti({ particleCount: 150, spread: 90, origin: { y: 0.6 } });

    setTimeout(() => {
      setShowCongrats(false);
    }, 3000);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative"
    >
      {showCongrats && (
        <div className="fixed inset-0 z-50 backdrop-blur-[3px] flex items-center justify-center">
          <div className="text-white text-2xl sm:text-4xl font-bold animate-pulse text-center">
            🎉 Congratulations!
          </div>
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className={`flex flex-col gap-3 w-full max-w-sm mx-auto transition duration-500 ${
          showCongrats ? "blur-sm pointer-events-none" : ""
        }`}
      >
        {/* Name */}
        <div className="flex items-center gap-2 bg-neutral-900/60 px-4 py-3 rounded-lg border border-white/10">
          <User className="w-4 h-4 text-white/60" />
          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="bg-transparent w-full outline-none text-white placeholder:text-white/40"
          />
        </div>

        {/* Email */}
        <div className="flex items-center gap-2 bg-neutral-900/60 px-4 py-3 rounded-lg border border-white/10">
          <Mail className="w-4 h-4 text-white/60" />
          <input
            type="email"
            placeholder="Address email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-transparent w-full outline-none text-white placeholder:text-white/40"
          />
        </div>

        {/* Checkbox */}
        <label className="flex items-center gap-3 text-white/70 text-sm select-none cursor-pointer">
          <div className="relative">
            <input
              type="checkbox"
              checked={wantsUpdates}
              onChange={(e) => setWantsUpdates(e.target.checked)}
              className="peer hidden"
            />
            <div className="w-5 h-5 rounded-md border border-white/20 bg-neutral-900/50 peer-checked:bg-purple-500 flex items-center justify-center transition-all">
              <svg
                className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
          </div>
          Notify me when it launches
        </label>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full mt-0 sm:mt-3 flex group items-center justify-between px-4 py-3 rounded-lg cursor-pointer bg-neutral-900/60 border border-white/10 text-white text-sm transition hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <span className="flex items-center gap-2 w-full justify-center">
              <Loader2 className="w-4 h-4 animate-spin" />
              Sending...
            </span>
          ) : (
            <>
              <span>Join the waitlist</span>
              <span className="text-lg sm:text-2xl group-hover:-translate-x-10 transition-all group-hover:text-pink-500 duration-900">
                →
              </span>
            </>
          )}
        </button>

        {/* Status Message */}
        {status === "success" && !showCongrats && (
          <p className="text-green-400 text-sm mt-1 text-center">
            You&apos;re officially on the PathBlaze waitlist!
          </p>
        )}
        {status === "error" && (
          <p className="text-red-500 text-sm mt-1 text-center">
            Hmm, something didn&apos;t go as planned.
            <br />
            Please try again or check your internet connection.
          </p>
        )}
      </form>
    </motion.div>
  );
}
