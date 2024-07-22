import React from 'react'
import { delay, motion } from "framer-motion";

export default function Skill(props) {
  return (
    <motion.div
        initial={{ opacity: 0, position:'relative', left:'-100px'}}
        whileInView={{ opacity: 1, left:'0px'}}
        transition={{duration:1, delay:0.2, type:'tween'}}>
        <div className='skill'>
            <img src={props.imgPath} alt={props.name}></img>
            <label>{props.name}</label>
        </div>
    </motion.div>
  )
}
