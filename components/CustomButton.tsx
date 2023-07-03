"use client";
import { CustomButtonProps } from "@/types";
import Image from "next/image";
import React from "react";

const CustomButton = ({
    title,
    buttonStyle,
    handleClick,
    btnType,
    textStyle,
    rightIcon,
    isDisabled,
}: CustomButtonProps) => {
    return (
        <button
            disabled={false}
            type={btnType || "button"}
            className={`custom-btn ${buttonStyle}`}
            onClick={handleClick}
        >
            <div className={`flex-1 ${textStyle}`}>{title}</div>
            {
                rightIcon && (
                    <div className="relative">
                        <Image 
                        src={rightIcon}
                        height={25}
                        width={25}
                        alt="icon"
                        // fill
                        className="object-contain"
                        />
                    </div>
                )
            }
        </button>
    );
};

export default CustomButton;
