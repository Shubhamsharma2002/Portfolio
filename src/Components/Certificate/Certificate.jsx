import React from 'react'
import './Certificate.css'
function Certificate({heading,lable,Link}) {
  return (
    <div className="certificateDiv">
         <span>
            {heading}
         </span>
          <div>
            <a href={Link} target="_blank">
            <button className='c-btn'>{lable}</button>
            </a>
          </div>
        </div>
  )
}

export default Certificate