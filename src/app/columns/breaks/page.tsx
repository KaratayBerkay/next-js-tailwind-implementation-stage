import Link from "next/link";
import React from "react";

function BreakAfter() {
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
          <span>Columns Breaks After / Before / Inside </span>
        </div>
      </header>
      <div className="flex items-center justify-center mt-8">
        <h1>Break Before Column</h1>
      </div>
      <div className="columns-2 mt-8 mx-8 bg-purple-500 rounded-xl p-4 shadow-lg">
        <p>Well, let me tell you something, ...</p>
        <p className="break-before-column">Sure, go ahead, laugh...</p>
        <p>Maybe we can live without...</p>
        <p>Look. If you think this is...</p>
      </div>
      <div className="flex items-center justify-center mt-8">
        <h1>Break After Column</h1>
      </div>
      <div className="columns-2 mt-8 mx-8 bg-purple-500 rounded-xl p-4 shadow-lg">
        <p>Well, let me tell you something, ...</p>
        <p className="break-after-column">Sure, go ahead, laugh...</p>
        <p>Maybe we can live without...</p>
        <p>Look. If you think this is...</p>
      </div>
      <div className="flex items-center justify-center mt-8">
        <h1>Break Inside Column</h1>
      </div>
      <div className="columns-2 mt-8 mx-8 bg-purple-500 rounded-xl p-4 shadow-lg">
        <p className="break-after-column">
          Well, let me tell you something, ...
        </p>
        <p className="break-inside-avoid-column">Sure, go ahead, laugh...</p>
        <p>Maybe we can live without...</p>
        <p>Look. If you think this is...</p>
      </div>
    </div>
  );
}

export default BreakAfter;
