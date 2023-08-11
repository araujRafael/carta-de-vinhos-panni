'use client'
import Image from 'next/image'
import React, { useEffect } from 'react'
import Button from '../Atom/Button'
import SwiperComponent from '../Molecules/SwiperComponent'
import { useSwiper } from 'swiper/react';
import SwiperButtons from './SwiperButtons';


export default function CarrouselComponent() {

  return (
    <div className={`w-full min-h-full h-full flex flex-col justify-between`}>
      <SwiperComponent
        data={null}
        renderItems={(item, index) => (
          <Image
            src={`/images/${item}`}
            alt={"prod"}
            width={100}
            height={100}
            className={`w-full min-h-full h-full rounded-md object-cover`}
          />
        )}
        children={
          (swiperRef) => <SwiperButtons lengthData={0} swiperRef={swiperRef} />
        }
      />
    </div>
  )
}
