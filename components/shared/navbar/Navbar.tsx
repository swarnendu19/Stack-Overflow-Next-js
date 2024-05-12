import { SignedIn, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex-between bg-light-900 dark:bg-dark-200
    fixed z-50 w-full gap-5 p-6 shadow-light-300 dark:shadow-none
    sm:px-12'>
    <Link href="/" className='flex items-center gap-1'>
        <Image
        src="/assets/images/site-logo.svg"
        width={23}
        height={23}
        alt='Devflow'
        />
        <p className='h2-bold font-spaceGrptesk text-dark-100 dark:text-light-900
        max-sm:hidden'>
            Dev<span className='text-primary-500'>
                Overflow
            </span>
        </p>
    </Link>

    GlobalSearch

    <div className='flex-between gap-5'>
     Theme
    <SignedIn>
        <UserButton 
        afterSignOutUrl='/'
        appearance={{
            elements: {
                avatarBox: "h-10 w-full "
            },
            variables: {
                colorPrimary: "#ff7000"
            }
        }}/>
    </SignedIn>
    </div>
      
    </nav>
  )
}

export default Navbar