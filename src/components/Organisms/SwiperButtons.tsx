'use client'
import React, { Attributes, RefObject } from 'react'
import Button from '../Atom/Button'
import { BiDislike, BiLike } from 'react-icons/bi'
import { useLikeContext } from '@/contexts/LikeContext'
import { SwiperRef } from 'swiper/react'
import Swiper from 'swiper'

export default function SwiperButtons({ lengthData, swiperRef }: {
  lengthData: number
  , swiperRef: RefObject<Swiper>
}) {
  const { handleGenerateSaldo } = useLikeContext()

  return (
    <div className={` 
        w-full min-h-[115px] h-[115px]
        flex flex-col gap-6
      `}>
      <div className={`py-2 w-full flex justify-evenly gap-2`}>
        <button
          className={`!bg-error text-fore-contrast
            rounded-full p-5 active:scale-95
          `}
          onClick={() => {
            if (!swiperRef.current!.isEnd) {
              handleGenerateSaldo(1, 5)
              swiperRef.current?.slideNext()
            }
          }}
        >
          <BiDislike size={40} />
        </button>
        <button
          className={`!bg-success text-fore-contrast
            rounded-full p-5 active:scale-95
          `}
          onClick={() => {
            if (!swiperRef.current!.isEnd) {
              handleGenerateSaldo(25, 150)
              swiperRef.current?.slideNext()
            }
            // aumentar saldo
          }}
        >
          <BiLike size={40} />
        </button>
      </div>
      <Button
        title='sacar dinheiro'
        className={`bg-warn text-fore-main text-2xl
          active:scale-95
        `}
      />
    </div>
  )
}
