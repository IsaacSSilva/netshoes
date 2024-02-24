import { ReactNode } from 'react'

interface Iwindow {
  children: ReactNode
}

export const Window = ({ children }: Iwindow) => {
  return (
    <section className='max-w-[1800px] md:px-10 px-2.5 mt-5 mb-10 h-full m-auto flex flex-wrap justify-center items-start gap-8'>
      {children}
    </section>
  )
}
