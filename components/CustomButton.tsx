"use client"

import Image from 'next/image';
import { CustomButtonProps } from '@/types';

const CustomButton = ({title, containerStyles, handleClick, btnType, rightIcon}: CustomButtonProps) => {
  return (
    <button
        disabled={false}
        type={btnType || 'button'}
        className={`custom-btn ${containerStyles}`}
        onClick={handleClick}
    >
        <span className="flex-1">
            {title}
        </span>
        {rightIcon && (
          <div className="ralative w-4 h-4">
            <Image src={rightIcon} alt="icon" width="20" height="20" />
          </div>
        )}
    </button>
  )
}

export default CustomButton