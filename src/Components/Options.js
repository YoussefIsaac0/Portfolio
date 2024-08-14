import React, { useEffect, useState } from 'react'
import useDetectScroll, { Direction } from "@smakss/react-scroll-direction";
import { delay, motion } from "framer-motion";

export default function Options() {
    const { scrollDir, scrollPosition } = useDetectScroll();
    const [position,setPosition] = useState(0);
    const [translate,setTranslate]=useState('translateY(0px)')
    
    // const [direction,setDirection] = useState()
    useEffect(() => {
        setTimeout(() => {
            
            
            setTranslate(scrollDir==Direction.Up?'translateY(0px)':'translateY(-100px)')
                
            
        }, 100);
      }, [scrollDir]);
    console.log(scrollPosition)
  return (
    
    
        <div style={{display:'flex', justifyContent:'center', alignItems:"center", position:'fixed', left:'50%',
         transform:translate, transition:"0.3s ease-in", zIndex:"5" }}>
            <div className='options'>
                <ul>
                    <li><a href='#firstContainer'>Intro</a></li>
                    <li><a href='#about'>About</a></li>
                    <li><a href='#skills'>Skills</a></li>
                    <li><a href='#communicationContainer'>Contact</a></li>

                </ul>
            </div>
        </div>
  )
}