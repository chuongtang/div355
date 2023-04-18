import React, { useState, useEffect } from 'react'
import Logo from '../assets/logo.png'
import Train from '../assets/FrontPgTrain.png'
import PopUp from '../components/PopUp'
import Exec from '../components/Exec'


export const MainPg = () => {
  const [showPopup, setShowPopup] = useState(false);
  const togglePopUp = () => {
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false)
    }, 3000);
  }
  return (
    // <div className="">
    <div className="bg-gradient-to-b from-blue-50 to-bue-100">
      <header className="">
        <div className="px-4 mx-auto sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <div className="flex-shrink-0">
              <a href="/" title="" className="flex">
                <img className="animate-pulse w-auto h-16" src={Logo} alt="Logo" />
              </a>

            </div>

            <button type="button" className="inline-flex p-1 text-black transition-all duration-200 border border-black rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100">
              {/* <!-- Menu open: "hidden", Menu closed: "block" --> */}
              <svg className="block w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>

              {/* <!-- Menu open: "block", Menu closed: "hidden" --> */}
              <svg className="hidden w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>

            <div className="hidden ml-auto lg:flex lg:items-center lg:justify-center lg:space-x-10">
              <a href="#" title="" className="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80" onClick={() => togglePopUp()}> News </a>

              <a href="#" title="" className="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80" onClick={() => togglePopUp()}> Events </a>

              <a href="#" title="" className="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80" onClick={() => togglePopUp()}> Members </a>

              <a href="#" title="" className="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80" onClick={() => togglePopUp()}> Photos </a>
              <a href="#" title="" className="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80" onClick={() => togglePopUp()}> Crew Change </a>
              <a href="#" title="" className="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80" onClick={() => togglePopUp()}> 7-day bid </a>

              <div className="w-px h-5 bg-black/20"></div>

              <a href="#" title="" className="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80" onClick={() => togglePopUp()}> Executives </a>

              <a href="#" title="" className="inline-flex items-center justify-center px-5 py-2.5 text-base font-semibold text-black border-2 border-black hover:bg-black hover:text-white transition-all duration-200 focus:bg-black focus:text-white" role="button"> Log in </a>
            </div>
          </div>
        </div>
      </header>
      {showPopup && <PopUp />}
      <Exec />
      <section className="py-10 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h1 className="text-4xl font-bold text-black sm:text-6xl lg:text-7xl">
                TCRC Calgary
                <div className="relative inline-flex">
                  <span className="absolute inset-x-0 bottom-0 border-b-[30px] border-[#BBD1E7]"></span>
                  <h1 className="mx-8 relative text-4xl font-bold text-black sm:text-6xl lg:text-7xl"> Div. 355</h1>
                </div>
              </h1>

              <p className="mt-8 text-base text-black sm:text-xl">Proudly serving Conductors, Engineers and Trainpersons employed by Canadian Pacific from Calgary.</p>

              <div className="mt-10 sm:flex sm:items-center sm:space-x-8">
                <a href="#" title="" className="rounded-lg inline-flex items-center justify-center px-6 py-4 text-base font-semibold text-white transition-all duration-200 bg-orange-500 hover:bg-orange-600 focus:bg-orange-600" role="button" onClick={() => togglePopUp()}> Member log in </a>

                <a href="#" title="" className="inline-flex items-center mt-6 text-base font-semibold transition-all duration-200 sm:mt-0 hover:opacity-80">
                  <svg className="w-10 h-10 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path fill="#F97316" stroke="#F97316" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  
                  Register
                </a>
              </div>
            </div>

            <div>
              <img className="w-full" src={Train} alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
