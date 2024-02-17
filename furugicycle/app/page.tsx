import { ShoppingcartMode } from '@/components/header/ShoppingCartMode'
import { NavigationMenuDemo } from '../components/header/Menu'

export default function Home() {
  return (
    <main className='w-full h-screen flex flex-col'>
      <header className='w-full flex fixed justify-between '>
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
  )
}
