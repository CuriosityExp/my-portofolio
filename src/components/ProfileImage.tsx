import React from 'react'
import Image from "next/image"
export default function ProfileImage() {
  return (
    <div className='w-full bg-neutral rounded-tr-3xl rounded-tl-3xl rounded-br-xl rounded-bl-xl p-10 '>
        <Image src={"/danielelisandro.png"} alt="Daniel Elisandro" width={700} height={700}/>
    </div>
  )
}
