"use client"

import { useState } from 'react'
import Image from 'next/image'
import { CustomButton } from '.'
import { CarCardProps } from '@/types';
import { calculateRentPrice } from '@/utils';
import {CarDetails} from '.';

export default function CarCard({ car }: CarCardProps) {
    const [isOpen, setIsOpen] = useState(false);
    const { city_mpg, drive, model, transmission, make } = car;
    const carRent = calculateRentPrice(car);

    return (
        <div className='car-card group'>
            <div className='car-card__content'>
                <h2 className="car-card__content-title">{make} {model}</h2>
            </div>
            <p className='font-extrabold flex mt-6 text-[32px]'>
                <span className='self-start font-semibold text-[14px]'>$</span>
                {carRent}
                <span className='self-end font-medium text-[14px]'>/ day</span>
            </p>

            <div className="relative w-full h-40 my-3 object-contan">
                <Image src="/hero.png" className='object-contain' fill priority alt={car.model} />
            </div>

            <div className="relative w-full flex mt-2">
                <div className="flex group-hover:invisible w-full text-gray justify-between">
                    <div className="flex flex-col justify-center gap-2 items-center">
                        <Image src="/steering-wheel.svg" width="20" height="20" alt="steering wheel" /> 
                        <p className="text-[14px]">{transmission === 'a' ? 'Automatic' : 'Manual'}</p>
                    </div>
                    <div className="flex flex-col justify-center gap-2 items-center">
                        <Image src="/tire.svg" width="20" height="20" alt="tire" /> 
                        <p className="text-[14px]">{drive.toUpperCase()}</p>
                    </div>
                    <div className="flex flex-col justify-center gap-2 items-center">
                        <Image src="/gas.svg" width="20" height="20" alt="gas" /> 
                        <p className="text-[14px]">{city_mpg} MPG</p>
                    </div>
                </div>

                <div className="car-card__btn-container">
                    <CustomButton 
                        title="View more"
                        containerStyles='w-full py-[16px] rounded-full bg-primary-blue text-white text-[14px] leading-[17px] font-bold'
                        handleClick={() => setIsOpen(true)}
                        rightIcon="/right-arrow.svg"
                    />
                </div>
            </div>

            <CarDetails isOpen={isOpen} car={car} closeModal={() => setIsOpen(false)} />
        </div>
    )
}
