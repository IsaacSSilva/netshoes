'use client'

import { ShoppingCart } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger
} from '@/components/ui/hover-card'

import { TableDemo } from './table_teste'
import item from '../apiFakeForItem.json'
import { Button } from '../ui/button'

export const ShoppingcartMode = () => {
  let contItem = item.Item.length

  return (
    <HoverCard>
      <Sheet>
        <SheetTrigger className='fixed top-0 right-0 h-fit mx-5 my-2.5 w-fit select-none'>
          <HoverCardTrigger>
            <ShoppingCart className='size-7 mt-2 mr-2' />
          </HoverCardTrigger>

          {contItem >= 1 ? (
            <div className='size-4 min-w-5 w-fit px-1 flex justify-center items-center z-10 bg-red-600 text-xs font-black relative -top-[30px] left-3 rounded-full shadow-sm shadow-black/45 ml-[1.5px] text-white'>
              {contItem}
            </div>
          ) : (
            ''
          )}
        </SheetTrigger>
        <SheetContent className='h-screen overflow-hidden overflow-y-scroll flex flex-col px-2.5 pt-5 justify-between'>
          <SheetHeader>
            <SheetTitle>You {contItem} item and car</SheetTitle>
            <SheetDescription className='overflow-y-hidden'>
              <TableDemo />
            </SheetDescription>
          </SheetHeader>
          <div className='md:w-[340px] w-[65%] fixed bottom-0 bg-white m-auto flex flex-col justify-between items-center'>
            <div className='w-full py-2.5 flex justify-between select-none'>
              <div>Total:</div>
              <div>R$ 999</div>
            </div>
            <div className='w-full py-2 flex justify-between '>
              <Button
                variant='ghost'
                className='w-fit p-0 md:text-base text-xs md:font-normal font-semibold'
              >
                + Detalhes
              </Button>
              <Button className='md:font-black font-bold font-inter w-fit md:text-base text-sm'>
                Finalizar
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>

      <HoverCardContent className=' w-full h-[650px] overflow-hidden'>
        <div className='w-[350px] max-h-[500px] overflow-y-scroll'>
          <TableDemo />
        </div>

        <div className='w-full py-5 px-2 flex justify-between items-center '>
          <div>Total</div>
          <div>R$ 999</div>
        </div>
        <div className='flex p-2 justify-between items-center'>
          <Button variant='ghost'>Mais Detalhes</Button>
          <Button className='font-bold font-inter'>Finalizar</Button>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}
