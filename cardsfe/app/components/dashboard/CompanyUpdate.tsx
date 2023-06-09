'use client'

import Link from 'next/link';

import { ChangeEvent, useRef, useState } from 'react';

export default function CompanyUpdate(){

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
  
      //  do the file upload here normally...
    };

    return(
        <section className='form-section-1'>
            <form 
                className="grid grid-cols-1 gap-2 
                border-solid border-2 border-indigo-100 
                shadow-sm rounded-sm 
                px-5 py-5 m-2
                "
                method="POST" 
                action=""
                
            >

                <label>Company name</label>
                <input 
                    className="block w-full rounded-md border-0 
                                py-1.5 text-gray-900 shadow-sm ring-1 
                                ring-inset ring-gray-300 
                                focus:ring-2 focus:ring-inset 
                                ocus:ring-indigo-600 sm:text-sm sm:leading-6 
                                border-solid border-indigo-300  
                                px-2 mb-2" 
                    type="text" 
                    id="company_name" 
                    name="company_name" 
                     
                    required
                />

                <label>Company logo</label>
                <button 
                    onClick={handleUploadClick}
                    className=' rounded-md px-5 py-5 text-indigo-500 text-center border-dashed border-2 border-slate-400 text-sm'    
                >
                    {file ? `${file.name}` : 'Upload logo'}
                </button>
                <input
                    type="file"
                    ref={inputRef}
                    onChange={handleFileChange}
                    className='hidden'
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
                    id="phone_number" 
                    name="phone_number"                    
                    required
                />

                <label>Contact person</label>
                <input 
                    className="block w-full rounded-md border-0 
                                py-1.5 text-gray-900 shadow-sm ring-1 
                                ring-inset ring-gray-300 
                                focus:ring-2 focus:ring-inset 
                                ocus:ring-indigo-600 sm:text-sm sm:leading-6 
                                border-solid border-indigo-300  
                                px-2 mb-2" 
                    type="text" 
                    id="contact_person" 
                    name="contact_person"                    
                    required
                />

                <label>Plan</label>
                <input 
                    className="block w-full rounded-md border-0 
                                py-1.5 text-gray-900 shadow-sm ring-1 
                                ring-inset ring-gray-300 
                                focus:ring-2 focus:ring-inset 
                                ocus:ring-indigo-600 sm:text-sm sm:leading-6 
                                border-solid border-indigo-300  
                                px-2 mb-2 bg-slate-100" 
                    type="text" 
                    id="plan" 
                    name="plan"  
                    value="basic"                  
                    disabled
                />

                    <Link href="company/addcard">
                    
                    <button
                                            
                        className="cursor-pointer mb-5 flex justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" 
                        type="submit" 
                        id="submit" 
                                        
                        >

                        Next

                        </button>
                    </Link>

            </form>
        </section>
    )
}