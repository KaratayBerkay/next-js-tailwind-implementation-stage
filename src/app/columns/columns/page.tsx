import Link from "next/link";
import React from "react";

function page() {
  return (
    <div>
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
            <span>Columns</span>
          </div>
        </header>
        <div className="flex mx-auto justify-center items-center h-screen w-full">
          <div className="columns-3">
            <img
              className="aspect-3/2 object-cover"
              src="/tropical-bird.jpg"
              alt="Aspect ratio of 3:2"
            />
            <h1>Aspect ratio of 3:2</h1>
            <img
              className="aspect-video object-cover"
              src="/tropical-bird.jpg"
              alt="Aspect ratio of 16:9"
            />
            <h1>Aspect ratio of 16:9</h1>
            <img
              className="aspect-square object-cover"
              src="/tropical-bird.jpg"
              alt="Aspect ratio of 1:1"
            />
            <h1>Aspect ratio of 1:1</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
