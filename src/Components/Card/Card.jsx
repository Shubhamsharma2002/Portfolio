import React from 'react'
import './Card.css'
function Card({emoji, heading, detail, detail2,color,lable, Link}) {
    return (
        <div className="card" style={{borderColor: {color}}}> 
          <img src={emoji} alt="" />
          <span>{heading}</span>
          <span>{detail}</span>
          <span>{detail2}</span>
          <a href={Link} target="_blank">
          <button className="c-button">{lable}</button>
          </a>
        </div>
      )
}

export default Card