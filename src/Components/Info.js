import React from 'react'
import { delay, motion } from "framer-motion";

export default function Info(props) {
  return (
    
        <div className='gridItem'>
            <h2>{props.description}</h2>
        </div>
  )
}
