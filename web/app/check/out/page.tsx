import { MailOpenIcon } from 'lucide-react'
import { TableDemo } from '../../../components/header/table_teste'
export default function out() {
  return (
    <>
      <main className='w-full h-screen'>
        <section className='max-w-7xl flex m-auto'>
          <div className='w-[425px] h-screen overflow-hidden overflow-y-scroll'>
            <TableDemo />
          </div>
          <div></div>
        </section>
      </main>
    </>
  )
}
