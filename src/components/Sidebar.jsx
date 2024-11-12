import { Heart, Home } from 'lucide-react'
import React from 'react'
import {Link} from "react-router-dom"
const Sidebar = () => {
  return (
    <>
      <DesktopSidebar />
      <MobileSidebar />
    </>
  )
}

export const DesktopSidebar = () => {
  return (
    <div className="p-3 md:p-10 border-r min-h-screen w-24 md:w-64 hidden sm:block">
      <div className="flex flex-col gap-20 sticky top-10 left-0">
        <div className="w-full">
          <img
            src="/logo.svg"
            alt="logo"
            className="hidden md:block cursor-pointer"
          />
          <img
            src="/mobile-logo.svg"
            alt="logo"
            className="block md:hidden cursor-pointer"
          />
        </div>
        <ul className="flex flex-col items-center md:items-start gap-8">
          <Link to={'/'} className="flex gap-1 cursor-pointer">
            <Home size={24} />
            <span className="font-bold hidden md:block">Home</span>
          </Link>
          <Link to={'/favorites'} className="flex gap-1 cursor-pointer">
            <Heart size={24} />
            <span className="font-bold hidden md:block">Favorites</span>
          </Link>
        </ul>
      </div>
    </div>
  )
}
export const MobileSidebar = () => {
  return (
    <div className="flex justify-center gap-10 border-t fixed w-full bottom-0 left-0 bg-white z-10 p-2  sm:hidden">
      <ul className="flex items-center md:items-start gap-8">
        <Link to={'/'} className="">
          <Home size={24} />
         
        </Link>
        <Link to={'/favorites'} className="">
          <Heart size={24} />
        
        </Link>
      </ul>
    </div>
  )
}

export default Sidebar
