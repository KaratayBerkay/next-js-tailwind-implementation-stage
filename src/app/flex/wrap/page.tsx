import Link from "next/link";
import React from "react";

function Wrap() {
  return (
    <div>
      <header className="sticky z-50 flex flex-row items-center bg-gray-300 top-0 p-4 space-x-8">
        <Link href={"/"}>
          <span className="text-sky-800">Home Page</span>
        </Link>
        <span>{"<"}</span>
        <Link href={"/flex"}>
          <span className="text-sky-800">Flex</span>
        </Link>
        <div className="flex flex-1 text-2xl justify-center items-center">
          <span>Flex Box Wrap</span>
        </div>
      </header>
      <div className="flex items-center justify-center mt-5 mb-10">
        <span className="my-1">When wrap is given width is 720px</span>
      </div>
      <div className="container mx-auto my-4">
        <div className="flex flex-row flex-wrap w-full h-24 bg-gray-400 rounded-lg p-4 gap-3">
          <div className="bg-purple-100 w-[720px] border shadow-lg border-black">
            01
          </div>
          <div className="bg-purple-200 w-[720px] border shadow-lg border-black">
            02
          </div>
          <div className="bg-purple-300 w-[720px] border shadow-lg border-black">
            03
          </div>
          <div className="bg-purple-300 w-[720px] border shadow-lg border-black">
            04
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center mt-5 mb-10">
        <span className="my-1">When wrap is given width is not 720px</span>
      </div>
      <div className="container mx-auto my-4">
        <div className="flex flex-row flex-nowrap w-full h-24 bg-gray-400 rounded-lg p-4 gap-3">
          <div className="bg-purple-100 w-[720px] border shadow-lg border-black">
            01
          </div>
          <div className="bg-purple-200 w-[720px] border shadow-lg border-black">
            02
          </div>
          <div className="bg-purple-300 w-[720px] border shadow-lg border-black">
            03
          </div>
          <div className="bg-purple-300 w-[720px] border shadow-lg border-black">
            04
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wrap;
