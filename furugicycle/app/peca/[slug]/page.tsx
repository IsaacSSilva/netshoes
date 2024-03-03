'use client'

import { Button } from '@/components/ui/button'
import item from '../../../components/apiFakeForItem.json'
import { Plus, Siren } from 'lucide-react'
import { NextRouterButton } from '../../../components/NextRoutButtton'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger
} from '@/components/ui/hover-card'

export default function Item({ params }: { params: { slug: string } }) {
  const pedidoItem = item.Item.filter(Item => Item.id === params.slug)
  const Item = pedidoItem[0]

  return (
    <>
      <section className='w-full h-screen'>
        <section className='max-w-[1800px] h-full m-auto flex md:flex-row flex-col gap-5'>
          <section className='md:flex hidden w-1/5 py-10 px-2.5 justify-center md:items-end '>
            <div className='font-inter border border-black p-5 space-y-2 space-x-0.5 rounded'>
              <h3 className='text-lg font-medium'>Sobre</h3>
              <p className='text-sm '>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates, id. Magni odit beatae libero dolores commodi
                pariatur facere officiis, ex in incidunt sequi quibusdam
                quisquam earum. Ea est eligendi excepturi.
              </p>
            </div>
          </section>

          <section className='md:h-full h-[30%] md:mt-0 mt- flex justify-center items-center '>
            <div className='md:w-[600px] w-[500px] md:h-[680px] h-[400px] m-auto bg-cover bg-center overflow-hidden'>
              <img
                src={Item.itemImg}
                alt={Item.itemTitle}
                // className='md:h-[680px] h-[445px]'
              />
              <img
                src={Item.itemImgSecundari}
                alt={Item.itemTitle}
                // className='md:h-[680px] h-[445px]'
              />
            </div>
          </section>

          <section className='md:w-1/3 w-full md:m-auto md:mx-5 flex flex-col justify-center  items-center'>
            <NextRouterButton />

            <div className='md:w-96 w-full md:bg-transparent bg-white/65 flex flex-col gap-10 p-5 md:border-2 border-black md:rounded rounded-t-xl'>
              <div className='flex justify-between p-2'>
                <div>
                  <h1 className='font-inter md:text-xl text-lg font-semibold capitalize'>
                    {Item.itemTitle}
                  </h1>
                  <p className='font-roboto_mono text-sm font-light select-none'>
                    R${Item.valor}
                  </p>
                </div>

                <div className='size-5 border-r border-t border-black/80 rounded-tr -mr-0.5' />
              </div>
              <div className='font-roboto space-x-1 space-y-2'>
                <h3 className='font-semibold capitalize'>descricao</h3>
                <p className='font-light text-sm'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                  laboriosam fugit, beatae dolorem praesentium repellendus nobis
                  ea amet, molestiae aliquid libero vitae magni laborum quod
                  hic. Ipsa aut ipsam vel!
                </p>
                <HoverCard>
                  <HoverCardTrigger>
                    <div className='w-fit p-1.5 pl-3 pr-0.5 text-sm flex gap-2 justify-center items-end rounded-bl-lg rounded-r-lg bg-zinc-950/90 text-white no-underline select-none cursor-pointer'>
                      <Siren className='size-5 text-red-600' />
                      <p className='capitalize font-roboto_mono font-medium'>
                        Peca Unica.
                      </p>
                    </div>
                  </HoverCardTrigger>

                  <HoverCardContent className=' w-72 h-fit space-y-1 space-x-0.5 overflow-hidden rounded-bl-2xl rounded-r-2xl rounded-tl-none bg-zinc-950/90 border-none shadow-md shadow-black/50 text-sm font-inter text-white'>
                    <h3 className='font-roboto_mono font-black text-red-600'>
                      Atencao
                    </h3>
                    <p>Todas as nossas pecas sao uncas, inclusive esta!.</p>
                    <p className='capitalize'>
                      unico
                      <strong> tamanho</strong> & <strong>peca</strong> unica.
                    </p>
                  </HoverCardContent>
                </HoverCard>
              </div>

              <div className='flex gap-2.5 font-roboto font-semibold'>
                <Button className='w-full flex-1 capitalize shadow-md shadow-black/30'>
                  comprar
                </Button>
                <Button className='capitalize w-10 bg-rose-600 hover:bg-rose-600/80 transition-colors shadow-md shadow-black/30 duration-300 p-0'>
                  <Plus className='size-5 m-auto' />
                </Button>
              </div>
            </div>
          </section>

          <section className='flex justify-center md:items-end items-start md:hidden '>
            <div className='font-inter p-5 space-y-2 space-x-0.5'>
              <h3 className='text-lg font-medium'>Sobre</h3>
              <p className='text-sm '>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates, id. Magni odit beatae libero dolores commodi
                pariatur facere officiis, ex in incidunt sequi quibusdam
                quisquam earum. Ea est eligendi excepturi.
              </p>
            </div>
          </section>
        </section>
      </section>
    </>
  )
}
