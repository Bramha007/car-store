"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { ShowMoreProps } from "@types";
import CustomButton from "./CustomButton";
import { updateSearchParams } from "@utils";

function ShowMore({ pageNumber, isNext, setLimit }: ShowMoreProps) {
  const router = useRouter();
  const handleNavigation = () => {
    // Calculate the new limit based on the page number and navigation type
    const newLimit = (pageNumber + 1) * 10;

    // Update the "limit" search parameter in the URL with the new value
    setLimit(newLimit);

    // router.push(newPathname);
  };
  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!isNext && (
        <CustomButton
          btnType="button"
          text="Show More"
          containerStyles="bg-primary-blue rounded-full text-white"
          handleClick={handleNavigation}
        />
      )}
    </div>
  );
}

export default ShowMore;
