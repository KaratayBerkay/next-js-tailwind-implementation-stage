import Image from "next/image";
import Link from "next/link";
import React from "react";

function AspectRatio() {
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
      <div className="flex w-screen h-screen flex-col items-center justify-center space-y-4">
        <h1 className="text-4xl text-red-900">Aspect Ratio</h1>
        <Image
          className="aspect-3/2 object-cover"
          src="/tropical-bird.jpg"
          alt="Picture of the author"
          width={500}
          height={500}
        />
        <a
          className="underline text-sky-500 hover:text-sky-950"
          href="https://www.freeimages.com/photo/tropical-bird-1390996"
        >
          See other pictures of Cholin
        </a>
      </div>
    </>
  );
}

export default AspectRatio;
