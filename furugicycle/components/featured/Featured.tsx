export const Featured = () => {
  return (
    <section className='max-w-7xl h-[60vh] md:py-0 px-2.5 py-5  flex justify-center items-center m-auto text-lg font-inter font-bold text-white'>
      <div className='grid md:grid-rows-3 grid-rows-7 grid-cols-2 md:grid-flow-col gap-4 h-full w-full'>
        <div className='md:row-span-3 md:col-span-1 row-span-4 col-span-2 bg-indigo-500 h-full w-full text-center flex justify-center items-center bg-featured-one bg-cover bg-center'>
          <p>Ultimo Drop</p>
        </div>
        <div
          className='row-span-2 md:col-span-2 col-span-1 bg-indigo-500 h-full w-full
        text-center flex justify-center items-center bg-featured-two bg-cover bg-center'
        >
          <p>Promocao</p>
        </div>
        <div className='md:col-span-2 col-span-1 md:row-span-1 row-span-2 bg-indigo-500 h-full w-full text-center flex justify-center items-center bg-featured-three bg-cover bg-center'>
          <p>Novidades</p>
        </div>
      </div>
    </section>
  )
}
