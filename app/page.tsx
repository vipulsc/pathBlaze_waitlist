import { LampHeader } from "../components/LampHeader";
import { BackGround } from "../components/BackGround";
import { Heading } from "@/components/Text/Heading";
import Form from "@/components/Form";
import Social from "@/components/Social";

export default function Home() {
  return (
    <>
      <div className="z-[-2] fixed top-0 left-0 right-0 bottom-0">
        <BackGround />
      </div>
      <div className="pointer-events-none z-[-1]  fixed top-0 left-0 right-0 bottom-0">
        <LampHeader />
      </div>
      <div className="z-[1] flex flex-col gap-y-20 py-20 items-center justify-center h-screen">
        <Heading />
        <div className="w-full -mt-10 z-[2] px-8 sm:px-0 max-w-sm mx-auto">
          <Form />
        </div>
        <Social />
      </div>
    </>
  );
}
