import Link from "next/link";
import React from "react";

function Flex() {
  return (
    <div>
      <header className="sticky z-50 flex flex-row items-center bg-gray-300 top-0 p-4 space-x-8">
        <Link href={"/"}>
          <span className="text-sky-800">Home Page</span>
        </Link>

        <div className="flex flex-1 text-2xl justify-center items-center">
          <span>Flex Box</span>
        </div>
      </header>
      <div className="container mt-8 mx-auto h-full w-full">
        <div className="grid grid-cols-3 gap-4">
          <Link
            href={"/flex/rows"}
            className="bg-sky-800 text-white h-12 flex items-center justify-center"
          >
            <span>Flex Box Rows</span>
          </Link>
          <Link
            href={"/flex/columns"}
            className="bg-sky-800 text-white h-12 flex items-center justify-center"
          >
            <span>Flex Box Columns</span>
          </Link>
          <Link
            href={"/flex/wrap"}
            className="bg-sky-800 text-white h-12 flex items-center justify-center"
          >
            <span>Flex Box Wrap</span>
          </Link>
          <Link
            href={"/flex/grow"}
            className="bg-sky-800 text-white h-12 flex items-center justify-center"
          >
            <span>Flex Box Grow&Shrink</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Flex;
