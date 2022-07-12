import React from 'react'
import dribbleIcon from '../../assets/icons/dribbble-icon.svg'
import githubIcon from '../../assets/icons/github-icon.svg'
import instagramIcon from '../../assets/icons/instagram-icon.svg'
import linkedinIcon from '../../assets/icons/linkedin-icon.svg'

export default function Socialbar(props) {
    let colStyle;
    const direction = props.direction;
    if(direction === "col"){
        colStyle = `flex-${direction} w-auto h-80`
    }
    if(direction === "row"){
        colStyle = `flex-${direction} w-80 h-auto`
    }

  return (
    <div className={`hidden md:flex ${colStyle} content-between justify-between`}>
      <img src={githubIcon} alt="" width={`32px`} />
      <img src={dribbleIcon} alt="" width={`32px`}/>
      <img src={linkedinIcon} alt="" width={`32px`}/>
      <img src={instagramIcon} alt="" width={`32px`}/>
    </div>
  )
}
