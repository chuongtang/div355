import React, {useState} from 'react'
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
            <a href="/" title="" className="flex">
              <img className="animate-pulse w-auto h-16" src={Logo} alt="Logo" />
            </a>

          </div>

          <button type="button" className="inline-flex p-1 text-black transition-all duration-200 border border-black rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100"
          onClick={()=>openHamMenu()}>
            {/* <!-- Menu open: "hidden", Menu closed: "block" --> */}
            {!showHamMenu?<svg className="block w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>:<svg height="21" viewBox="0 0 20 20" width="21" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" transform="translate(5 5)"><path d="m10.5 10.5-10-10z"/><path d="m10.5.5-10 10"/></g></svg>}

            {/* <!-- Menu open: "block", Menu closed: "hidden" --> */}
            {!showHamMenu &&<svg className="hidden w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>}
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
    {showHamMenu &&<HamMenu/>}
    </div>
  )
}

export default Header