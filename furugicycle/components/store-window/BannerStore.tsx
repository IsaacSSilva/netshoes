import Link from 'next/link'

interface ICardBanner {
  id: string
  title: string
  imgPrimare: string
  imgSecundare?: string
}

export const BannerStore = ({
  id,
  title,
  imgPrimare,
  imgSecundare
}: ICardBanner) => {
  return (
    <Link href={`/${id}`} className='select-none '>
      <div className='md:w-[307px] w-32 md:h-96 h-[160px] bg-emerald-500  overflow-hidden'>
        <img
          alt={title}
          src={imgPrimare}
          width={307}
          height={384}
          className='md:w-[307px] w-32 md:h-96  bg-cover  bg-no-repeat bg-center'
        />

        {imgSecundare ? (
          <div className='h-[768px] relative bg-transparent flex items-end -translate-y-[768px] hover:-translate-y-96 transition-transform duration-300 ease-in delay-300'>
            <img
              alt={title}
              src={imgSecundare}
              width={307}
              height={384}
              className='md:w-[307px] w-32 md:h-96 bg-cover bg-no-repeat bg-center'
            />
          </div>
        ) : null}
      </div>
    </Link>
  )
}
