import Link from 'next/link'

interface ICardBanner {
  title: string
  imgPrimare: string
  imgSecundare?: string
}

export const BannerStore = ({
  title,
  imgPrimare,
  imgSecundare
}: ICardBanner) => {
  return (
    <Link href={title}>
      <div className='w-[307px] h-96 overflow-hidden'>
        <img
          alt={title}
          src={imgPrimare}
          width={307}
          height={384}
          className='w-[307px] h-96 bg-cover  bg-no-repeat bg-center'
        />

        {imgSecundare ? (
          <div className='h-[768px] bg-transparent flex items-end -translate-y-[768px] hover:-translate-y-96 transition-transform duration-300 ease-in delay-100'>
            <img
              alt={title}
              src={imgSecundare}
              width={307}
              height={384}
              className='w-[307px] h-96  bg-cover  bg-no-repeat bg-center'
            />
          </div>
        ) : null}
      </div>
    </Link>
  )
}
