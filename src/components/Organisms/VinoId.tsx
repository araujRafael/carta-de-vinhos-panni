'use client'

import Image from 'next/image'
import { useParams, useRouter } from 'next/navigation'
import React from 'react'
import { BiArrowBack } from 'react-icons/bi'

export default function VinoId() {
  const { id } = useParams()
  const { back } = useRouter()

  return (
    <>
      <Image
        src={'/images/vino/almaden-vela.jpg'}
        alt={'almaden'}
        width={100}
        height={100}
        className='max-h-[300px] w-full object-cover'
      />
      <div className={`w-full flex`}>
        <div
          onClick={() => back()}
          className={`min-h-full flex justify-center items-center mr-4`}>
          <BiArrowBack size={20} />
        </div>
        <div>
          <h1 className={`text-2xl`}>
            Almaden Tinto Cabernet Sauvignon seco
          </h1>
          <p className={`text-sm`}>
            Origem: Passo da Cruz, SantAna do Livramento - RS
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione cupiditate eligendi, earum dolor ea est aperiam eos adipisci placeat, quisquam corrupti vero tempora fugit enim, asperiores quo saepe cum neque.
          </p>
        </div>
      </div>
    </>
  )
}
