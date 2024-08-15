import React, { useEffect, useState } from 'react'
import useDetectScroll, { Direction } from "@smakss/react-scroll-direction";
import { delay, motion } from "framer-motion";

export default function Options() {
    const { scrollDir, scrollPosition } = useDetectScroll();
    const [translate,setTranslate]=useState('translateY(-10px)')
    const[once,setOnce] =useState(true);
    useEffect(() => {
        setTimeout(() => {
            
            setTranslate(scrollDir==Direction.Up?'translateY(-10px)':'translateY(-100px)')
            if(scrollDir==Direction.Up && once==true){
                setOnce(false);
                setTimeout(()=>{
                    if(scrollDir == Direction.Up){
                        setTranslate('translateY(-100px)')
                    }
                    setOnce(true)
                },6000)
                
            }
            
        }, 100);
      }, [scrollDir,scrollPosition]);
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
