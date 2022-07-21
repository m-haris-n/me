import React from 'react'
import dribbleIcon from '../../assets/icons/dribbble-icon.svg'
import githubIcon from '../../assets/icons/github-icon.svg'
import instagramIcon from '../../assets/icons/instagram-icon.svg'
import linkedinIcon from '../../assets/icons/linkedin-icon.svg'

export default function Socialbar(props) {
    let colStyle;
    const direction = props.direction;
    if(direction === "col"){
        colStyle = `hidden md:flex flex-${direction} w-auto h-80`
    }
    if(direction === "row"){
        colStyle = `flex flex-${direction} w-80 h-auto`
    }

  return (
    <div className={`${colStyle}  content-between justify-between`}>
      <a href="https://github.com/m-haris-n/" target="_blank">
      <img src={githubIcon} alt="" width={`32px`} />
      </a>
      <a href="https://dribbble.com/MHarisN" target="_blank">
      <img src={dribbleIcon} alt="" width={`32px`}/>
      </a>
      <a href="https://www.linkedin.com/in/mharisn/" target="_blank">
      <img src={linkedinIcon} alt="" width={`32px`}/>
      </a>
      <a href="https://www.instagram.com/harris_nabeel/" target="_blank">
      <img src={instagramIcon} alt="" width={`32px`}/>
      </a>
    </div>
  )
}
