import React from 'react'
import Logo from '../assets/Logo.png'

const Footer = () => {
  return (
    <footer aria-label="Site Footer" className="bg-gray-50">
  <div className="mx-auto px-4 py-4 sm:px-6 lg:px-8">
    <div className="sm:flex sm:items-center sm:justify-between">
      <div className="flex justify-center text-teal-600 sm:justify-start">
      <a href="/" title="TCRC" className="flex">
                <img className="w-auto h-10" src={Logo} alt="Logo" />
              </a>
      </div>

      <p className="text-center text-sm text-gray-500 lg:mt-0 lg:text-right">
        Copyright &copy; 2023. Built by <a href="https://chuongtang.com"
        className='underline italic decoration-yellow-500 decoration-4 text-shadow-sm'
        target="_blank">an avid member</a>
      </p>
    </div>
  </div>
</footer>

  )
}

export default Footer