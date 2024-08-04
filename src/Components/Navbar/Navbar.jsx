import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
    <>
        <nav className='bg-[#2c3e50] p-8 fixed top-0 right-0 left-0 z-[1030]'>
            <div className=" flex justify-start justify-between">
                <a href='#' className='text-3xl font-bold text-white uppercase'>start framework</a>
                <button className='navbar-toggler' type='button' data-bs-toggle='collapse' 
                data-bs-target='#navbarSupportedContent' aria-controls='#navbarSupportedContent'
                aria-expanded='false' aria-label='Toggle navigation'>
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div>
                    <ul className='flex px-10'>
                        <li className='px-10 '><NavLink to={'/about'} className={({isActive}) => isActive?"uppercase font-bold text_color rounded ":"text-white uppercase font-bold"}>About</NavLink></li>
                        <li className='px-10'><NavLink to={'/portfolio'} className={({isActive}) => isActive?"uppercase font-bold text_color rounded":"text-white uppercase font-bold"}>Portfolio</NavLink></li>
                        <li className='px-10'><NavLink to={'/contact'} className={({isActive}) => isActive?"uppercase font-bold text_color ":"text-white uppercase font-bold"}>Contact</NavLink></li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
    )
}
