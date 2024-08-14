import React, { useState } from 'react'
import Info from './Info'

export default function SecondaryInformation() {
    const information=[
        {
            'description': "I'm very flexible with time zone communication",
            
        },
        {
            'description': "I prioritize client collaboration, fostering open communication",
        }

    ]
  return (
    <div className='grid' >
        {
            information.map((info,key)=>(
                <Info description={info.description} image = {info.image} key={key} style={{border:"1px solid red"}}/>
            )) 
        }
    </div>
  )
}
