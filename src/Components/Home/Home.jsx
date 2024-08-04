import React from 'react'
import logo from '../../assets/avataaars.svg'

export default function Home() {
    return (
        <div className='bg-[#1abc9c] h-full py-40 text-center'>
            <img src={logo} alt='' className='w-1/5 mx-auto'></img>
            <h1>start framework</h1>
            <div className='flex items-center justify-center my-1'>
                <div className='h-1 w-20 bg-white'></div>
                <i className=" fa-solid fa-star p-5 text-white" />
                <div className='h-1 w-20 bg-white'></div>
            </div>
            <h4>Graphic Artist - Web Designer - Illustrator</h4>
        </div>
    )
}