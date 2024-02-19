import { ShoppingcartMode } from '@/components/header/ShoppingCartMode'
import { NavigationMenuDemo } from '../components/header/Menu'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { pedidoItem } from '../components/apiFakeForItem'
import { Eye } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <main className='w-full h-[70vh] flex flex-col'>
        <header className='w-full flex fixed justify-between'>
          <NavigationMenuDemo />
          <ShoppingcartMode />
        </header>
        <div className='w-full h-[55vh] flex justify-center items-center'>
          <h1 className='text-7xl font-light font-inter'>
            Futugi
            <span className='text-xl align-top font-black text-red-500'>
              古着
            </span>
          </h1>
        </div>
      </main>

      <section className='max-w-[1800px] px-10 h-screen m-auto flex flex-wrap justify-center items-start gap-8'>
        {pedidoItem.map(item => (
          <div
            key={item.itemTitle}
            className='min-w-64 h-[426px]  overflow-hidden rounded-md bg-zinc-50 shadow shadow-black/20'
          >
            <Link href={item.itemImg}>
              <Image
                alt={item.itemTitle}
                src={item.itemImg}
                width={1400}
                height={664}
                className='w-full h-80 bg-cover  bg-no-repeat bg-center'
              />
            </Link>

            <div className='px-2 py-0.5 flex flex-col gap-2.5'>
              <p className='text-nowrap overflow-hidden text-xl font-bold capitalize'>
                {item.itemTitle}
              </p>
              <div className='flex justify-between'>
                <div className='flex gap-2 justify-center items-center'>
                  <Button
                    variant='secondary'
                    className='font-semibold text-white hover:text-rose-700 hover:drop-shadow bg-rose-700 shadow-md shadow-black/35'
                  >
                    Comprar
                  </Button>
                  <Button className='w-fit px-3 hover:bg-zinc-300 hover:text-black shadow shadow-black/20'>
                    <Eye className='size-5' />
                  </Button>
                </div>

                <div className='flex flex-col gap-1 -translate-y-2.5 text-end font-thin'>
                  <div className='text-sm'>R${item.valor}</div>
                  <div className='text-xs'>12x {Number(item.valor) / 12}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  )
}
