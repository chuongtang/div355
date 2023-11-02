import { useRef, useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  const [errorMsg, setErrorMsg] = useState("");
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const register = (email, password) =>
    supabase.auth.signUp({ email, password });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !passwordRef.current?.value ||
      !emailRef.current?.value ||
      !confirmPasswordRef.current?.value
    ) {
      setErrorMsg("Please fill all the fields");
      return;
    }
    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      setErrorMsg("Passwords doesn't match");
      return;
    }
    try {
      setErrorMsg("");
      setLoading(true);
      const { data, error } = await register(
        emailRef.current.value,
        passwordRef.current.value
      );
      if (!error && data) {
        setMsg(
          "Registration Successful. Check your email to confirm your account"
        );
      }
    } catch (error) {
      setErrorMsg("Error in Creating Account");
    }
    setLoading(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="rounded-lg px-8 py-6 mx-4 mt-4 text-left bg-white shadow-lg md:w-1/3 lg:w-1/3 sm:w-1/3">
        <div className="flex justify-center">
          <svg width="32" height="32" viewBox="0 0 50 50"><path fill="#F97316" d="m34.641 37.807l-.113-.216l.057-.081l.057-.081a13.356 13.356 0 0 0 2.861-1.604c.854-.64 1.426-1.574 1.721-2.809l.215-.988V6.507c0-.616-.184-1.255-.547-1.905a7.309 7.309 0 0 0-1.365-1.777a7.839 7.839 0 0 0-1.824-1.311C35.027 1.17 34.383 1 33.764 1H15.499c-.583 0-1.212.16-1.885.487a7.813 7.813 0 0 0-1.854 1.257a6.941 6.941 0 0 0-1.39 1.713c-.364.645-.547 1.267-.547 1.89v25.901c0 .436.115.891.327 1.363c.22.474.492.917.818 1.331c.326.426.685.807 1.067 1.15s.753.627 1.118.844c.176.074.499.188.957.333c.448.144.658.251.624.321L7.258 48.936h4.361l5.457-7.909h15.055l5.451 7.909H42l-7.359-11.129zM20.294 3.179c0-.183.087-.37.273-.575c.179-.199.36-.295.545-.295h6.982c.07 0 .221.07.438.213c.215.146.324.291.324.436V5.63c0 .183-.092.351-.271.49c-.184.15-.35.226-.49.226H21.06l-.222-.173a1.991 1.991 0 0 1-.353-.301a.546.546 0 0 1-.191-.401V3.179zm-7.037 7.472c0-.363.086-.719.247-1.066c.162-.345.373-.66.627-.955c.256-.292.556-.521.898-.704a2.26 2.26 0 0 1 1.068-.274H33.06c.322 0 .65.076.977.214c.328.146.627.35.902.602c.274.252.489.532.655.822c.162.284.242.596.242.923v5.783c0 .328-.088.638-.27.95a2.945 2.945 0 0 1-.709.827a4.079 4.079 0 0 1-.928.564a2.25 2.25 0 0 1-.979.22H16.206l-.276-.049a1.65 1.65 0 0 1-.329-.113c-.615-.106-1.159-.435-1.633-.982c-.474-.546-.711-1.144-.711-1.797v-4.965zm5.049 22.526c-.563.581-1.268.871-2.1.871c-.837 0-1.52-.29-2.05-.871c-.526-.58-.789-1.294-.789-2.131c0-.763.274-1.424.821-1.986c.544-.565 1.217-.851 2.018-.851c.832 0 1.536.27 2.1.789c.564.533.845 1.226.845 2.105c0 .801-.281 1.494-.845 2.074zm12.489 0c-.562-.58-.848-1.294-.848-2.131c0-.838.299-1.515.9-2.048a3.124 3.124 0 0 1 2.104-.789c.83 0 1.516.285 2.043.851c.525.562.793 1.224.793 1.986c0 .837-.275 1.551-.82 2.131c-.549.581-1.236.871-2.076.871c-.834 0-1.534-.29-2.096-.871z" /></svg>
        </div>
        <h3 className="text-2xl font-bold text-center">Join us</h3>
        <form action>
          <div className="mt-4">
            <div>
              <label className="block" htmlFor="Name">Name<label>
                <input type="text" placeholder="Name" className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
              </label></label></div>
            <div className="mt-4">
              <label className="block" htmlFor="email">Email<label>
                <input type="text" placeholder="Email" className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
              </label></label></div>
            <div className="mt-4">
              <label className="block">Password<label>
                <input type="password" placeholder="Password" className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
              </label></label></div>
            <div className="mt-4">
              <label className="block">Confirm Password<label>
                <input type="password" placeholder="Password" className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
              </label></label></div>
            <span className="text-xs text-red-400">Password must be same!</span>
            <div className="flex">
              <button className="w-full px-6 py-2 mt-4 text-white bg-yellow-600 rounded-lg hover:bg-yellow-800">Create
                Account</button>
            </div>
            <div className="mt-6 text-grey-dark">
              Already have an account?
              <a className="ml-2 text-yellow-600 hover:underline" href="#">
                Log in
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;