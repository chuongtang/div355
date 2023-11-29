import React from 'react'

const Tieup = () => {
  return (

    <section>
      <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div
          className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16"
        >
          <div
            className="mx-auto max-w-lg text-center lg:mx-0 ltr:lg:text-left rtl:lg:text-right"
          >
            <h2 className="text-3xl font-bold sm:text-4xl">Reference for tie-up</h2>

            <p className="mt-4 text-gray-600">
              For full CMC tie-up guide, click <a className="text-amber-500" href="/tieup/full.pdf" target="_blank">here</a>
            </p>
            {/* 
            <a
              href="#"
              className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
            >
              Get Started Today
            </a> */}
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            <a
              className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
              href="/tieup/lengrunallowance.pdf"
              target="_blank"
            >
              <span className="inline-block rounded-lg bg-gray-50 p-3">
                <svg height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg"><path d="m2.49999999 1.5h-1c-.55228475 0-1 .44771525-1 1v8c0 .5522847.44771525 1 1 1h1c.55228475 0 1-.4477153 1-1v-8c0-.55228475-.44771525-1-1-1zm13.00000001 0h-1c-.5522848 0-1 .44771525-1 1v8c0 .5522847.4477152 1 1 1h1c.5522847 0 1-.4477153 1-1v-8c0-.55228475-.4477153-1-1-1zm-5-1h-4.00000001c-.55228475 0-1 .44771525-1 1v10c0 .5522847.44771525 1 1 1h4.00000001c.5522847 0 1-.4477153 1-1v-10c0-.55228475-.4477153-1-1-1z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" transform="translate(2 4)" /></svg>
              </span>

              <h2 className="mt-2 font-bold">Length of Run Allowance</h2>

              <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                RUN ALLOWANCE for Employees on trains on which no Brake person is employed.
              </p>
            </a>

            <a
              className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
              href="/tieup/worktrain.pdf"
              target="_blank"
            >
              <span className="inline-block rounded-lg bg-gray-50 p-3">
              <svg height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" transform="translate(2 3)"><path d="m5.5.5h6c1.1045695 0 2 .8954305 2 2v10c0 1.1045695-.8954305 2-2 2h-6c-1.1045695 0-2-.8954305-2-2v-10c0-1.1045695.8954305-2 2-2zm8 2.5h1c1.1045695 0 2 .8954305 2 2v5c0 1.1045695-.8954305 2-2 2h-1z"/><path d="m.5 3h1c1.1045695 0 2 .8954305 2 2v5c0 1.1045695-.8954305 2-2 2h-1z" transform="matrix(-1 0 0 1 4 0)"/></g></svg>
              </span>

              <h2 className="mt-2 font-bold">Work Train</h2>

              <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                A guide to assist crews when tieing up work trains as per Article 12 of the Consolidated collective Agreement.
              </p>
            </a>

            <a
              className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
              href="/accountant"
            >
              <span className="inline-block rounded-lg bg-gray-50 p-3">
              <svg height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" transform="translate(3 3)"><path d="m6.5.5h-4c-1.1045695 0-2 .8954305-2 2v10c0 1.1045695.8954305 2 2 2h10c1.1045695 0 2-.8954305 2-2v-10"/><path d="m10.5 7.5-3 3-3-3"/><path d="m14.5.5h-4c-1.65685425 0-3 1.34314575-3 3v7"/></g></svg>
              </span>

              <h2 className="mt-2 font-bold">Reverse TCS</h2>

              <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                Guide to tie-up when called on a reverse-TCS
              </p>
            </a>

            <a
              className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
              href="/accountant"
            >
              <span className="inline-block rounded-lg bg-gray-50 p-3">
              <svg height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" transform="translate(2 4)"><path d="m13.5 4.5h2c.5522847 0 1-.44771525 1-1v-2c0-.55228475-.4477153-1-1-1h-14c-.55228475 0-1 .44771525-1 1v2c0 .55228475.44771525 1 1 1h2"/><path d="m3.5.5h10v11.5c0 .5522847-.4477153 1-1 1h-8c-.55228475 0-1-.4477153-1-1z"/><path d="m6.5 7.5 2 2 2-2"/><path d="m8.5 9.5v-6"/></g></svg>
              </span>

              <h2 className="mt-2 font-bold">TCS payment chart</h2>

              <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                Payment calculation as per different scenarios.
              </p>
            </a>

            <a
              className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
              href="/accountant"
            >
              <span className="inline-block rounded-lg bg-gray-50 p-3">
              <svg height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd" transform="matrix(0 1 1 0 0 2)"><path d="m8.54949429 2.5c-2.77910025-.01404818-5.48733216 1.42226095-6.97636172 4.0013358-2.209139 3.826341-.89813776 8.7190642 2.92820323 10.9282032s8.7190642.8981378 10.9282032-2.9282032.8981378-8.71906423-2.9282032-10.92820323" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="m11.5 2.5-3 2.5v-5z" fill="currentColor" fill-rule="nonzero"/><path d="m4.5 10.5h5v3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></g></svg>
              </span>

              <h2 className="mt-2 font-bold">Overtime Tie-up</h2>

              <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                If you did not use the correct procedure to claim over time on your initial tie-up you can correct this on your secondary tie-up screen.
              </p>
            </a>

            <a
              className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
              href="/accountant"
            >
              <span className="inline-block rounded-lg bg-gray-50 p-3">
              <svg height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" transform="matrix(-1 0 0 1 19 2)"><circle cx="8.5" cy="8.5" r="8"/><path d="m8.5 5.5v4h-3.5"/></g></svg>
              </span>

              <h2 className="mt-2 font-bold">Tie-up Over 10</h2>

              <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                A guide for Tie Up Scenarios Involving Over 10 Hours.
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}


export default Tieup;