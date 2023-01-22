import Image from "next/image";
import React from "react";
import { MediumCardsItem } from "../pages";

const MediumCard = ({ img, title }: MediumCardsItem) => {
  return (
    <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
      <div className="relative h-80 w-80">
        <Image src={img} alt="location" className="rounded-xl" fill />
      </div>
      <h3 className="text-2xl mt-3">{title}</h3>
    </div>
  );
};

export default MediumCard;
