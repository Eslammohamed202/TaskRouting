import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

export default function About() {
    return (
        <>
            <Navbar></Navbar>

            <div className='bg-[#1abc9c] h-screen text-center overflow-hidden py-48'>
                <h1 className=' my-20'>about component</h1>
                <div className=' m-[-64px] flex items-center justify-center'>
                    <div className='w-20 h-1 bg-white'></div>
                    <i className=" fa-solid fa-star text-white mx-5" />
                    <div className='w-20 h-1 bg-white'></div>
                </div>
                <div className='flex justify-between my-20 '>
                    <p className='mx-20 px-8 text-white mt-0 mb-4'>sFreelancer is a free bootstrap theme created by Route. The download includes
                    the complete source files including HTML,
                    CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>

                    <p className='mx-20 px-8 text-white mt-0 mb-4'>Freelancer is a free bootstrap theme created by Route.
                    The download includes the complete source files including HTML,
                    CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                </div>
            </div>

            <Footer></Footer>
        </>

    )
}
