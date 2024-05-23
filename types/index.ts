import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    btnType?: 'button' | 'submit';
    handleClick: MouseEventHandler<HTMLButtonElement>
    rightIcon?: string;
    isDisabled?: boolean;
}

export interface OptionProps {
    title: string;
    value: string;
}

export interface CustomFilterProps {
    title: string;
    payload: OptionProps[];
}

export interface SearchManufacturerProps {
    manufacturer: string;
    setManufacturer: (manufacturer: string) => void
}

export interface ICar {
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

export interface CarCardProps {
    car: ICar;
}

export interface CarDetailsProps {
    car: ICar;
    isOpen: boolean;
    closeModal: () => void;
    image: string;
}

export interface FilterProps {
    manufacturer:string;
    model:string;
    fuel: string;
    year: number;
    limit: number;
}

export interface ShowMoreProps {
    isNext:boolean;
    pageNumber: number
}

