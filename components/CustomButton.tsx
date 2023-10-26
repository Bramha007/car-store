"use client";

import React from "react";
import Image from "next/image";
import { CustomButtonProps } from "@types";

function CustomButton({
  text,
  btnType,
  containerStyles,
  handleClick,
  textStyles,
  rightIcon,
  isDisabled,
}: CustomButtonProps) {
  return (
    <button
      disabled={isDisabled || false}
      className={`custom-btn ${containerStyles}`}
      type={btnType || "button"}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}>{text}</span>
      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image
            src={rightIcon}
            alt="right-icon"
            fill
            className="object-contain"
          />
        </div>
      )}
    </button>
  );
}

export default CustomButton;
