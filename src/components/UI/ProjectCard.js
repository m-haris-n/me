import React from 'react'


export default function ProjectCard(props) {
    
  return (
    <a href={props.projInfo.link} target="_blank">
    <div className='project-card flex flex-col justify-between items-end hover:cursor-pointer'>
      <p className='card-number mr-3'>{props.projInfo.number}</p>
      <p className='sub-heading-med-m text-right mr-3'>{props.projInfo.title}</p>
      <div className='bg-white w-full p-1 rounded-b-2xl'>
        <p className='text-right mr-3'>{props.projInfo.techs}</p>
      </div>
    </div>
    </a>
  )
}
