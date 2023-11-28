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
          {!userInfo && <button className="inline-flex bg-amber-500 border-0 p-2 ml-2 text-white">Login <svg height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd" transform="translate(4 1)"><path d="m2.5 2.5h2v14h-2c-1.1045695 0-2-.8954305-2-2v-10c0-1.1045695.8954305-2 2-2zm4.70224688-1.98665742 4.00000002 1.5c.7806074.29272779 1.2977531 1.03896923 1.2977531 1.87265836v11.22799816c0 .8336891-.5171457 1.5799305-1.2977531 1.8726583l-4.00000002 1.5c-1.03424065.3878403-2.18706499-.1361708-2.57490524-1.1704115-.08420779-.2245541-.12734164-.4624229-.12734164-.7022468v-14.22799816c0-1.1045695.8954305-2 2-2 .2398239 0 .47769277.04313385.70224688.12734164z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><circle cx="6.5" cy="9.5" fill="currentColor" r="1"/></g></svg></button>}
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