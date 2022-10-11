import React from 'react'

import'./texthover.css'
const TextHover = (props) => {
    
  return (
    <div className='t-hover'>
        <img src={props.image} alt="" />
        <span>
           {props.t}
            <br />
          {props.t1}

        </span>
      
    </div>
  )
}

export default TextHover
