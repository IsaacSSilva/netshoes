import { ReactNode } from 'react'

interface ICard {
  title: string
  valor: string
  children: ReactNode
}

export const CardBaseStore = ({ title, valor, children }: ICard) => {
  return (
    <div
      key={title}
      className='w-64 h-[444px] border border-zinc-900/50 overflow-hidden rounded-md'
    >
      {children}

      <div className='px-2 py-1 flex flex-col justify-around gap-1'>
        <p className='text-nowrap overflow-hidden text-xl font-thin font-inter capitalize'>
          {title}
        </p>
        <div className='text-sm font-mono font-thin ml-1'>R${valor}</div>
      </div>
    </div>
  )
}
