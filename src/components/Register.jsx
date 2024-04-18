import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../actions/userActions";
import { AlertWarning, AlertError } from './Alerts';
import Loader from './Loader';
import RegTrain from "../assets/RegTrain.webp"
// import Logo from '../images/LOGO.jpg'


const Register = () => {

  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);
  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;

  console.log('userRegister from selector', error)

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Confirm passwords do not match");
      // set timer to clear message
      setTimeout(() => {
        setMessage("");
      }, 3000);
    } else {
      dispatch(register(username, email, password));
    }

  };

  return (
    <div className="flex flex-col min-h-screen ">
      <section className="relative py-16 before:absolute before:inset-0 before:w-full before:h-[50%] before:bg-gray-200">
        <div className="relative container m-auto px-6 text-gray-500 md:px-12 xl:px-40">

          <div className="m-auto space-y-8 md:w-8/12 lg:w-full">

            {/* <img src={Logo} loading="lazy" className="w-48 ml-4" alt="inselfView logo" /> */}
            <div className="rounded-xl border bg-opacity-50 backdrop-blur-2xl bg-white shadow-xl">
              <div className="lg:grid lg:grid-cols-2">
                <div className="rounded-lg lg:block" hidden>
                  <img src={RegTrain} className="rounded-l-xl object-cover" loading="lazy" height="" width="" alt="Key board" />
                </div>
                <div className="p-6 sm:p-16">

                  <h2 className="flex mb-8 text-2xl text-cyan-900 font-bold">
                    <svg width="32" height="32" viewBox="0 0 50 50"><path fill="#F97316" d="m34.641 37.807l-.113-.216l.057-.081l.057-.081a13.356 13.356 0 0 0 2.861-1.604c.854-.64 1.426-1.574 1.721-2.809l.215-.988V6.507c0-.616-.184-1.255-.547-1.905a7.309 7.309 0 0 0-1.365-1.777a7.839 7.839 0 0 0-1.824-1.311C35.027 1.17 34.383 1 33.764 1H15.499c-.583 0-1.212.16-1.885.487a7.813 7.813 0 0 0-1.854 1.257a6.941 6.941 0 0 0-1.39 1.713c-.364.645-.547 1.267-.547 1.89v25.901c0 .436.115.891.327 1.363c.22.474.492.917.818 1.331c.326.426.685.807 1.067 1.15s.753.627 1.118.844c.176.074.499.188.957.333c.448.144.658.251.624.321L7.258 48.936h4.361l5.457-7.909h15.055l5.451 7.909H42l-7.359-11.129zM20.294 3.179c0-.183.087-.37.273-.575c.179-.199.36-.295.545-.295h6.982c.07 0 .221.07.438.213c.215.146.324.291.324.436V5.63c0 .183-.092.351-.271.49c-.184.15-.35.226-.49.226H21.06l-.222-.173a1.991 1.991 0 0 1-.353-.301a.546.546 0 0 1-.191-.401V3.179zm-7.037 7.472c0-.363.086-.719.247-1.066c.162-.345.373-.66.627-.955c.256-.292.556-.521.898-.704a2.26 2.26 0 0 1 1.068-.274H33.06c.322 0 .65.076.977.214c.328.146.627.35.902.602c.274.252.489.532.655.822c.162.284.242.596.242.923v5.783c0 .328-.088.638-.27.95a2.945 2.945 0 0 1-.709.827a4.079 4.079 0 0 1-.928.564a2.25 2.25 0 0 1-.979.22H16.206l-.276-.049a1.65 1.65 0 0 1-.329-.113c-.615-.106-1.159-.435-1.633-.982c-.474-.546-.711-1.144-.711-1.797v-4.965zm5.049 22.526c-.563.581-1.268.871-2.1.871c-.837 0-1.52-.29-2.05-.871c-.526-.58-.789-1.294-.789-2.131c0-.763.274-1.424.821-1.986c.544-.565 1.217-.851 2.018-.851c.832 0 1.536.27 2.1.789c.564.533.845 1.226.845 2.105c0 .801-.281 1.494-.845 2.074zm12.489 0c-.562-.58-.848-1.294-.848-2.131c0-.838.299-1.515.9-2.048a3.124 3.124 0 0 1 2.104-.789c.83 0 1.516.285 2.043.851c.525.562.793 1.224.793 1.986c0 .837-.275 1.551-.82 2.131c-.549.581-1.236.871-2.076.871c-.834 0-1.534-.29-2.096-.871z" /></svg>
                    Thanks for joining</h2>
                  {message && <AlertWarning message={message} />}
                  {error && <AlertError message={error} />}
                  {loading && <Loader />}
                  <form onSubmit={submitHandler} className="space-y-8">

                    <div className="space-y-2">
                      <label htmlFor="name" className="text-gray-700">User Name</label>
                      <input type="text" id="name"
                        className="block w-full px-4 py-3 rounded-md border border-gray-300 text-gray-600 transition duration-300 focus:ring-2 focus:ring-sky-300 focus:outline-none invalid:ring-2 invalid:ring-red-400"
                        placeholder="Enter user name"
                        required
                        value={username}
                        onChange={(e) => setUserName(e.target.value)} />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-gray-700">Email</label>
                      <input type="email" name="email" id="email"
                        className="block w-full px-4 py-3 rounded-md border border-gray-300 text-gray-600 transition duration-300 focus:ring-2 focus:ring-sky-300 focus:outline-none invalid:ring-2 invalid:ring-red-400"
                        placeholder="Enter your email address"
                        required
                        value={email}
                        onChange={(e) => {
                          !e.target.value.indexOf(".") <= 0
                            ? setEmail(e.target.value)
                            : setEmail("");
                        }} />
                    </div>

                    <div>
                      <div className="flex items-center justify-between">
                        <label htmlFor="pwd" className="text-gray-700">Password</label>
                      </div>
                      <input type="password" name="pwd" id="pwd"
                        className="block w-full px-4 py-3 rounded-md border border-gray-300 text-gray-600 transition duration-300
                        focus:ring-2 focus:ring-sky-300 focus:outline-none invalid:ring-2 invalid:ring-red-400"
                        value={password}
                        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                        title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"
                        autoComplete="new password"
                        onChange={(e) => setPassword(e.target.value)} />
                    </div>

                    <div>
                      <div className="flex items-center justify-between">
                        <label htmlFor="confirmPassword" className="text-gray-700">Confirm Password</label>
                      </div>
                      <input type="password" name="confirmpwd" id="confirmpwd"
                        className="block w-full px-4 py-3 rounded-md border border-gray-300 text-gray-600 transition duration-300
                        focus:ring-2 focus:ring-sky-300 focus:outline-none invalid:ring-2 invalid:ring-red-400"
                        value={confirmPassword}
                        autoComplete="retype password"
                        onChange={(e) => setConfirmPassword(e.target.value)} />
                    </div>
                    <div className="flex overflow-x-auto items-center p-1  text-sm text-gray-600 bg-gray-500/5 rounded-xl dark:bg-gray-500/20">
                      <button role="tab" type="submit"
                        className="flex whitespace-nowrap items-center h-8 px-5 font-medium rounded-lg outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-inset text-yellow-600 shadow bg-white dark:text-white dark:bg-yellow-600"
                        aria-selected="">
                        Continue
                      </button>

                      <a href='/' role="tab"
                        className="flex ml-auto pr-2 items-center h-8 float-right font-medium rounded-lg outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-inset hover:text-gray-800 focus:text-yellow-600 dark:text-gray-400 dark:hover:text-gray-300 dark:focus:text-gray-400">
                        Cancel
                        <svg height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg"><path d="m5.66116524 3.36827202c5.18469776-.47094658 8.51890836 1.5289737 9.99999996 6-2.8248102-3.14044041-6.34158528-3.71816233-9.99999996-2v2.99999998l-5-4.99999998 5-5z" fill="orange" stroke="orange" strokeLinecap="round" strokeLinejoin="round" transform="translate(2.839 4.132)" /></svg>
                      </a>
                    </div>
                    {/* <button type="submit"
                      className="py-3 px-6 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                    >
                      <span className="text-amber-500">Continue</span>
                    </button>
                    <a href="#" className="ml-4 text-sm font-semibold leading-6 text-gray-900">Cancel <span aria-hidden="true">→</span></a> */}

                  </form>
                </div>
              </div>
            </div>
            {/* <div className="text-center space-x-4">
              <span>&copy; InSelfView</span>
              <a href="/" className="text-sm hover:text-blue-700">Home</a>
              <a href="/#learnMore" className="text-sm hover:text-blue-700">Learn More</a>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Register;