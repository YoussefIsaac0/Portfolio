import React from 'react'

export default function List(props) {

  return (
    <div>
      <h1>{props.title}</h1>
      
      <ul>
        {props.items.map((item,index)=>(
          <li key={index}>
            <h3>{item.title} <span style={{color:'#fec86b'}}>{item.year}</span></h3>
            {
            item.body!=null &&
            item.body.map((element,indx)=>(
              <p className='about' key ={indx}>{element}</p>
            ))
            }
            
          </li>
        ))}
      </ul>
    </div>
    
  )
}
