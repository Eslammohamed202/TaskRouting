import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import img1 from '../../assets/poert1.png'
import img2 from '../../assets/port2.png'
import img3 from '../../assets/port3.png'

export default function Portfolio() {
  return (
    <>
    <Navbar />

    <div className='h-5xl text-center overflow-hidden py-10'>
      <h2 className='text-3xl font-bold my-20 text-[#2c3e50] text-5xl'>portfolio component</h2>
      <div className='m-[-64px] flex items-center justify-center'>
        <div className='w-20 h-1 bg-[#2c3e50]'></div>
        <i className=" fa-solid fa-star p-5 text-[#2c3e50]" />
        <div className='w-20 h-1 bg-[#2c3e50]'></div>
      </div>

      <div className="container py-40 m-auto my-[-20]">
        <div className="row flex justify-center items-center">
          <div className="col-lg-4 col-md-6">
              <div className="rounded-3 overflow-hidden position-relative">
                <img className='w-[400px] rounded' src={img1} alt=''></img>
                  <div className="layer_position-absolute start-0 w-100 top-0 h-100 flex justify-center items-center">
                  <i className='text-white fa-solid fa-plus fa-[6px]'></i>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="rounded-3 overflow-hidden position-relative">
                <img className='w-[400px] rounded-3 mx-10 rounded' src={img2} alt=''></img>
                <div className="layer_position-absolute start-0 w-100 top-0 h-100 flex justify-center items-center">
                  <i className='text-white fa-solid fa-plus fa-[6px]'></i>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="rounded-3 overflow-hidden position-relative">
                <img className='w-[400px] rounded' src={img3} alt=''></img>
                <div className="layer_position-absolute start-0 w-100 top-0 h-100 flex justify-center items-center">
                  <i className='text-white fa-solid fa-plus fa-[6px]'></i>
                </div>
              </div>
            </div>
          </div>

          <div className="row flex justify-center items-center">
          <div className="col-lg-4 col-md-6">
            <div className="rounded-3 overflow-hidden position-relative">
              <img className='w-[400px] rounded my-10' src={img1} alt=''></img>
              <div className="layer_position-absolute start-0 w-100 top-0 h-100 flex justify-center items-center">
                <i className='text-white fa-solid fa-plus fa-[6px]'></i>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="rounded-3 overflow-hidden position-relative">
              <img className='w-[400px] rounded-3 mx-10 rounded' src={img2} alt=''></img>
              <div className="layer_position-absolute start-0 w-100 top-0 h-100 flex justify-center items-center">
                <i className='text-white fa-solid fa-plus fa-[6px]'></i>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="rounded-3 overflow-hidden position-relative">
              <img className='w-[400px] rounded' src={img3} alt=''></img>
              <div className="layer_position-absolute start-0 w-100 top-0 h-100 flex justify-center items-center">
                <i className='text-white fa-solid fa-plus fa-[6px]'></i>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>




    

    <Footer />
    </>
  )
}

