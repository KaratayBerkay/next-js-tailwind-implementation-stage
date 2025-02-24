import Link from "next/link";
import React from "react";

function Columns() {
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
          <span>Flex Box Columns</span>
        </div>
      </header>
      <div className="flex items-center justify-center mt-5 mb-10">
        <span className="my-1">Use column to adjust items below.</span>
      </div>
      <div className="container mx-auto my-4 rounded-lg p-4 border-4">
        <div className="flex flex-col p-4">
          <div className="flex bg-purple-200 h-16 my-1 justify-center items-center text-xl rounded-lg">
            01
          </div>
          <div className="flex bg-purple-400 h-16 my-1 justify-center items-center text-xl rounded-lg">
            02
          </div>
          <div className="flex bg-purple-600 h-16 my-1 justify-center items-center text-xl rounded-lg">
            03
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center mt-2 mb-10">
        <span className="my-1">Use reverse for column adjustments.</span>
      </div>
      <div className="container mx-auto my-4 rounded-lg p-4 border-4">
        <div className="flex flex-col-reverse p-4">
          <div className="flex bg-purple-200 h-16 my-1 justify-center items-center text-xl rounded-lg">
            01
          </div>
          <div className="flex bg-purple-400 h-16 my-1 justify-center items-center text-xl rounded-lg">
            02
          </div>
          <div className="flex bg-purple-600 h-16 my-1 justify-center items-center text-xl rounded-lg">
            03
          </div>
        </div>
      </div>
    </div>
  );
}

export default Columns;
