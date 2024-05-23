'use client'

import Link from "next/link"
import Image from "next/image"
import { CustomButton } from "."

export default function Navbar() {

  const onHandleClick = () => {

  }
  return (
    <header className="w-full absolute z-10">
        <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
            <Link href="/" className="justify-center flex items-center">
                <Image src="/logo.svg" alt="logo" width="118" height="18" className="object-contain"/>
            </Link>

            <CustomButton
                title="Sign in"
                btnType="button"
                containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"
                handleClick={onHandleClick}
            />
        </nav>
    </header>
  )
}
