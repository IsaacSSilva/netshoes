export const Footer = () => {
  return (
    <footer className='w-full h-[20vh] flex md:flex-row-reverse gap-5 md:gap-0 flex-col justify-center md:justify-between md:px-5 items-center bg-zinc-400/10 text-zinc-500 mt-20 text-sm font-inter'>
      <div>
        <ul className='list-none flex gap-5'>
          <li>About</li>
          <li>Accessibility</li>
          <li>Developer</li>
        </ul>
      </div>
      <div className='flex gap-10 select-none font-thin'>
        <span>© 2024 Your Company, Inc. All rights reserved.</span>
      </div>
    </footer>
  )
}
