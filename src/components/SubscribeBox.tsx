import React from 'react'

function SubscribeBox() {
  return (
    <div className="w-full p-0 pt-5 mt-10 overflow-hidden">
      <div
        className="container flex flex-col gap-y-8 md:gap-y-10 mx-auto px-5 py-5 sm:py-8 md:py-16 lg:py-10 xl:py-20 text-gray-200 bg-gray-800 relative"
        style={{ maxWidth: "100%" }}
      >
        <div className="w-full text-center">
          <div className="mb-4 text-white text-3xl md:text-4xl font-extrabold">
            Sign up for our newsletter
          </div>

          <div className="text-base sm:text-lg">
            Be the first to know about releases and industry news and insights.
          </div>
        </div>

        <div className="w-full">
          <div className="flex flex-col justify-center sm:flex-row w-full">
            <input
              type="text"
              placeholder="Enter your email"
              className="sm:w-2/4 sm:max-w-[400px] h-12 p-3 text-gray-900 border p-8 border-solid border-gray-300 "
            />

            <button
              type="submit"
              className="sm:w-1/4 sm:max-w-[180px] h-12 text-white bg-black transition-all duration-300 ease-in-out pt-0"
            >
              Subscribe
            </button>
          </div>

          {/* <div class="mt-3 text-sm text-center absolute bottom-0 w-full text-center">
            We care about your data in our
            <u class="cursor-pointer transition-all duration-300 ease-in-out hover:text-gray-50">
              privacy policy
            </u>
            .
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default SubscribeBox
