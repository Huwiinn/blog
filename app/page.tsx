import Wrapper from "@/components/Wrapper";
import Image from "next/image";

export default function Home() {
  return (
    <Wrapper>
      <div className="flex flex-col items-center justify-center h-screen bg-neutral-200">
        <h1 className="text-2xl font-bold">Hello World</h1>
      </div>
    </Wrapper>
  );
}
