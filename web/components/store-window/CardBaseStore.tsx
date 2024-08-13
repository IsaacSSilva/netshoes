import { ReactNode } from 'react'

interface ICard {
  title: string
  valor: string
  children: ReactNode
}

export const CardBaseStore = ({ title, valor, children }: ICard) => {
  return (
    <div className='md:w-64 w-32 h-fit border border-zinc-900/50 overflow-hidden rounded-md'>
      {children}

      <div className='md:px-2.5 px-1 md:py-1 py-0.5 flex flex-col justify-around '>
        <p className='text-nowrap overflow-hidden md:text-xl text-base font-light font-inter capitalize'>
          {title}
        </p>
        <div className='flex w-full justify-between text-sm font-roboto_mono font-extralight ml-0.5 select-none'>
          R${valor}
          <img
            src='./furugi.png'
            alt=''
            className='size-10 -translate-y-6 translate-x-48 opacity-80 absolute hidden md:block select-none'
          />
          <div className='size-5 border-r border-b border-black/80 -mt-1 mr-1 md:mr-0 rounded-br block md:hidden select-none' />
        </div>
      </div>
    </div>
  )
}
