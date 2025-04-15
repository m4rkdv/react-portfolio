import React from 'react'
import WorkItem from './WorkItem'

const data = [
    {
        year:2020,
        title:'Test Work',
        duration:'1 year',
        details:'Et irure et commodo occaecat aute cillum elit. Magna deserunt dolore consequat culpa ullamco irure. Reprehenderit mollit excepteur aute esse do anim sint reprehenderit qui officia aute nostrud dolor velit.',
    }
]

function Work() {
  return (
    <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Work</h1>
        {data.map((item, idx)=>(
          <WorkItem 
            key={idx}
            year={item.year}
            title={item.title}
            duration={item.duration}
            details={item.details}
          />))}
    </div>
  )
}

export default Work