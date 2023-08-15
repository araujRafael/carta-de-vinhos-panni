import React from 'react'
import { Container } from '@/components/Atom/Container'
import { Metadata, MetadataRoute } from 'next'
import VinoId from '@/components/Organisms/VinoId'
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher'

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
