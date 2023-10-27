import { useState } from 'react'
import Logo from '../assets/Logo.png'
import Meeting from './Meeting'

const Navbar2 = ({ stateChanger }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showMeeting, setShowMeeting] = useState(false);
  return (
    <nav className="flex items-center justify-between flex-wrap p-6">
      {showMeeting && <Meeting setShowMeeting={setShowMeeting} />}
      <div className="flex items-center flex-shrink-0 text-white mr-6 lg:mr-72">
        <img src={Logo} className="h-12 mr-2" alt="Logo" />
      </div>
      <div className="block lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
        >
          <svg
            className={`fill-current animate-pulse h-3 w-3 ${isOpen ? "hidden" : "block"}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
          <svg
            className={`fill-current animate-pulse h-3 w-3 ${isOpen ? "block" : "hidden"}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
          </svg>
        </button>
      </div>
      <div
        className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? "block" : "hidden"}`}
      >
        <div className="text-sm lg:flex-grow">
          <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-5 hover:underline decoration-yellow-500 decoration-2">
            Union documents
          </a>
          <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-5 hover:underline decoration-yellow-500 decoration-2 hover:underline decoration-yellow-500 decoration-2"
            onClick={() => setShowMeeting(true)}>
            Meeting schedule
          </a>
          <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-5 hover:underline decoration-yellow-500 decoration-2">
            Third Link
          </a>
          <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-5 hover:underline decoration-yellow-500 decoration-2">
            Fourth Link
          </a>
        </div>
        <div>
          <button className="inline-flex items-center bg-amber-500 border-0 py-2 px-4 mt-2 text-white" onClick={() => stateChanger(true)}>
            Executives
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar2