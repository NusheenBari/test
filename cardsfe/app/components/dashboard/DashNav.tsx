import { PlusCircleIcon  } from '@heroicons/react/24/solid'
import Link from 'next/link'

export default function Nav(){
    return(

    <>
        <Link href="company/addcard" className=''>
                <div className='flex gap-2 items-center hover:text-indigo-500'>
                    <PlusCircleIcon className="h-6 w-6 text-slate-500 "/>
                    <p className='text-sm font-medium'>Add a card</p>
                </div>
        </Link>
    
    </>
    )

}