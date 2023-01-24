import Image from "next/image";
import React from "react";
import { HeartIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";

type InfoCardProps = {
  description: string;
  img: string;
  lat: number;
  location: string;
  long: number;
  price: string;
  star: number;
  title: string;
  total: string;
};

export const InfoCard = ({
  img,
  location,
  description,
  lat,
  long,
  price,
  total,
  title,
  star,
}: InfoCardProps) => {
  return (
    // TODO: fix first:border-t is not working
    <div className="flex py-7 px-2 pr-4 border-b cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-200 ease-out first:border-t">
      <div className="relative h-72 w-40  md:h-52 md:w-80 flex-shrink-0">
        <Image
          src={img}
          alt={"location"}
          style={{ objectFit: "cover" }}
          className="rounded-2xl"
          fill
        />
      </div>
      <div className="flex flex-col flex-grow pl-5">
        <div className="flex justify-between">
          <p>{location}</p>
          <HeartIcon className="h-7 cursor-pointer" />
        </div>
        <h4 className="text-xl"> {title}</h4>
        <div className="border-b w-10 pt-2" />
        <p className="pt-2 text-sm text-gray-500 flex-grow">{description}</p>
        <div className="flex justify-between items-end pt-5">
          <p className="flex item-center">
            <StarIcon className="h-5 text-red-400" />
            {star}
          </p>
          <div>
            <p className="text-lg lg:text-2xl font-semibold pb-2">{price}</p>
            <p className="text-right font-extralight">{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
