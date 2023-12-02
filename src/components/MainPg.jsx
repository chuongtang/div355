import React, { useState, useEffect } from 'react'
import Train from '../assets/FrontPgTrain.png'
import Exec from '../components/Exec'
import Footer from './Footer'
import Login from './Login'
import Register from './Register'
import Meeting from './Meeting'
import Navbar from './Navbar'
import { useTypingText } from './TypingTexts/useTypingTexts'
import { useDispatch, useSelector } from "react-redux";


export const MainPg = ({ stateChanger }) => {
  const [showExec, setShowExec] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showMeeting, setShowMeeting] = useState(false);

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  const { word } = useTypingText(
    ["Conductors", "Engineers", "Trainpersons"], 130, 20
  );
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

              <p className="mt-8 text-base text-black sm:text-xl">Proudly serving  <span className="bg-amber-500 p-1 font-bold text-white">{word}</span> employed by CPKC from Calgary.</p>

              <div className="mt-10 sm:flex sm:items-center sm:space-x-8">

                {/* // ⚠️⚠️⚠️ Keep this button for future built ⬇️ */}
                {!userInfo && <button className="underline decoration-yellow-500 decoration-4 text-shadow-sm inline-flex items-center mt-6 text-base font-semibold transition-all duration-200 sm:mt-0 hover:opacity-80"
                  onClick={() => setShowLogin(true)}>
                  <svg className="w-10 h-10 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path fill="#F97316" stroke="#F97316" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>

                  Log in / Register
                </button>}
                {userInfo && <a href="/tieup" target="_blank" className="underline decoration-yellow-500 decoration-4 text-shadow-lg inline-flex items-center mt-6 text-base text-black sm:text-xl transition-all duration-200 sm:mt-0 hover:opacity-80"> 

                <svg height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" transform="translate(1 4)" className="text-amber-500 animate-ping"><path d="m3.5 3.165h9"/><path d="m4.48122025 6.20339509 1-.01878307c.5127454-.00963092.94259192.36840352 1.00968673.86456969l.00909302.13525035v.9832835c0 .54496455-.4363518.98958934-.98122025.99982364l-1 .01878306c-.5127454.00963093-.94259192-.36840352-1.00968673-.86456968l-.00909302-.13525396v-.98327989c0-.54496455.4363518-.98958935.98122025-.99982364z"/><path d="m2.5.1507576h11c1.1045695 0 2 .8954305 2 2v10.0147186h-13c-1.1045695 0-2-.8954305-2-2v-8.0147186c0-1.1045695.8954305-2 2-2z"/><path d="m8.5 6.165h4"/><path d="m8.5 9.165h4"/><path d="m15 12.1654762c1.3807119 0 2.5-1.1192881 2.5-2.49999998v-6.5h-2"/></g></svg>

                Tie-up guide for conductor</a>}
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
