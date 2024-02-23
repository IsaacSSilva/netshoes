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
import item from '../../components/apiFakeForItem.json'
import { Button } from '../ui/button'

export const ShoppingcartMode = () => {
  let contItem = item.Item.length

  return (
    <HoverCard>
      <Sheet>
        <SheetTrigger className='fixed top-0 right-0 h-fit mx-5 my-2.5 w-fit '>
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
        <SheetContent className='h-full flex flex-col flex-1 justify-between'>
          <SheetHeader>
            <SheetTitle>You {contItem} item and car</SheetTitle>
            <SheetDescription>
              <TableDemo />
            </SheetDescription>
          </SheetHeader>
          <div>
            <div className='w-full py-5 flex justify-between items-center '>
              <div>Total</div>
              <div>R$ 999</div>
            </div>
            <div className='flex justify-between'>
              <Button variant='ghost'>Mais Detalhes</Button>
              <Button className='font-bold font-inter'>Finalizar</Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>

      <HoverCardContent className='w-[350px] max-h-[500px] overflow-hidden overflow-y-scroll'>
        <TableDemo />
      </HoverCardContent>
    </HoverCard>
  )
}
