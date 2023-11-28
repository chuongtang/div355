import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/userActions";
import { AlertWarning, AlertError } from './Alerts';
import Loader from './Loader';
import LoginTrain from '../assets/LoginTrain.jpg'

const Login = ({ setShowLogin }) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(null);
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("login clicked🚶")
    dispatch(login(email, password));
    userInfo && setMessage("Successfully signed in");
    console.log('\x1b[31m%s\x1b[0m',"userInfoHere", userInfo.name);
  };

  return (
    <section className="fixed  bg-white z-10 mx-8 rounded-3xl shadow-2xl">
      <div className="flex flex-wrap w-full">
        <div className="flex flex-col w-full md:w-1/2">
          <div className="flex flex-col justify-center px-8 pt-8 my-auto md:justify-start md:pt-0 md:px-24 lg:px-32">
            <p className="text-3xl text-center">👋Welcome back</p>
            {message && <AlertWarning message={message} />}
            {error && <AlertError message={error} />}
            {loading && <Loader />}
            <form onSubmit={submitHandler} className="flex flex-col pt-3 md:pt-8">
              <div className="flex flex-col pt-4">
                <div className="flex relative ">
                  <span className=" inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                    <svg
                      width={15}
                      height={15}
                      fill="currentColor"
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z"></path>
                    </svg>
                  </span>

                  <input
                    type="email"
                    name="email"
                    id="email"
                    className=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Enter email"
                    required
                    value={email}
                    onChange={(e) => {
                      !e.target.value.indexOf(".") <= 0
                        ? setEmail(e.target.value)
                        : setEmail("");
                    }}
                  />
                </div>
              </div>
              <div className="flex flex-col pt-4 mb-12">
                <div className="flex relative ">
                  <span className=" inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                    <svg
                      width={15}
                      height={15}
                      fill="currentColor"
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1376 768q40 0 68 28t28 68v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t68-28h32v-320q0-185 131.5-316.5t316.5-131.5 316.5 131.5 131.5 316.5q0 26-19 45t-45 19h-64q-26 0-45-19t-19-45q0-106-75-181t-181-75-181 75-75 181v320h736z"></path>
                    </svg>
                  </span>
                  <input type="password" name="pwd" id="password"
                    className=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    value={password}
                    placeholder="Enter your password"
                    required
                    autoComplete="your current password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="submit"
                  className="w-full rounded-xl px-2 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-gray-100 shadow-md hover:text-black hover:bg-white focus:outline-none focus:ring-2"
                  // disabled={true}
                >
                  Sign in
                </button>
                <button
                  type="submit"
                  className="w-full rounded-xl px-2 py-2 text-base font-semibold text-center text-gray-200 transition duration-200 ease-in bg-orange-400 shadow-md hover:text-white hover:bg-black focus:outline-none focus:ring-2"
                  onClick={() => setShowLogin(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
            <div className="py-2 text-center">
              <p>
                Don't have an account?
                <a href='\register' className="ml-2 text-shadow-sm underline decoration-yellow-500 decoration-2">
                  Register here.
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="w-1/2 h-1/3 pr-4 pt-4 shadow-2xl">
          <img
            className="hidden h-full rounded-lg md:block"
            src={LoginTrain}
          />
        </div>
      </div>;

    </section>

  )
}

export default Login