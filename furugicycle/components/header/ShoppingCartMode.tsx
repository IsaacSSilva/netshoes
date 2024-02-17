'use client'

import { ShoppingCart, X } from 'lucide-react'
import { useState } from 'react'

export const ShoppingcartMode = () => {
  const [closeModalForShoppingCart, setCloseModalForShoppingCart] =
    useState(true)

  let contItem = 3

  return (
    <div className='flex overflow-hidden'>
      <div
        className='px-5 py-2.5 w-fit h-fit'
        onClick={() => setCloseModalForShoppingCart(!closeModalForShoppingCart)}
      >
        <ShoppingCart className='size-7 mt-2 mr-2' />

        {contItem >= 1 ? (
          <div className='size-5 min-w-5 w-fit px-1 flex justify-center items-center -z-10 bg-red-600 text-xs font-black relative -top-9 left-5 rounded-full shadow-sm shadow-black/45 ml-[1.5px] text-white'>
            {contItem}
          </div>
        ) : (
          ''
        )}
      </div>

      {/* {closeModalForShoppingCart ? null : (
        
      )} */}

      <div
        aria-checked={closeModalForShoppingCart}
        className='w-96 h-screen px-5 p-2.5 flex absolute translate-x-full z-50 drop-shadow-md shadow-black bg-emerald-500 flex-col gap-5 aria-checked:-translate-x-[80%]'
      >
        <div className='h-11'>
          <X
            className='size-5 '
            onClick={() =>
              setCloseModalForShoppingCart(!closeModalForShoppingCart)
            }
          />
        </div>
        <div className='flex-1'>list</div>
        <div className='h-32'>final</div>
      </div>

      {/* -translate-x-[305px] */}
    </div>
  )
}
