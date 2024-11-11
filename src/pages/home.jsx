import React from 'react'

function home() {
  return (
    <main>
    {/* Home Section */}
    <section className="hero relative" id="home">
      <div className="absolute"></div>
      <div className="relative mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="max-w-xl text-center pt-20 sm:pt-0 bottom-0 sm:text-left">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl">
            Let us find your
            <strong className="block font-extrabold text-blue-700 text-6xl"> Beast Version. </strong>
          </h1>
          <p className="mt-4 max-w-lg text-white sm:text-xl">
            Transform your fitness journey with our expert-guided workouts and state-of-the-art gym facilities
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="join.html"
              className="block w-full rounded bg-blue-700 px-12 py-3 text-sm font-medium text-white shadow hover:bg-blue-800 sm:w-auto"
            >
              Get Join
            </a>
            <a
              href="#"
              className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-blue-700 shadow hover:text-blue-800 sm:w-auto"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  </main>
      
  )
}

export default home
