import Link from "next/link"
import Image from "next/image"
import { BellIcon } from "@heroicons/react/24/outline"

export default function Navbar(){
    return(

        <>
        <div className="hidden md:flex flex-nowrap justify-between px-10 py-2 bg-white border-b-2 border-slate-300 items-center text-sm font-medium text-slate-700">
            <div className="flex justify-around gap-6">
                    <Link href="/">
                        <img src="./assets/logo.png" alt="Cards Digify" width='32' height='32'/>
                    </Link>
                    <ul className="flex flex-nowrap justify-between items-center gap-3">
                        
                        <Link href="/">
                            <li className="hover:text-indigo-500">Home</li>
                        </Link>
                        <Link href="dashboard">
                            <li className="hover:text-indigo-500">Dashboard</li>
                        </Link>
                        <Link href="/company">
                            <li className="hover:text-indigo-500">My Profile</li>
                        </Link>
                        <Link href="setting">
                            <li className="hover:text-indigo-500">Settings</li>
                        </Link>
                </ul>  

            </div>

            <div className="flex justify-around gap-3 items-center">

                <Link href="#" className="cursor-pointer p-2 border-e-0 border-slate-400 rounded-full">
                    <BellIcon className="h-5 w-5 hover:text-indigo-600" />
                </Link>

                
                
                <img 
                    src='https://images.pexels.com/photos/1520760/pexels-photo-1520760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' 
                    alt='user_name' 
                    width='40' 
                    height='40'
                    className="rounded-full shadow-sm"
                />
            </div>

        </div>
        </>
        
    )
}