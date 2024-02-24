import { ShoppingcartMode } from '@/components/header/ShoppingCartMode'
import { NavigationMenuDemo } from '../components/header/Menu'
import item from './apiFakeForItem.json'
import { Store } from '@/components/store-window'

export default function Home() {
  return (
    <>
      <main className='w-full h-[70vh] flex flex-col'>
        <header className='w-full flex fixed justify-between z-10'>
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

      <Store.Root>
        {item.Item.map(item => (
          <Store.CardBase
            title={item.itemTitle}
            valor={item.valor}
            key={item.itemTitle}
          >
            <Store.Banner
              title={item.itemTitle}
              imgPrimare={item.itemImg}
              imgSecundare={item.itemImgSecundari}
            />
          </Store.CardBase>
        ))}
      </Store.Root>
    </>
  )
}
