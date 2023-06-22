import React, { useState } from 'react'
import Logo from '../assets/Logo.png'
import HamMenu from './HamMenu'

const Header = ({ stateChanger }) => {

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
              </svg> : <svg height="21" viewBox="0 0 20 20" width="21" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" transform="translate(5 5)"><path d="m10.5 10.5-10-10z" /><path d="m10.5.5-10 10" /></g></svg>}
            </button>

            <div className="hidden ml-auto lg:flex lg:items-center lg:justify-center lg:space-x-10">
              <a href="#" title="" className="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80" onClick={() => togglePopUp()}> News </a>

              <a href="#" title="" className="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80" onClick={() => togglePopUp()}> Events </a>

              <a href="#" title="" className="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80" onClick={() => togglePopUp()}> Members </a>

              <a href="#" title="" className="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80" onClick={() => togglePopUp()}> Crew Change </a>
              <a href="#" title="" className="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80" onClick={() => togglePopUp()}> 7-day bid </a>

              <div className="w-px h-8 bg-black/20"></div>
              <a href="#" title="" className="underline decoration-yellow-500 decoration-4 text-shadow-sm text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80" onClick={() => stateChanger(true)}> Local Executives </a>

            </div>
          </div>
        </div>
      </header>
      {showHamMenu && <HamMenu />}
    </div>
  )
}

export default Header