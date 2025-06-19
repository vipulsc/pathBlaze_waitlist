import { LampHeader } from "../components/LampHeader";
import { BackGround } from "../components/BackGround";
import { Heading } from "@/components/Text/Heading";

export default function Home() {
  return (
    <>
      <div className="z-[-2] fixed top-0 left-0 right-0 bottom-0">
        <BackGround />
      </div>
      <div className="pointer-events-none z-[-1]  fixed top-0 left-0 right-0 bottom-0">
        <LampHeader />
      </div>
      <div className="z-[1] flex items-center justify-center h-screen">
        <Heading />
      </div>
    </>
  );
}
