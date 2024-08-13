'use client'

import { ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'

export const NextRouterButton = () => {
  const router = useRouter()

  return (
    <div className='md:relative absolute md:-left-[25%] left-2.5 top-[30%] md:-top-5 flex gap-2.5 justify-center items-end text-center bg-opacity-60 select-none'>
      <Button onClick={() => router.push('/')} className='py-1 px-2'>
        <ArrowLeft className='size-5' />
        volta
      </Button>
    </div>
  )
}
