'use client'
import Image from 'next/image'
import React, { HTMLAttributes } from 'react'
import { BiDotsHorizontalRounded } from 'react-icons/bi'
import { useRouter } from 'next/navigation'
import { VinhosField } from '@/@types/fields-airtable'


interface CardProps {
  data: VinhosField
  created: string
  id: string
}

const Card: React.FC<CardProps> = ({ id, created, data: {
  "cor vinho": cor, "em estoque": estoque, codigo,
  desconto, descrição, imagem, nome, origem, preço, uva,
} }) => {
  const { push } = useRouter()

  return (
    <div className={`
      w-full min-h-[100px] max-h-[100px] h-[100px]
      flex flex-row
    `}>
      {imagem?.[0].thumbnails.large.url ? <Image
        src={imagem?.[0].thumbnails.large.url || '/images/logo.png'}
        alt={nome}
        width={100}
        height={100}
        className='h-full min-w-[100px] w-[100px] object-cover'
      /> : <div className={`w-[100px] min-w-[100px] h-full
        flex flex-col justify-center items-center
        border-r border-spacing-1
      `}>
        <p className={`whitespace-nowrap text-2xl`}>
          {codigo}
        </p>
      </div>}
      <div className={`
        ml-4 w-full flex flex-col justify-between
      `}>
        <h1 className={`text-lg font-bold`}>
          {nome}
        </h1>
        <div className={`w-full !max-h-min !h-min flex 
        justify-between items-center`}>
          <span className={`font-bold`}>
            R$ {preço.toFixed(2)}
          </span>
          <span className='mx-1 cursor-pointer'
            onClick={() => push(`/vino/${id}`)}
          >
            <BiDotsHorizontalRounded size={35} />
          </span>
        </div>
      </div>
    </div>
  )
}
export default Card