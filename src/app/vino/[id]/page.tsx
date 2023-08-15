import React from 'react'
import { Container } from '@/components/Atom/Container'
import VinoId from '@/components/Organisms/VinoId'

type metaProps = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata({ params, searchParams }: metaProps) {

  return {
    title: params.id,
    description: ''
  }
}

export default function VinoIdPage() {


  // render ***************************************************************
  return (
    <div className={`w-full h-full !p-0`} >
      <Container className={`flex flex-col gap-2`}>
        <VinoId />
      </Container>
    </div>
  )
}
