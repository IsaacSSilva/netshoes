import { ReactNode } from 'react'

interface ICard {
  title: string
  valor: string
  children: ReactNode
}

export const CardBaseStore = ({ title, valor, children }: ICard) => {
  return (
    <div className='w-64 h-fit border border-zinc-900/50 overflow-hidden rounded-md'>
      {children}

      <div className='px-2.5 py-1 flex flex-col justify-around '>
        <p className='text-nowrap overflow-hidden text-xl font-extralight font-inter capitalize'>
          {title}
        </p>
        <div className='flex w-full justify-between text-sm font-roboto_mono font-thin ml-1'>
          R${valor}
          <img
            src='./furugi.png'
            alt=''
            className='size-10 absolute -translate-y-6 translate-x-48 opacity-80 '
          />
        </div>
      </div>
    </div>
  )
}
