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
import { Button } from '../ui/button'

export function TableDemo() {
  return (
    <div className='h-full flex flex-col justify-between p-2 '>
      <Table className='h-full overflow-y-scroll'>
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

      <div>
        <div className='w-full py-5 flex justify-between items-center '>
          <div>Total</div>
          <div>
            R$
            {item.Item.length <= 1
              ? Number(item.Item[0].valor)
              : Number(item.Item[0].valor) + Number(item.Item[0].valor)}
          </div>
        </div>
        <div className='flex justify-between'>
          <Button variant='ghost'>Mais Detalhes</Button>
          <Button className='font-bold font-inter'>Finalizar</Button>
        </div>
      </div>
    </div>
  )
}
