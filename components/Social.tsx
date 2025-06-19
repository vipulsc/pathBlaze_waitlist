import { FaGithub, FaXTwitter } from "react-icons/fa6";
import Link from "next/link";

export default function Social() {
  return (
    <div className="px-6 sm:px-8">
      <div className="flex flex-row items-center gap-20 sm:gap-80 md:gap-120">
        {/* Twitter */}
        <Link
          href="https://twitter.com/vipulsc1"
          target="_blank"
          className="hover:scale-110 transition-all duration-300 ease-in-out"
        >
          <div className="flex flex-col gap-3 items-center justify-center shrink-0">
            <div className="w-[80px] sm:w-[160px] h-[1px] bg-gradient-to-r from-white/10 via-white/60 to-white/10 rounded-full"></div>
            <div className="flex flex-row gap-4 items-center">
              <FaXTwitter size={24} className="text-white" />
              <div className="text-white/60 text-xs sm:text-base">
                @vipulsc1
              </div>
            </div>
          </div>
        </Link>

        {/* GitHub */}
        <Link
          href="https://github.com/vipulsc"
          target="_blank"
          className="hover:scale-110 transition-all duration-300 ease-in-out"
        >
          <div className="flex flex-col gap-3 items-center justify-center shrink-0">
            <div className="w-[80px] sm:w-[160px] h-[1px] bg-gradient-to-r from-white/10 via-white/60 to-white/10 rounded-full"></div>
            <div className="flex flex-row gap-2 items-center">
              <FaGithub size={24} className="text-white" />
              <div className="text-white/60 text-xs sm:text-base">@vipulsc</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
