'use client'

import Link from "next/link"

export default function Login() {

    return(

            <section className="form-section">
                
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
                  

                    <h1 className="py-5 text-xl font-bold">Login to your account</h1>
                    
                    <input 
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 border-solid border-indigo-300  px-2 mb-2" 
                        type="email" 
                        id="useremail" 
                        name="useremail"
                        placeholder="Registered email"
                        required
                    />

                    <input 
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 border-solid border-indigo-300  px-2 mb-2" 
                        type="password" 
                        id="password"
                        name="password" 
                        placeholder="*********"
                        required
                        title="Password should be digits (0 to 9) or alphabets (a to z)."
                    />

                    <Link href="company">
                    
                    <button
                                        
                                        className="cursor-pointer mb-5 flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" 
                                        type="submit" 
                                        id="submit" 
                                       
                    >

                    Login

                    </button>
                    </Link>


                    <Link href="login/resetpassword" className="text-sm text-indigo-600 underline flex gap-2 text-center justify-center mb-1 hover:font-semibold">Forgot password? Click here</Link>


                </form>

                <div className="text-sm text-indigo-600 underline flex gap-2 text-center justify-center mt-5 hover:font-semibold">

                    <Link href="https://cardsdigify.com/shop">Click here to create your card</Link>
                </div>
            </section>

    )

}