'use client'

import Link from "next/link"

import { ChevronLeftIcon, ArrowLeftCircleIcon  } from '@heroicons/react/24/solid'


export default function ForgotPass() {

    return(

            <section className="form-section">

                <Link href='login'
                    className=""
                >
                    <ArrowLeftCircleIcon className="hidden h-10 w-10 text-gray-200 hover:text-indigo-500 absolute left-1/4 top-1/4 md:block" />
                    

                </Link>

                
                
                <form 
                    className="grid grid-cols-1 gap-2 
                               border-solid border-2 border-indigo-100 
                               shadow-sm rounded-sm 
                               px-5 py-5"

                    action="/send-data-here" 
                    method="post"               
                >


                                      
                  <img
                    src='/assets/logo.png'
                    alt="Cards Digify"
                    width='40px'
                  />
                  

                    <h1 className="py-5 text-xl font-bold">Password reset</h1>

                    <p className="mb-2 text-xs">Please enter your registered email and we'll send you the password reset instructions to your email inbox.</p>
                    
                    <input 
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 border-solid border-indigo-300  px-2 mb-2" 
                        type="email" 
                        id="useremail" 
                        name="useremail"
                        placeholder="Registered email"
                        required
                    />


                    <Link href="login">
                    
                    <button
                                        
                                        className="cursor-pointer mb-5 flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" 
                                        type="submit" 
                                        id="resetpass" 
                                       
                    >

                    Reset password

                    </button>
                    </Link>


                    <Link href="login" className="text-sm text-indigo-600 underline flex gap-2 text-center justify-center mb-1 hover:font-semibold">Login</Link>


                </form>

                <div className="text-sm text-indigo-600 underline flex gap-2 text-center justify-center mt-5 hover:font-semibold">

                    <Link href="https://cardsdigify.com/shop">Click here to create your card</Link>
                </div>
            </section>

    )

}