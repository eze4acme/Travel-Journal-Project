import React from 'react'


function Card(props) {
  console.log(props.title);
  return (
    <main className='mb-10'>
      <div className='max-w-xl flex flex-col items-center mx-auto mt-5  sm:flex-row sm:justify-center sm:items-center sm:pl-5 bg-slate-800 text-slate-200'>
        <img src={props.imageUrl} alt="" className='rounded-md w-7/12  sm:h-1/12  sm:h-48 sm:w-40 sm:object-cover'/>
        <div className='text-left px-5'>
            <div className='flex px-2 gap-2  text-xs mt-3'>
              <img src="images/icon.png" alt="" className=' h-2 items-center self-center'/>
              <h2>{props.location}</h2>
              <a href={props.googleMapsUrl} className='text-gray-400 underline'>view on Google Maps</a>
            </div>
            <h1 className='text-2xl font-bold'>{props.title}</h1>
            <span className='text-xs font-bold'>{props.startDate} - {props.endDate}</span>
            <p className='text-sm pt-2'>{props.description}</p>
        </div>
      </div>
    </main>
  )
}

export default Card