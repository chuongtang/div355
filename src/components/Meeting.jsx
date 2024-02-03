import React from 'react'

const Meeting = ({ setShowMeeting }) => {
    return (
        <div className="fixed inset-0 z-10 overflow-y-auto">
            <div
                className="fixed inset-0 w-full h-full bg-black opacity-40"
                onClick={() => setShowMeeting(false)}
            ></div>
            <div className="flex items-center min-h-screen px-4 py-8">
                <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
                    <div className="mt-2 sm:flex">
                        <div className="sm:ml-4 sm:text-left">
                            <h4 className="text-lg font-medium text-gray-800">
                                Meeting time: 12pm
                            </h4>
                            <p className="my-2 text-gray-500">
                                Location: Crossroads Community Association
                                <br></br>Vista Heights - Maryland Heights
                                1803 - 14 Ave NE
                            </p>
                            <ul class="list-disc list-inside">
                                <li>Jan - 09th, 2024</li>
                                <li>Feb - 13th, 2024</li>
                                <li>Mar - 12th, 2024</li>
                                <li>Apr - 09th, 2024</li>
                                <li>May - 14th, 2024</li>
                                <li>Jun - 11th, 2024</li>
                                <li>Jul - 09th, 2024</li>
                                <li>Aug - 13th, 2024</li>
                                <li>Sep - 10th, 2024</li>
                                <li>Oct - 08th, 2024*</li>
                                <li>Nov - 14th, 2024</li>
                                <li>Dec - 10th, 2024</li>
                                
                            </ul>
                            <div className="items-center gap-2 mt-3 sm:flex">
                                <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
                                    onClick={() =>
                                        setShowMeeting(false)
                                    }>
                                    <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                        OK
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Meeting;