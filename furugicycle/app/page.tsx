import { NavigationMenuDemo } from '../components/header/Menu'
export default function Home() {
  return (
    <main className='w-full h-screen flex flex-col'>
      <header className='flex fixed px-5 py-2.5'>
        {/* <nav className=''>
          <ul className='flex gap-5 uppercase text-sm font-medium '>
            <li className=''>sobre</li>
            <li>client</li>
            <li>medidas</li>
            <li>vintage</li>
            <li>disponivel</li>
          </ul>
        </nav> */}

        <NavigationMenuDemo />
      </header>
      <div className='w-full h-[55vh] flex justify-center items-center'>
        <h1 className='text-7xl font-light '>
          Futugi
          <span className='text-xl align-top font-black text-red-500'>
            古着
          </span>
        </h1>
      </div>
    </main>
  )
}
