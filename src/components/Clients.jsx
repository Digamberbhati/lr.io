import React from 'react'

function Clients() {
  return (
    <>
        <div className="py-12 px-16">
            {/* <!-- <div className="text-center text-blue-700 text-5xl text-bold">Our clients</div> --> */}
            <h1 className=" sm:text-[4vw] text-[4vh] mb-4 font-black tracking-tight text-center mt-8 ">Our <span className="text-blue-700">Clients</span></h1>
        <div id="cards-container" className="grid gap-4 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 my-6 px-3">
        </div>
        </div>
        
    </>
  )
}

export default Clients
