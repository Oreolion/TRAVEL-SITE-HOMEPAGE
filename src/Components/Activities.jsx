// import React from 'react'

const Activities = () => {
  return (
    <div className=" max-w-[1140px] m-auto w-full sm:h-[60vh] md:flex mt-[-75px]">
        <div className="relative p-4 ">
            <h3 className="absolute z-10 top-[50%] left-[30%] translate-x-[50%] translate-y-[50%] text-white text-4xl font-bold">Resorts</h3>
            <img  className="w-full h-full object-cover relative border-4 border-white shadow-lg" src="https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDF8fGJlYWNoJTIwcmVzb3J0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" alt="/" />
        </div>
        <div className="relative p-4 ">
            <h3 className="absolute z-10 top-[50%] left-[30%] translate-x-[50%] translate-y-[50%] text-white text-4xl font-bold">Cruise</h3>
            <img  className="w-full h-full object-cover relative border-4 border-white shadow-lg" src="https://images.unsplash.com/photo-1613209011154-7d97bc7d16d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGJlYWNoJTIweWF0Y2h8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" alt="/" />
        </div>
        <div className="relative p-4 ">
            <h3 className="absolute z-10 top-[50%] left-[30%] lg:left-[10%] translate-x-[50%] translate-y-[50%] text-white text-4xl font-bold">Excursion</h3>
            <img className="w-full h-full object-cover relative border-4 border-white shadow-lg" src="https://media.istockphoto.com/id/688186196/photo/learning-to-dive-under-water-diving-entertainment-at-tourist-resort-in-egypt.jpg?b=1&s=170667a&w=0&k=20&c=7y3ReMogdmfH-wumqMBL9wFcUsZK1hNz-ivu5566EKg=" alt="/" />
        </div>
    </div>

  )
}

export default Activities