// import React from 'react'

const Hero = () => {
  return (
    <div className="w-full h-[90vh]">
        <img 
        className="w-full h-full object-cover"
        src="https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" alt="/" />
        <div className="max-w-[1140px] m-auto">
            <div className="absolute top-[40%] w-full md:w-[50%] max-w-[600px] h-full flex flex-col text-white p-4">
                <h1 className="font-bold text-5xl">Find Your Special Trip</h1>
                <h2 className=" text-gray-700 text-4xl py-4 italic">With WeekAway</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus iusto dignissimos ad ut harum eligendi quod laborum sapiente? Repellat, voluptate. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, placeat?</p>
            </div>
        </div>
    </div>
  )
}

export default Hero