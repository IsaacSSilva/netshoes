'use client'

import {
  Table,
  TableBody,
  TableCell,
  // TableFooter,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import Image from 'next/image'
import item from '../../components/apiFakeForItem.json'
import Link from 'next/link'

export function TableDemo() {
  return (
    <Table className='h-full  mb-16'>
      <TableHeader>
        <TableRow>
          <TableHead className='w-[100px]'>Item</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {item.Item.map(item => (
          <TableRow key={item.itemImg}>
            <TableCell>
              <Link href={`/${item.id}`} className='select-none'>
                <img
                  alt='imagem de compra'
                  src={item.itemImg}
                  width={64}
                  height={0}
                  className='w-16 rounded shadow shadow-black/20 bg-cover'
                />
              </Link>
            </TableCell>
            <TableCell
              colSpan={2}
              className=' font-medium text-start capitalize text-sm'
            >
              {item.itemTitle}
            </TableCell>
            <TableCell className='text-left select-none'>
              R$
              {item.valor}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
