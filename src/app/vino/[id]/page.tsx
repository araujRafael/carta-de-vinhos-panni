import React from 'react'
import { useParams, useRouter } from 'next/navigation'
import Image from 'next/image'
import { Container } from '@/components/Atom/Container'
import { BiArrowBack } from 'react-icons/bi'
import { Metadata } from 'next'
import VinoId from '@/components/Organisms/VinoId'

export const metadata: Metadata = {
  title: 'Almaden Tinto Cabernet Sauvignon seco | Panni',
  description: ''
}

export default function VinoIdPage() {


  // render ***************************************************************
  return (
    <div className={`w-full h-full !p-0`} >
      <Container className={`flex flex-col gap-2`}>
        <VinoId
        />
      </Container>
    </div>
  )
}
