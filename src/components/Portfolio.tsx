import React from 'react'
import ServicesCard from './ServicesCard'
import TeamMember from './TeamMember'
import WhyChooseUs from './WhyChooseUs'
import SubscribeBox from './SubscribeBox'

function Portfolio() {
  return (
    <>
    <section
    className="relative h-screen w-full flex items-center justify-start text-left bg-cover bg-center"
    style={{
      backgroundImage:
        "url(https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80)",
    }}
    aria-label="Portfolio background"
  >
    <div className="absolute top-0 right-0 bottom-0 left-0 bg-gray-900 opacity-75"></div>

    <main className=" lg:px-24 z-10">
      <div className="text-left">
        <h2 className="text-4xl tracking-tight leading-10 font-bold sm:text-5xl text-white sm:leading-none md:text-5xl">
          <h2>Portfolio</h2>
        </h2>
        <p className="mt-3 text-white sm:mt-5 sm:max-w-xl md:mt-5 text-lg font-light">
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
          lorem cupidatat commodo.
        </p>
        <div className="mt-5 sm:mt-8 sm:flex justify-start">
          <div className="rounded-md shadow">
            <div className="banner">
              <a href="#" className="butn butn__new">
                <span>Get Stated</span>
              </a>
            </div>
          </div>
          <div className="mt-3 sm:mt-0 sm:ml-3">
            {/* <div class="banner">
              <a href="#" class="butn butn__new">
                <span>Sign Up</span>
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </main>
  </section>
 <ServicesCard/>
<TeamMember/>
<WhyChooseUs/>
<SubscribeBox/>
</>

  )
}

export default Portfolio