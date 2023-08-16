"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
export default function BottomTab() {
    const router = usePathname()
  return (
    <div className='self-end bg-secondary h-12 w-full absolute bottom-0 '>
        <div className='flex h-full justify-around items-center font-bold'>
        <Link className={router === "/portfolio"? "underline underline-offset-4":""} href={"/portfolio"}>Portfolio</Link>
        <Link className={router === "/about"? "underline underline-offset-4":""} href={"/about"}>About</Link>
        <Link className={router === "/blog"? "underline underline-offset-4":""} href={"/blog"}>Blog</Link>
        </div>
    </div>
  )
}
