import Link from "next/link";
import React from "react";

function FlexBasics() {
  return (
    <>
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
            <span>Flex Box Row&Basics</span>
          </div>
        </header>
        <div>
          <div className="flex items-center justify-center mt-2 mb-10">
            <span className="my-7">Tailwind css basis is 100% up most.</span>
          </div>
          <div className="flex flex-row w-full h-24 bg-gray-400 rounded-lg p-4 gap-3">
            <div className="bg-purple-100 basis-12 border shadow-lg border-black">
              01
            </div>
            <div className="bg-purple-200 basis-24 border shadow-lg border-black">
              02
            </div>
            <div className="bg-purple-300 basis-64 border shadow-lg border-black">
              03
            </div>
            <div className="bg-purple-400 basis-64 border shadow-lg border-black">
              04
            </div>
          </div>
          <div className="flex items-center justify-center mt-2 mb-10 mr-3">
            <span className="my-7">
              To Use custom basis-[3xs, 2xs, xs] add module.exports =
            </span>
            <span>
              {JSON.stringify(
                (module.exports = {
                  theme: {
                    extend: {
                      flexBasis: {
                        "3xs": "10rem", // 160px
                        "2xs": "12rem", // 192px
                        xs: "16rem", // 256px
                      },
                    },
                  },
                }),
                null,
                2
              )}
            </span>
          </div>
          <div className="container mx-auto my-4">
            <div className="flex flex-row w-full h-24 bg-gray-400 rounded-lg p-4 gap-3">
              <div className="bg-purple-100 basis-3xs border shadow-lg border-black">
                01
              </div>
              <div className="bg-purple-200 basis-2xs border shadow-lg border-black">
                02
              </div>
              <div className="bg-purple-300 basis-xs border shadow-lg border-black">
                03
              </div>
              <div className="bg-purple-300 basis-sm border shadow-lg border-black">
                04
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FlexBasics;
