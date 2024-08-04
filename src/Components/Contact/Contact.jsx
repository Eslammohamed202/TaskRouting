import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'

export default function Contact() {
  return (
    <>
      <Navbar />

      <section className="flex items-center justify-center h-screen" >

        <form className=" p-6 rounded shadow-md w-full max-w-2xl">
          <div className="mb-4">
            <input type="text" className="w-full p-2 border-0 border-b rounded-0 mb-2 border-gray-300" placeholder="userName" />
          </div>
          <div className="mb-4">
            
            <input type="number" className="w-full p-2 border-0 border-b rounded-0 mb-2 border-gray-300" placeholder="userAge" />
          </div>
          <div className="mb-4">
            
            <input type="text" className="w-full p-2 border-0 border-b rounded-0 mb-2 border-gray-300" placeholder="userEmail" />
          </div>
          <div className="mb-4">
            
            <input type="email" className="w-full p-2 border-0 border-b rounded-0 mb-2 border-gray-300" placeholder="userPassward" />
          </div>
          <button type="submit" className="bg-green-500 text-white p-2 rounded hover:bg-green-600">Send Message</button>
        </form>
      </section>  





      <Footer />

    </>
  )
}
