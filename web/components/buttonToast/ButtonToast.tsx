'use client'

import { Button } from '@/components/ui/button'
import { ToastAction } from '@/components/ui/toast'
import { useToast } from '@/components/ui/use-toast'
import { Plus } from 'lucide-react'
import { Toaster } from '../ui/toaster'

export const ButtonToast = () => {
  const { toast } = useToast()

  return (
    <>
      <Button
        className='capitalize w-10 bg-rose-600 hover:bg-rose-600/80 transition-colors shadow-md shadow-black/30 duration-300 p-0'
        variant={'outline'}
        onClick={() => {
          toast({
            title: 'Scheduled: Catch up ',
            description: 'Friday, February 10, 2023 at 5:57 PM',
            action: (
              <ToastAction altText='Goto schedule to undo'>
                Desfazer
              </ToastAction>
            )
          })
        }}
      >
        <Plus className='size-5 m-auto text-white' />
      </Button>
      <Toaster />
    </>
  )
}
