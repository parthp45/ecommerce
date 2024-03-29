"use client";

import { quicksand, raleway } from "@/common/fonts";
import { getAllProducts } from "@/utils/getAllProducts";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const data = getAllProducts();
  return (
    <main className={"m-4"}>
      <div>
        <h1
          className={`text-center text-4xl font-semibold m-4 ${raleway.className}`}
        >
          Trending
        </h1>
        <div className={`flex gap-4 justify-center flex-wrap`}>
          {data.map((item) => (
            <Link
              key={item.id}
              href={`/${item.id}`}
              className="transition-all hover:scale-105"
            >
              <div
                className={`w-[350px] rounded-lg p-3 flex flex-col items-center bg-gray-200 dark:bg-[#1b1b1b]`}
              >
                <div
                  className={`w-[350px] h-[300px] grid place-content-center`}
                >
                  <Image
                    src={item.imgSrc}
                    alt={item.name}
                    width={300}
                    height={300}
                    priority
                  />
                </div>
                <div
                  className={`flex justify-between flex-wrap
                 ml-auto mr-auto w-[80%] py-[4px] px-4 rounded-full items-center bg-blue-600 text-white`}
                >
                  <h4 className={`${quicksand.className} font-semibold`}>
                    {item.name}
                  </h4>
                  <h5
                    className={`py-[4px] rounded-full  ${quicksand.className} font-semibold`}
                  >
                    {item.price}&nbsp;₹
                  </h5>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
