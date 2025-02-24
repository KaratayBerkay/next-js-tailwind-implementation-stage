import Link from "next/link";
import React from "react";

function AspectVideo() {
  return (
    <>
      <header className="sticky z-50 flex flex-row items-center bg-gray-300 top-0 p-4 space-x-8">
        <Link href={"/"}>
          <span className="text-sky-800">Home Page</span>
        </Link>
        <span>{"<"}</span>
        <Link href={"/aspect"}>
          <span className="text-sky-800">Aspect</span>
        </Link>
        <div className="flex flex-1 text-2xl justify-center items-center">
          <span>Aspect Ratio</span>
        </div>
      </header>
      <div className="flex flex-col w-screen h-screen justify-center items-center space-y-4">
        <h1 className="text-4xl text-red-900">Aspect Ratio</h1>
        <iframe
          className="aspect-video" //md:aspect-square
          width={840}
          height={560}
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        ></iframe>
      </div>
    </>
  );
}

export default AspectVideo;
