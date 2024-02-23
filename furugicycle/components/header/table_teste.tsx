'use client'

import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import Image from 'next/image'
import item from '../../components/apiFakeForItem.json'

export function TableDemo() {
  return (
    <Table className='h-full p-2 overflow-y-scroll'>
      <TableHeader>
        <TableRow>
          <TableHead className='w-[100px]'>Item</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {item.Item.map(item => (
          <TableRow key={item.itemImg}>
            <TableCell>
              <img
                alt='imagem de compra'
                src={item.itemImg}
                width={64}
                height={0}
                className='w-16 rounded shadow shadow-black/20 bg-cover'
              />
            </TableCell>
            <TableCell
              colSpan={2}
              className=' font-medium text-start capitalize text-sm'
            >
              {item.itemTitle}
            </TableCell>
            <TableCell className='text-left'>
              R$
              {item.valor}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
