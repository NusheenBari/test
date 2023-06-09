'use client'

import Link from 'next/link';

import { ChangeEvent, useRef, useState } from 'react'


export default function NewCard() {

    const [file, setFile] = useState<File>();
    const inputRef = useRef<HTMLInputElement | null>(null);
  
    const handleUploadClick = () => {
      // 👇 We redirect the click event onto the hidden input element
      inputRef.current?.click();
    };
  
    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
      if (!e.target.files) {
        return;
      }
  
      setFile(e.target.files[0]);
  
      // 🚩 do the file upload here normally...
    };


    return(
        <section className='form-section-1'>
            <form 
                className="grid grid-cols-1 md:grid-cols-2 gap-2 
                border-solid border-2 border-indigo-100 
                shadow-sm rounded-sm 
                px-5 py-5 m-2
                "
                method="POST" 
                action=""
                
            >

                <label>Full name</label>
                <input 
                    className="block w-full rounded-md border-0 
                                py-1.5 text-gray-900 shadow-sm ring-1 
                                ring-inset ring-gray-300 
                                focus:ring-2 focus:ring-inset 
                                ocus:ring-indigo-600 sm:text-sm sm:leading-6 
                                border-solid border-indigo-300  
                                px-2 mb-2" 
                    type="text" 
                    id="" 
                    name="" 
                     
                    required
                />

                <label>Profile picture</label>
                <button 
                    onClick={handleUploadClick}
                    className='text-left bg-slate-300 rounded-md px-2 py-1 text-white hover:bg-slate-600 text-sm'    
                >
                    {file ? `${file.name}` : 'Upload picture'}
                </button>
                <input
                    type="file"
                    ref={inputRef}
                    onChange={handleFileChange}
                    className='hidden'
                />

                <label>Custom message</label>
                <input 
                    className="block w-full rounded-md border-0 
                                py-1.5 text-gray-900 shadow-sm ring-1 
                                ring-inset ring-gray-300 
                                focus:ring-2 focus:ring-inset 
                                ocus:ring-indigo-600 sm:text-sm sm:leading-6 
                                border-solid border-indigo-300  
                                px-2 mb-2" 
                    type="text" 
                    id="custom_message" 
                    name="custom_message"                    
                    
                />

                <label>Phone number</label>
                <input 
                    className="block w-full rounded-md border-0 
                                py-1.5 text-gray-900 shadow-sm ring-1 
                                ring-inset ring-gray-300 
                                focus:ring-2 focus:ring-inset 
                                ocus:ring-indigo-600 sm:text-sm sm:leading-6 
                                border-solid border-indigo-300  
                                px-2 mb-2" 
                    type="tel" 
                    id="" 
                    name=""                    
                    
                />
                
                <label>Email</label>
                <input 
                    className="block w-full rounded-md border-0 
                                py-1.5 text-gray-900 shadow-sm ring-1 
                                ring-inset ring-gray-300 
                                focus:ring-2 focus:ring-inset 
                                ocus:ring-indigo-600 sm:text-sm sm:leading-6 
                                border-solid border-indigo-300  
                                px-2 mb-2" 
                    type="email" 
                    id="" 
                    name=""                    
                    
                />

                <label>Facebook</label>
                <input 
                    className="block w-full rounded-md border-0 
                                py-1.5 text-gray-900 shadow-sm ring-1 
                                ring-inset ring-gray-300 
                                focus:ring-2 focus:ring-inset 
                                ocus:ring-indigo-600 sm:text-sm sm:leading-6 
                                border-solid border-indigo-300  
                                px-2 mb-2" 
                    type="text" 
                    id="" 
                    name=""                    
                    
                />
                <label>LinkedIn</label>
                <input 
                    className="block w-full rounded-md border-0 
                                py-1.5 text-gray-900 shadow-sm ring-1 
                                ring-inset ring-gray-300 
                                focus:ring-2 focus:ring-inset 
                                ocus:ring-indigo-600 sm:text-sm sm:leading-6 
                                border-solid border-indigo-300  
                                px-2 mb-2" 
                    type="text" 
                    id="" 
                    name=""                    
                    
                />

                <label>Instagram</label>
                <input 
                    className="block w-full rounded-md border-0 
                                py-1.5 text-gray-900 shadow-sm ring-1 
                                ring-inset ring-gray-300 
                                focus:ring-2 focus:ring-inset 
                                ocus:ring-indigo-600 sm:text-sm sm:leading-6 
                                border-solid border-indigo-300  
                                px-2 mb-2" 
                    type="text" 
                    id="" 
                    name=""                    
                    
                />

                <label>Website</label>
                <input 
                    className="block w-full rounded-md border-0 
                                py-1.5 text-gray-900 shadow-sm ring-1 
                                ring-inset ring-gray-300 
                                focus:ring-2 focus:ring-inset 
                                ocus:ring-indigo-600 sm:text-sm sm:leading-6 
                                border-solid border-indigo-300  
                                px-2 mb-2" 
                    type="text" 
                    id="" 
                    name=""                    
                    
                />

                <label>Address</label>
                <input 
                    className="block w-full rounded-md border-0 
                                py-1.5 text-gray-900 shadow-sm ring-1 
                                ring-inset ring-gray-300 
                                focus:ring-2 focus:ring-inset 
                                ocus:ring-indigo-600 sm:text-sm sm:leading-6 
                                border-solid border-indigo-300  
                                px-2 mb-2" 
                    type="text" 
                    id="" 
                    name=""                    
                    
                />


                    <Link href="company/addcard">
                    
                        <button
                                                
                            className="cursor-pointer mb-5 flex justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" 
                            type="submit" 
                            id="submit" 
                                            
                            >

                            Save & publish

                        </button>
                    </Link>

                    <Link href="dashboard" className='text-sm mt-2 text-slate-500 hover:text-slate-700'>
        

                        Skip

                    </Link>

            </form>
        </section>
    )
}