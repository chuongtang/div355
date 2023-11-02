import React from 'react'
import UnderConstruc from '../assets/UnderConstruc.jpg'

const UnderConst = ({ setShowUnderConst }) => {
  return (
    <div className="fixed inset-x-0 bottom-0 p-4 z-index: 50">
      <div className="relative max-w-xl rounded-lg bg-gray-300 p-6 shadow-sm">

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <img
            alt="Page Under construction"
            src={UnderConstruc}
            className="h-full w-full rounded-lg object-cover"
          />

          <div>
            <h2 className="text-lg font-medium">
              Thanks for visiting!
            </h2>

            <p className="mt-4 text-sm text-gray-500">
              Please com back later. This section is being built and will be completed soon
            </p>

            <div className="mt-6 sm:text-right">
              <a
                href="#"
                className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
                onClick={() => setShowUnderConst(false)}
              >
                OK
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UnderConst