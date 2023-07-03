import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string;
    buttonStyle?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit";
    textStyle?: string;
    rightIcon?: string;
    isDisabled?: boolean;
}

export interface CustomFilterProps {
    title: string;
}

export interface SearchManufactureProps {
    manufacture: string;
    setManufacture: (manufacture: string) => void;
}

export interface CarCardProps {
    city_mpg: number;
    class: string;
    combination_mpg: number;
    cylinders: number;
    displacement: number;
    drive: string;
    fuel_type: string;
    highway_mpg: number;
    make: string;
    model: string;
    transmission: string;
    year: number;
}

export interface CarProps{
    car: CarCardProps;
}

export interface CarDetailsProps {
    isOpen: boolean;
    closeModel: () => void;
    car: CarCardProps;
}