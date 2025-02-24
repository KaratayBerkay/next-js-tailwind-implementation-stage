import Image from "next/image";
import Link from "next/link";
import React from "react";

function ColumnPage() {
  return (
    <>
      <header className="sticky z-50 flex flex-row items-center bg-gray-300 top-0 p-4 space-x-8">
        <Link href={"/"}>
          <span className="text-sky-800">Home Page</span>
        </Link>
        <div className="flex flex-1 text-2xl justify-center items-center">
          <span>Ascpect</span>
        </div>
      </header>
      <div className="container mt-8 mx-auto h-full w-full">
        <div className="grid grid-cols-3 gap-4">
          <Link
            href={"/columns/columns"}
            className="bg-sky-800 text-white h-12 flex items-center justify-center"
          >
            <span>Columns</span>
          </Link>
          <Link
            href={"/columns/breaks"}
            className="bg-sky-800 text-white h-12 flex items-center justify-center"
          >
            <span>Columns Breaks</span>
          </Link>
          <Link
            href={"/columns/boxs"}
            className="bg-sky-800 text-white h-12 flex items-center justify-center"
          >
            <span>Columns Boxs</span>
          </Link>
        </div>
      </div>
    </>
  );
}

export default ColumnPage;
