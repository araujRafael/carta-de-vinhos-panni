import React, { HTMLAttributes, useRef } from 'react'
// Swiper - carrousel lib
import { Swiper, SwiperSlide, SwiperProps, SwiperRef } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import SwiperButtons from '../Organisms/SwiperButtons';
import Button from '../Atom/Button';


interface SwiperComponentProps<T> {
  settings?: SwiperProps
  data: T[] | null
  renderItems(item: T, index: number): React.ReactNode
  children: (swiperRef: any) => React.ReactNode
  className?: string
}

export default function SwiperComponent<T extends unknown>({
  data,
  renderItems, children,
  settings, className, ...rest
}: SwiperComponentProps<T>) {
  const swiperRef = useRef<any | null>(null)

  // Render ***************************************************************
  return (
    <>
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        className={`w-full  
        !min-h-min h-min rounded-md`}
        spaceBetween={5}
        slidesPerView={1}
        {...settings}
        allowTouchMove={false}
      >
        {
          data?.map((item, index) => (
            <SwiperSlide key={index}>
              {renderItems(item, index)}
            </SwiperSlide>
          ))
        }
      </Swiper>
      {children(swiperRef)}

    </>
  )
}
