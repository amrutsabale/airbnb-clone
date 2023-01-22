import Image from "next/image";
import React from "react";
import { ExploreDataItem } from "../pages";

const SmallCard = ({ img, location, distance }: ExploreDataItem) => {
  return (
    <div className="flex items-center m-2 mt-5 space-x-4 rounded-xl  cursor-pointer hover:bg-gray-100 hover:scale-105 transition duration-200 ease-out">
      <div className="relative h-16 w-16">
        <Image
          src={img}
          alt="location"
          className="rounded-lg"
          style={{ objectFit: "contain" }}
          fill
        />
      </div>
      <div>
        <h2>{location}</h2>
        <h3 className="text-gray-500">{distance}</h3>
      </div>
    </div>
  );
};

export default SmallCard;
