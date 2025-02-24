import Link from "next/link";
import React from "react";

function Home() {
  return (
    <div className="mt-8 container mx-auto h-full w-full">
      <div className="grid grid-cols-3 gap-4">
        <Link
          href={"/aspect"}
          className="bg-sky-800 text-white h-12 flex items-center justify-center"
        >
          <span>Aspect</span>
        </Link>
        <Link
          href={"/columns"}
          className="bg-sky-800 text-white h-12 flex items-center justify-center"
        >
          <span>Columns</span>
        </Link>
        <Link
          href={"/flex"}
          className="bg-sky-800 text-white h-12 flex items-center justify-center"
        >
          <span>Flex</span>
        </Link>
        <Link
          href={"/aspect"}
          className="bg-sky-800 text-white h-12 flex items-center justify-center"
        >
          <span>Grid</span>
        </Link>
        <Link
          href={"/aspect"}
          className="bg-sky-800 text-white h-12 flex items-center justify-center"
        >
          <span>Typography</span>
        </Link>
        <Link
          href={"/aspect"}
          className="bg-sky-800 text-white h-12 flex items-center justify-center"
        >
          <span>Borders</span>
        </Link>
        <Link
          href={"/aspect"}
          className="bg-sky-800 text-white h-12 flex items-center justify-center"
        >
          <span>Transition</span>
        </Link>
        <Link
          href={"/aspect"}
          className="bg-sky-800 text-white h-12 flex items-center justify-center"
        >
          <span>Interactivity</span>
        </Link>
        <Link
          href={"/aspect"}
          className="bg-sky-800 text-white h-12 flex items-center justify-center"
        >
          <span>Scrolling</span>
        </Link>
      </div>
    </div>
  );
}

export default Home;
