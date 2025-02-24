import Link from "next/link";
import React from "react";

function Boxs() {
  return (
    <div>
      <header className="sticky z-50 flex flex-row items-center bg-gray-300 top-0 p-4 space-x-8">
        <Link href={"/"}>
          <span className="text-sky-800">Home Page</span>
        </Link>
        <span>{"<"}</span>
        <Link href={"/columns"}>
          <span className="text-sky-800">Columns</span>
        </Link>
        <div className="flex flex-1 text-2xl justify-center items-center">
          <span>Box Decoration</span>
        </div>
      </header>

      <div className="box-content size-520 border-4 m-8 p-4">
        <div className="flex items-center justify-center mt-8 mb-10">
          <div>
            <span className="box-decoration-clone my-5 text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-white">
              Tailwind
              <br />
              Box Decoration
              <br />
              Clone
            </span>
            <div className="my-10" />
            <span className="box-decoration-slice my-5 text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-white">
              Tailwind
              <br />
              Box Decoration
              <br />
              Slice
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Boxs;
