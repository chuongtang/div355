import React, { useState, useEffect } from 'react'
import Train from '../assets/FrontPgTrain.png'
import Exec from '../components/Exec'
import Footer from './Footer'
import Login from './Login'
import Register from './Register'
import Meeting from './Meeting'
import Navbar from './Navbar'


export const MainPg = ({ stateChanger }) => {
  const [showExec, setShowExec] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showMeeting, setShowMeeting] = useState(false);
  return (
    <div className="bg-gradient-to-b from-gray-400 to-gray-100">
      <Navbar stateChanger={setShowExec} />
      {showExec && <Exec stateChanger={setShowExec} />}
      {showRegister && <Register />}
          {showLogin && <Login setShowLogin={setShowLogin} />}
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

              <p className="mt-8 text-base text-black sm:text-xl">Proudly serving Conductors, Engineers and Trainpersons employed by CPKC from Calgary.</p>

              <div className="mt-10 sm:flex sm:items-center sm:space-x-8">

                {/* // ⚠️⚠️⚠️ Keep this button for future built ⬇️ */}
                <button className="underline decoration-yellow-500 decoration-4 text-shadow-sm inline-flex items-center mt-6 text-base font-semibold transition-all duration-200 sm:mt-0 hover:opacity-80"
                  onClick={() => setShowLogin(true)}>
                  <svg className="w-10 h-10 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path fill="#F97316" stroke="#F97316" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>

                  Log in / Register
                </button>
                {showMeeting && <Meeting setShowMeeting={setShowMeeting} />}
              </div>
            </div>

            <div>
              <img className="w-full" src={Train} alt="" />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
