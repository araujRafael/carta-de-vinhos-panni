'use client'
import React, { useEffect } from 'react'

export default function DebuggerClient({ data }: { data: any }) {

  useEffect(() => {
    console.log(data);
  }, [data])

  return (
    <div>
      test
    </div>
  )
}
