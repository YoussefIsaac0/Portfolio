import React from 'react'
import { delay, motion } from "framer-motion";

export default function Info(props) {
  return (
    <motion.div
    initial={{ opacity: 0, position:'relative', top:'-100px'}}
    whileInView={{ opacity: 1, left:'0px', top:'0px'}}
    transition={{duration:1, delay:0.2, type:'tween'}}
    style={{ maxWidth:'fit-content'}}>
        <div className='gridItem'>
            <h2>{props.description}</h2>
        </div>
    </motion.div>
  )
}
