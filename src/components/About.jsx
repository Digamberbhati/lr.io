import React from 'react'

const About = () => {
  return (

    <section className="about text-textdark px-8 pt-9 pb-6" id="about">
      <div className="mx-auto min-h-screen">
        <h1 className="sm:text-[5vw] text-[3vh] text-center pt-4 text-black font-black tracking-tighter uppercase">
          About Lokesh Rajput
        </h1>
        <h2 className="sm:text-[2vw] text-center font-black text-blue-700">
          ONLINE PERSONAL TRAINER & FOUNDER
        </h2>

        <div className="w-full mt-10 min-h-[70vh] flex items-center justify-center sm:gap-16 gap-10 flex-col sm:flex-row">
          {/* Image Section */}
          <div className="shadow bg-red-400 sm:w-1/3 w-full h-auto sm:h-full mt-4 rounded-lg opacity-110 overflow-hidden flex flex-col">
            <img
              src="images/owner.jpg"
              alt="Lokesh Rajput"
              className="scale-125 hover:scale-100 duration-300 object-cover object-top w-full h-full"
            />
          </div>

          {/* Text Section */}
          <div className="flex flex-col gap-4 text-lg sm:w-1/3 pt-4">
            <p>
              I’m <span className="text-blue-700">Lokesh Rajput,</span> and
              fitness completely transformed my world.
            </p>
            <p>
              This powerful change inspired me to help others achieve their own
              breakthroughs.
            </p>
            <p>
              My mission is to empower you to reach your fitness goals and
              revitalize your life with targeted nutrition and exercise
              strategies.
            </p>
            <p>
              With a strong, healthy body, you’ll experience improved energy,
              confidence, and a better quality of life.
            </p>
            <p>
              <strong>Everyone deserves their best self…</strong> and your
              loved ones do too. Embracing your fitness makes life more
              rewarding and enjoyable.
            </p>
            <p>
              Fitness—whether it's losing weight, gaining muscle, or eating
              well—should be straightforward and affordable. <br />
              That’s why I am here to simplify your path to success.
            </p>

            <div className="social gap-8 h-10 w-full flex mt-6">
              <a
                href="https://www.instagram.com/lr_supplements07/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="images/social/instagram.png" alt="instagram" className="h-full" />
              </a>

              <a
                href="https://www.youtube.com/@LokeshSinghRajputfitness"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="images/social/youtube.png" alt="youtube" className="h-full" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineSection() {
  return (
    <section className="timeline mx-auto max-w-screen-lg mt-10 mb-10 px-4">
      <h1 className="sm:text-[4vw] text-[4vh] mb-4 font-black tracking-tight text-center mt-8">
        Lokesh <span className="text-blue-700">Timeline</span>
      </h1>

      <ol className="relative border-s border-gray-700">
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-900 rounded-full mt-1.5 -start-1.5 border border-gray-900"></div>
          <time className="mb-1 text-sm font-normal leading-none">2023</time>
          <h3 className="text-lg font-semibold">Mr. World (Gold medalist)</h3>
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            Lokesh Rajput earned the Mr. World Gold Medal in Europe, showcasing
            exceptional global bodybuilding excellence in 2023.
          </p>
        </li>
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-900 rounded-full mt-1.5 -start-1.5 border  border-gray-900"></div>
          <time className="mb-1 text-sm font-normal leading-none">2016</time>
          <h3 className="text-lg font-semibold">Mr. Haryana</h3>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            Lokesh Rajput’s success as Mr. Haryana underscores his remarkable
            commitment and standout presence.
          </p>
        </li>
        <li className="ms-4">
          <div className="absolute w-3 h-3 bg-gray-900 rounded-full mt-1.5 -start-1.5 border border-gray-900"></div>
          <time className="mb-1 text-sm font-normal leading-none">2015</time>
          <h3 className="text-lg font-semibold">Mr. Gurgaon</h3>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            Lokesh Rajput's victory as Mr. Gurgaon 2015 highlighted his
            outstanding presence and commitment, elevating his status in the
            pageant world.
          </p>
        </li>
      </ol>
    </section>
  )
}

export default About
