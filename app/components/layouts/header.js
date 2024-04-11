'use client'
import { useState } from 'react'
 
export default function Header(){
 const [show , setShow] = useState(false)
 const handleCLick = (e)=>{
     e.preventDefault()
     setShow(!show)
      }
      const cut = (e)=>{
        e.preventDefault()
        setShow(!show)
      }
    return(
        <>
        <header className="p-5 border">
         <div className="container mx-auto">
            <div className="flex items-center">
            <h1 className="pr-4 mr-5 border-r">LOGO</h1>
            <div className="menu">
          <div className=" md:hidden"> <a onClick={(e)=> handleCLick(e)}> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"/>
            </svg> </a> </div> 
         <div className="hidden md:block">
            <a className="px-2">Home</a>
            <a className="px-2">About</a>
            <a className="px-2">Blog</a>
            <a className="px-2">Contact</a>
         </div>
            </div>
            <a className="ml-auto bg-red-600 text-white px-3 py-1 rounded">Get a Qoute</a>
            </div>
            </div> 
        </header>
       <div className={`offcanvas ${show ? 'offcanActive':'offcanInactive'} p-5`}>
            
       <a className='ml-auto' href=""  onClick={(e)=>cut(e)}>CUT</a> 
          </div> 
        </>
    )
}