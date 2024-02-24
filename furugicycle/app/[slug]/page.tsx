import { Button } from '@/components/ui/button'
import item from '../../components/apiFakeForItem.json'
import { Plus } from 'lucide-react'

export default async function Item({ params }: { params: { slug: string } }) {
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

          <section className='md:h-full h-[30%] md:mt-0 mt-14 flex justify-center items-center '>
            <div className='md:w-[600px] w-[500px] md:h-[680px] h-full m-auto bg-cover bg-center overflow-hidden'>
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
            <div className='md:w-96 w-full  flex flex-col gap-10 p-5 md:border-2 border-black rounded'>
              <div className='flex justify-between p-2'>
                <div>
                  <h1 className='font-inter md:text-xl text-lg font-semibold capitalize'>
                    {Item.itemTitle}
                  </h1>
                  <p className='font-roboto_mono text-sm font-light'>
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
                <p className='capitalize font-inter font-light'>Peca Unica.</p>
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
