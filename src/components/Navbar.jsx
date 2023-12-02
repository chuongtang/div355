import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/userActions";
import Logo from '../assets/Logo.png'
import Meeting from './Meeting'
import UnderConst from './UnderConst'
import {AlertInfo} from './Alerts'

const Navbar = ({ stateChanger }) => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };

  const AskToLogin = ()=>{
    setMessage("Please log in to view");
    setTimeout(() => {
      setMessage('');
    }, 2000);
  }
  const [isOpen, setIsOpen] = useState(false);
  const [Message, setMessage] = useState('');
  const [showMeeting, setShowMeeting] = useState(false);
  const [showUnderConst, setShowUnderConst] = useState(false);
  return (
    <nav className="flex items-center justify-between flex-wrap p-6">
      {Message && <AlertInfo message = {Message} />}
      {showMeeting && <Meeting setShowMeeting={setShowMeeting} />}
      {showUnderConst && <UnderConst setShowUnderConst={setShowUnderConst} />}
      <div className="flex items-center flex-shrink-0 text-white mr-6 lg:mr-72">
        <img src={Logo} className="h-12 mr-2 animate-pulse" alt="Logo" />
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
          <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-5 hover:underline decoration-yellow-500 decoration-2 hover:underline decoration-yellow-500 decoration-2"
            onClick={() => setShowMeeting(true)}>
            Meeting schedule
          </a>
          <a href="https://drive.google.com/drive/folders/1ApGqFGzzXVFPvYICfUenm4Y3z3OQmYT6?usp=drive_link" target="_blank" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-5 hover:underline decoration-yellow-500 decoration-2"
          >
            Union documents
          </a>
          {userInfo ? <button className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-5 hover:underline decoration-yellow-500 decoration-2"
            onClick={() => stateChanger(true)}>
            Executives
          </button> : <button className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-5 hover:underline decoration-yellow-500 decoration-2"
            onClick={AskToLogin}>
            Executives
          </button>}

          <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-5 hover:underline decoration-yellow-500 decoration-2"
            onClick={() => setShowUnderConst(true)}>
            Members Discusion
          </a>
        </div>
        <div>
          {userInfo && <div className="flex"><p className="font-mono font-medium text-shadow-sm text-stroke-sm text-amber-400">Welcome {userInfo.name}</p>

            <button to="/signup" className="flex bg-amber-500 hover:bg-gray-500 text-white p-1 rounded ml-2" onClick={logoutHandler}>
              <svg height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" transform="translate(4 3)"><path d="m10.595 10.5 2.905-3-2.905-3" /><path d="m13.5 7.5h-9" /><path d="m10.5.5-8 .00224609c-1.1043501.00087167-1.9994384.89621131-2 2.00056153v9.99438478c0 1.1045695.8954305 2 2 2h8.0954792" /></g><title>Log out</title></svg>
            </button>
          </div>}
          {!userInfo && <p className="inline-flex bg-amber-500 border-0 rounded-lg p-2 ml-2 text-white">Welcome Guest
            <svg width="24px" height="24px" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#000" strokeWidth="0.05600000000000001"></g><g id="SVGRepo_iconCarrier"> <path d="M14 9C12.067 9 10.5 10.567 10.5 12.5C10.5 14.433 12.067 16 14 16C15.933 16 17.5 14.433 17.5 12.5C17.5 10.567 15.933 9 14 9Z" fill="#f8f2f2"></path> <path d="M10.7001 17C9.84 17 8.904 17.6024 8.87933 18.6719C8.86205 19.421 8.99609 20.5246 9.77391 21.4475C10.5705 22.3927 11.9142 23 14 23C16.0858 23 17.4295 22.3927 18.2261 21.4475C19.0039 20.5246 19.1379 19.421 19.1207 18.6719C19.096 17.6024 18.16 17 17.2999 17H10.7001Z" fill="#f8f2f2"></path> <path d="M18.8965 4H20.25C21.7688 4 23 5.23122 23 6.75V23.25C23 24.7688 21.7688 26 20.25 26H7.75C6.23122 26 5 24.7688 5 23.25V6.75C5 5.23122 6.23122 4 7.75 4H9.10352C9.42998 2.84575 10.4912 2 11.75 2H16.25C17.5088 2 18.57 2.84575 18.8965 4ZM9.10352 5.5H7.75C7.05964 5.5 6.5 6.05964 6.5 6.75V23.25C6.5 23.9404 7.05964 24.5 7.75 24.5H20.25C20.9404 24.5 21.5 23.9404 21.5 23.25V6.75C21.5 6.05964 20.9404 5.5 20.25 5.5H18.8965C18.57 6.65425 17.5088 7.5 16.25 7.5H11.75C10.4912 7.5 9.42998 6.65425 9.10352 5.5ZM10.5 4.75C10.5 5.44036 11.0596 6 11.75 6H16.25C16.9404 6 17.5 5.44036 17.5 4.75C17.5 4.05964 16.9404 3.5 16.25 3.5H11.75C11.0596 3.5 10.5 4.05964 10.5 4.75Z" fill="#f8f2f2"></path> </g></svg></p>}
        </div>
        {/* {userInfo && <div>
          <button className="inline-flex bg-amber-100 border-0 p-2 ml-2 text-amber-500" onClick={() => console.log("user clicked")}>
            <svg height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg"><path d="m7.5.5c1.65685425 0 3 1.34314575 3 3v2c0 1.65685425-1.34314575 3-3 3s-3-1.34314575-3-3v-2c0-1.65685425 1.34314575-3 3-3zm7 14v-.7281753c0-3.1864098-3.6862915-5.2718247-7-5.2718247s-7 2.0854149-7 5.2718247v.7281753c0 .5522847.44771525 1 1 1h12c.5522847 0 1-.4477153 1-1z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" transform="translate(3 2)" /></svg>
            {userInfo.name}
          </button>
        </div>} */}
      </div>
    </nav>
  )
}

export default Navbar