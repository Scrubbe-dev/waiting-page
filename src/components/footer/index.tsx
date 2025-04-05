import { ChevronRight, Github, LinkedinIcon, Twitter } from 'lucide-react'
import React from 'react'
import { FaDiscord, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa6'

function Footer() {
  return (
    <div  className='min-h-[400px] w-full bg-slate-200 flex  justify-center px-4 py-5 xl:py-0 xl:px-0 z-10  mt-10'>
        <div className='xl:w-8/12 h-full grid xl:grid-cols-4 gap-8 '>

            <div className='w-full col-span-1 space-y-6 pt-10'>
                <div className='w-full space-y-2'>
                    <div className='w-fit h-fit font-semibold font-Montserrat text-xl '>Scrubbe</div>
                    <div className='w-10 h-1 bg-green-400 rounded-full'></div>
                </div>
                <div className='w-full font-Raleway text-sm'>

                Advanced SIEM & SOAR security intelligence platform that protects your organization from emerging threats.
                </div>
                <div className='flex items-center justify-start mt-2 gap-2'>
                  <div className='w-fit h-fit p-2 items-center rounded-full flex hover:-translate-y-1 cursor-pointer hover:bg-green-500 hover:transition-all transition-all justify-center bg-gray-400'>
                     <FaTwitter  size={20} color="#ffffff" />
                  </div>
                  <div className='w-fit h-fit p-2 items-center rounded-full hover:-translate-y-1 cursor-pointer hover:bg-green-500 hover:transition-all transition-all  flex justify-center bg-gray-400'>
                     <FaLinkedin size={20} color="#ffffff"/>
                  </div>
                  <div className='w-fit h-fit p-2 items-center hover:-translate-y-1 cursor-pointer hover:bg-green-500 hover:transition-all transition-all rounded-full flex justify-center bg-gray-400'>
                     <FaGithub size={20} color="#ffffff"/>
                  </div>
                  <div className='w-fit h-fit p-2 items-center hover:-translate-y-1 cursor-pointer hover:bg-green-500 hover:transition-all transition-all rounded-full flex justify-center bg-gray-400'>
                     <FaDiscord size={20} color="#ffffff"/>
                  </div>


                </div>


            </div>





            <div className='w-full col-span-1 space-y-6 pt-10'>
                <div className='w-full space-y-2'>
                    <div className='w-fit h-fit font-semibold font-Montserrat text-xl '>Product</div>
                    <div className='w-10 h-1 bg-green-400 rounded-full'></div>
                </div>
                <div className='flex items-center justify-start mt-2 gap-1'>
                  <div className='group gap-1 w-fit h-fit items-center rounded-full flex  cursor-pointer hover:text-green-500 hover:transition-all transition-all justify-start'>
                     <ChevronRight size={18}  />
                     <div className='w-fit h-fit font-Montserrat text-sm'>
                           Features
                     </div>
                  </div>
                </div>
                <div className='flex items-center justify-start  gap-1'>
                  <div className='w-fit gap-1 h-fit items-center rounded-full flex  cursor-pointer hover:text-green-500 hover:transition-all transition-all justify-start'>
                     <ChevronRight size={18}  />
                     <div className='w-fit h-fit font-Montserrat  text-sm'>
                           Integration 
                     </div>
                  </div>
                </div>
                <div className='flex items-center justify-start  gap-1'>
                  <div className='w-fit gap-1 h-fit items-center rounded-full flex  cursor-pointer hover:text-green-500 hover:transition-all transition-all justify-start'>
                     <ChevronRight size={18}  />
                     <div className='w-fit h-fit font-Montserrat text-sm'>
                           Installation 
                     </div>
                  </div>
                </div>
                <div className='flex items-center justify-start  gap-1'>
                  <div className='w-fit gap-1 h-fit items-center rounded-full flex  cursor-pointer hover:text-green-500 hover:transition-all transition-all justify-start'>
                     <ChevronRight size={18}  />
                     <div className='w-fit h-fit font-Montserrat text-sm'>
                           Demo 
                     </div>
                  </div>
                </div>
                <div className='flex items-center justify-start  gap-1'>
                  <div className='w-fit gap-1 h-fit items-center rounded-full flex  cursor-pointer hover:text-green-500 hover:transition-all transition-all justify-start'>
                     <ChevronRight size={18}  />
                     <div className='w-fit h-fit font-Montserrat text-sm'>
                           Pricing
                     </div>
                  </div>
                </div>
            </div>





            <div className='w-full col-span-1 space-y-6 pt-10'>
                <div className='w-full space-y-2'>
                    <div className='w-fit h-fit font-semibold font-Montserrat text-xl '>Resources</div>
                    <div className='w-10 h-1 bg-green-400 rounded-full'></div>
                </div>
                <div className='flex items-center justify-start mt-2 gap-1'>
                  <div className='group gap-1 w-fit h-fit items-center rounded-full flex  cursor-pointer hover:text-green-500 hover:transition-all transition-all justify-start'>
                     <ChevronRight size={18}  />
                     <div className='w-fit h-fit font-Montserrat text-sm'>
                           Documentation
                     </div>
                  </div>
                </div>
                <div className='flex items-center justify-start  gap-1'>
                  <div className='w-fit gap-1 h-fit items-center rounded-full flex  cursor-pointer hover:text-green-500 hover:transition-all transition-all justify-start'>
                     <ChevronRight size={18}  />
                     <div className='w-fit h-fit font-Montserrat  text-sm'>
                           API Reference
                     </div>
                  </div>
                </div>
                <div className='flex items-center justify-start  gap-1'>
                  <div className='w-fit gap-1 h-fit items-center rounded-full flex  cursor-pointer hover:text-green-500 hover:transition-all transition-all justify-start'>
                     <ChevronRight size={18}  />
                     <div className='w-fit h-fit font-Montserrat text-sm'>
                           Blog 
                     </div>
                  </div>
                </div>
                <div className='flex items-center justify-start  gap-1'>
                  <div className='w-fit gap-1 h-fit items-center rounded-full flex  cursor-pointer hover:text-green-500 hover:transition-all transition-all justify-start'>
                     <ChevronRight size={18}  />
                     <div className='w-fit h-fit font-Montserrat text-sm'>
                           Community
                     </div>
                  </div>
                </div>
                <div className='flex items-center justify-start  gap-1'>
                  <div className='w-fit gap-1 h-fit items-center rounded-full flex  cursor-pointer hover:text-green-500 hover:transition-all transition-all justify-start'>
                     <ChevronRight size={18}  />
                     <div className='w-fit h-fit font-Montserrat text-sm'>
                           Support
                     </div>
                  </div>
                </div>
            </div>


            <div className='w-full col-span-1 space-y-6 pt-10'>
                <div className='w-full space-y-2'>
                    <div className='w-fit h-fit font-semibold font-Montserrat text-xl '>Company</div>
                    <div className='w-10 h-1 bg-green-400 rounded-full'></div>
                </div>
                <div className='flex items-center justify-start mt-2 gap-1'>
                  <div className='group gap-1 w-fit h-fit items-center rounded-full flex  cursor-pointer hover:text-green-500 hover:transition-all transition-all justify-start'>
                     <ChevronRight size={18}  />
                     <div className='w-fit h-fit font-Montserrat text-sm'>
                           About us
                     </div>
                  </div>
                </div>
                <div className='flex items-center justify-start  gap-1'>
                  <div className='w-fit gap-1 h-fit items-center rounded-full flex  cursor-pointer hover:text-green-500 hover:transition-all transition-all justify-start'>
                     <ChevronRight size={18}  />
                     <div className='w-fit h-fit font-Montserrat  text-sm'>
                           Careers 
                     </div>
                  </div>
                </div>
                <div className='flex items-center justify-start  gap-1'>
                  <div className='w-fit gap-1 h-fit items-center rounded-full flex  cursor-pointer hover:text-green-500 hover:transition-all transition-all justify-start'>
                     <ChevronRight size={18}  />
                     <div className='w-fit h-fit font-Montserrat text-sm'>
                           Press
                     </div>
                  </div>
                </div>
                <div className='flex items-center justify-start  gap-1'>
                  <div className='w-fit gap-1 h-fit items-center rounded-full flex  cursor-pointer hover:text-green-500 hover:transition-all transition-all justify-start'>
                     <ChevronRight size={18}  />
                     <div className='w-fit h-fit font-Montserrat text-sm'>
                           Privacy Policy 
                     </div>
                  </div>
                </div>
                <div className='flex items-center justify-start  gap-1'>
                  <div className='w-fit gap-1 h-fit items-center rounded-full flex  cursor-pointer hover:text-green-500 hover:transition-all transition-all justify-start'>
                     <ChevronRight size={18}  />
                     <div className='w-fit h-fit font-Montserrat text-sm'>
                           Terms of Service
                     </div>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer