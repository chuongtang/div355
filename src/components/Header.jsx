import React, { useState } from 'react'
import Logo from '../assets/Logo.png'
import HamMenu from './HamMenu'

const Header = () => {

  const [showHamMenu, setShowHamMenu] = useState(false)

  const openHamMenu = () => {
    // e.preventDefault();
    console.log('The link was clicked.');
    setShowHamMenu(!showHamMenu)
  }
  return (
    <div>
      <header className="">
        <div className="px-4 mx-auto sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <div className="flex-shrink-0">
              <a href="/" title="TCRC" className="flex">
                <img className="mt-4 animate-pulse w-auto h-16" src={Logo} alt="Logo" />
              </a>

            </div>

            <button type="button" className="inline-flex p-1 text-black transition-all duration-200 border border-black rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100"
              onClick={() => openHamMenu()}>

              {!showHamMenu ? <svg className="block w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg> : <svg height="21" viewBox="0 0 20 20" width="21" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" transform="translate(5 5)"><path d="m10.5 10.5-10-10z" /><path d="m10.5.5-10 10" /></g></svg>}
            </button>

            <div className="hidden ml-auto lg:flex lg:items-center lg:justify-center lg:space-x-10">
              <a href="#" title="" className="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80" onClick={() => togglePopUp()}> News </a>

              <a href="#" title="" className="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80" onClick={() => togglePopUp()}> Events </a>

              <a href="#" title="" className="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80" onClick={() => togglePopUp()}> Members </a>

              <a href="#" title="" className="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80" onClick={() => togglePopUp()}> Photos </a>
              <a href="#" title="" className="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80" onClick={() => togglePopUp()}> Crew Change </a>
              <a href="#" title="" className="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80" onClick={() => togglePopUp()}> 7-day bid </a>

              <div className="w-px h-8 bg-black/20"></div>
              <div
                className="group relative inline-block rounded-xl bg-[#F59E0B] px-4 py-2 text-gray-100"
              >
                <span className="text-sm font-medium transition-opacity group-hover:opacity-0">
                  Register
                </span>

                <div
                  className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 transition-opacity group-hover:opacity-100"
                >
                  <svg height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" transform="translate(1 2)"><path d="m7.5.5c1.65685425 0 3 1.34314575 3 3v2c0 1.65685425-1.34314575 3-3 3s-3-1.34314575-3-3v-2c0-1.65685425 1.34314575-3 3-3zm7 14v-.7281753c0-3.1864098-3.6862915-5.2718247-7-5.2718247s-7 2.0854149-7 5.2718247v.7281753c0 .5522847.44771525 1 1 1h12c.5522847 0 1-.4477153 1-1z" /><path d="m11.5199327.67783074c1.1547685.41741154 1.9800673 1.52341097 1.9800673 2.82216926v1c0 1.29707884-.8475766 2.5813505-2 3 .6742649-.91876977 1.0109204-2.0857069 1.0099664-3.50081137s-.3309652-2.52222377-.9900337-3.32135789zm4.9800673 14.82216926h1c.5522847 0 1-.4477153 1-1 0-.2427251 0-.4854502 0-.7281753 0-2.1698712-1.7094418-3.82917861-3.8465775-4.66705336 0 0 2.8465775 2.39522866 1.8465775 6.39522866z" fill="currentColor" /></g></svg>
                </div>
              </div>

              {/* Border */}

              <div
                className="group relative inline-block rounded-xl border border-[#F59E0B] px-4 py-2 text-[#F59E0B]"
              >
                <span className="text-sm font-medium transition-opacity group-hover:opacity-0">
                  Log in
                </span>

                <div
                  className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 transition-opacity group-hover:opacity-100"
                >

                  <svg height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd" transform="translate(4 1)"><path d="m2.5 8.5-.00586729-1.99475098c-.00728549-4.00349935 1.32800361-6.00524902 4.00586729-6.00524902s4.0112203 2.00174967 4.0000699 6.00524902v1.99475098m-8.0000699 0h8.0225317c1.0543618 0 1.9181652.81587779 1.9945143 1.8507377l.0054778.1548972-.0169048 6c-.0031058 1.1023652-.8976224 1.9943651-1.999992 1.9943651h-8.005627c-1.1045695 0-2-.8954305-2-2v-6c0-1.1045695.8954305-2 2-2z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" /><circle cx="6.5" cy="13.5" fill="currentColor" r="1.5" /></g></svg>


                </div>
              </div>

            </div>
          </div>
        </div>
      </header>
      {showHamMenu && <HamMenu />}
    </div>
  )
}

export default Header