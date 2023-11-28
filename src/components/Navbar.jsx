import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/userActions";
import Logo from '../assets/Logo.png'
import Meeting from './Meeting'
import UnderConst from './UnderConst'

const Navbar = ({ stateChanger }) => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };
  const [isOpen, setIsOpen] = useState(false);
  const [showMeeting, setShowMeeting] = useState(false);
  const [showUnderConst, setShowUnderConst] = useState(false);
  return (
    <nav className="flex items-center justify-between flex-wrap p-6">
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
          <button className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-5 hover:underline decoration-yellow-500 decoration-2"
            onClick={() => stateChanger(true)}>
            Executives
          </button>
          <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-5 hover:underline decoration-yellow-500 decoration-2"
            onClick={() => setShowUnderConst(true)}>
            Members Discusion
          </a>
        </div>
        <div>
          {userInfo && <div className="flex"><p className="font-mono font-medium text-shadow-sm text-stroke-sm text-amber-400">Welcome {userInfo.name}</p>

            <button to="/signup" className="flex bg-amber-500 hover:bg-gray-500 text-white p-1 rounded ml-2" onClick={logoutHandler}>
              <svg height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" transform="translate(4 3)"><path d="m10.595 10.5 2.905-3-2.905-3" /><path d="m13.5 7.5h-9" /><path d="m10.5.5-8 .00224609c-1.1043501.00087167-1.9994384.89621131-2 2.00056153v9.99438478c0 1.1045695.8954305 2 2 2h8.0954792" /></g><title>Log out</title></svg>
            </button>
          </div>}
          {!userInfo && <button className="inline-flex bg-amber-500 border-0 p-2 ml-2 text-white">Login <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M1.625 12C1.625 12.4142 1.96079 12.75 2.375 12.75L13.3476 12.75L11.3869 14.4306C11.0724 14.7001 11.036 15.1736 11.3056 15.4881C11.5751 15.8026 12.0486 15.839 12.3631 15.5694L15.8631 12.5694C16.0293 12.427 16.125 12.2189 16.125 12C16.125 11.7811 16.0293 11.573 15.8631 11.4306L12.3631 8.43056C12.0486 8.16099 11.5751 8.19741 11.3056 8.51191C11.036 8.8264 11.0724 9.29988 11.3869 9.56944L13.3476 11.25L2.375 11.25C1.96079 11.25 1.625 11.5858 1.625 12Z" fill="#edeef3"></path> <path d="M9.375 9.75004L9.75328 9.75004C9.49473 9.01645 9.6241 8.16876 10.1667 7.53576C10.9754 6.59228 12.3958 6.48301 13.3393 7.29171L16.8393 10.2917C17.338 10.7192 17.625 11.3432 17.625 12C17.625 12.6569 17.338 13.2809 16.8393 13.7084L13.3393 16.7084C12.3958 17.5171 10.9754 17.4078 10.1667 16.4643C9.6241 15.8313 9.49473 14.9836 9.75328 14.25L9.375 14.25L9.375 16C9.375 18.8284 9.375 20.2426 10.2537 21.1213C11.1324 22 12.5466 22 15.375 22L16.375 22C19.2034 22 20.6176 22 21.4963 21.1213C22.375 20.2426 22.375 18.8284 22.375 16L22.375 8C22.375 5.17158 22.375 3.75736 21.4963 2.87868C20.6176 2 19.2034 2 16.375 2L15.375 2C12.5466 2 11.1324 2 10.2537 2.87868C9.375 3.75736 9.375 5.17157 9.375 8L9.375 9.75004Z" fill="#edeef3"></path> </g></svg></button>}
        </div>
        {/* {userInfo && <div>
          <button className="inline-flex bg-amber-100 border-0 p-2 ml-2 text-amber-500" onClick={() => console.log("user clicked")}>
            <svg height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg"><path d="m7.5.5c1.65685425 0 3 1.34314575 3 3v2c0 1.65685425-1.34314575 3-3 3s-3-1.34314575-3-3v-2c0-1.65685425 1.34314575-3 3-3zm7 14v-.7281753c0-3.1864098-3.6862915-5.2718247-7-5.2718247s-7 2.0854149-7 5.2718247v.7281753c0 .5522847.44771525 1 1 1h12c.5522847 0 1-.4477153 1-1z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" transform="translate(3 2)" /></svg>
            {userInfo.name}
          </button>
        </div>} */}
      </div>
    </nav>
  )
}

export default Navbar