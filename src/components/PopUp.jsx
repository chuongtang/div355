import React from 'react'
import Track from '../assets/Track.png'

const PopUp = () => {
  return (
    <div className="m-4 relative rounded-lg border border-gray-200 shadow-lg">
      <button
        className="absolute -top-1 -right-1 rounded-full border border-gray-300 bg-gray-100 p-1"
      >
        <span className="sr-only">Close</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      <div className="flex items-center gap-4 p-2">
        <img
          alt="Logo"
          src={Track}
          className="h-16"
        />

        <div>
          <p className="font-medium text-gray-900">Demonstration Only</p>

          <p className="line-clamp-1 text-sm text-gray-500">
            Link will be updated once web site is approved
          </p>
        </div>
      </div>
    </div>

  )
}

export default PopUp;