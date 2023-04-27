// import React from 'react'

const Gallery = () => {
  return (
    <div id='gallery' className="max-w-[1140px] m-auto w-full px-4 py-16">
        <h2 className="text-center text-gray-700 p-4">Gallery</h2>
        <div className="grid sm:grid-cols-5 gap-4">
            <div className="sm:col-span-3 col-span-2 row-span-2">
                <img className="w-full h-full object-cover" src="https://media.istockphoto.com/id/153006184/photo/maldives-villa-piles-on-water.jpg?b=1&s=170667a&w=0&k=20&c=rMYkdFOcnC8b-FUxu1HrzuwJtduW7ndBtQCbVwCp7dg=" alt="/" />
            </div>
            <div className="">
                <img className="w-full h-full object-cover" src='https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fGJlYWNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60' alt="/" />
            </div>
            <div className="">
                <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJlYWNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="/" />
            </div>
            <div className="">
                <img className="w-full h-full object-cover" src="https://media.istockphoto.com/id/1283886803/photo/beachside-pathway-leading-to-the-ocean-with-spectacular-sunrise.jpg?b=1&s=170667a&w=0&k=20&c=gGFaFokL-TmEHSjbPhR5xv4cTj2lQvgCeepzdpebqw0=" alt="/" />
            </div>
            <div className="">
                
                <img className="w-full h-full object-cover" src="https://media.istockphoto.com/id/457977305/photo/bedroom-overlooking-ocean.jpg?b=1&s=170667a&w=0&k=20&c=6I_nGQgZUZaFSA5o9mvkoABaOJSs99ecp3INoUo-nr8=" alt="/" />
            </div>
        </div>
    </div>
  )
}

export default Gallery