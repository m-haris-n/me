import React from 'react'

export default function Container(props) {

    const styles = props.classes;
    

  return (
    <div className={`my-container ${styles}`}>
      {props.children}
    </div>
  )
}
