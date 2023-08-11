'use client'
import Image from 'next/image'
import React from 'react'
import { BiDotsHorizontalRounded } from 'react-icons/bi'
import { useRouter } from 'next/navigation'

export default function Card() {
  const { push } = useRouter()

  return (
    <div className={`
      w-full min-h-[100px] max-h-[100px] h-[100px]
      flex flex-row
    `}>
      <Image
        src={'/images/vino/almaden-vela.jpg'}
        alt={'almaden'}
        width={100}
        height={100}
        className='h-full min-w-[100px] w-[100px] object-cover'
      />
      <div className={`
        ml-2 w-full flex flex-col justify-between
      `}>
        <h1 className={`text-lg font-bold`}>
          Almaden Tinto Cabernet Sauvignon seco
        </h1>
        <div className={`w-full !max-h-min !h-min flex 
        justify-between items-center`}>
          <span className={`font-bold`}>
            R$ 49,90
          </span>
          <span className='mx-1 cursor-pointer'
            onClick={() => push(`/vino/${123}`)}
          >
            <BiDotsHorizontalRounded size={35} />
          </span>
        </div>
      </div>
    </div>
  )
}
