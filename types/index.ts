import { Dispatch, MouseEventHandler, SetStateAction } from "react";

export interface CustomButtonProps {
  text: string;
  btnType?: "button" | "submit";
  containerStyles?: string;
  textStyles?: string;
  rightIcon?: string;
  isDisabled?: boolean;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

interface GenricValues {
  title: string;
  value: string;
}

export interface CustomFilterProps {
  title: string;
  options: GenricValues[];
  setFilter:
    | Dispatch<SetStateAction<string>>
    | Dispatch<SetStateAction<number>>;
}

export interface SearchManufacturerProps {
  selected: string;
  setSelected: Dispatch<SetStateAction<string>>;
}

export interface CarProps {
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

export interface FilterProps {
  manufacturer: string;
  model: string;
  year: number;
  fuel: string;
  limit: number;
}

export interface ShowMoreProps {
  pageNumber: number;
  isNext: boolean;
  setLimit: (limit: number) => void;
}

export interface SearchBarProps {
  setManufacturer: Dispatch<SetStateAction<string>>;
  setModel: Dispatch<SetStateAction<string>>;
}
