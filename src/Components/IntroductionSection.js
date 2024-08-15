import React, { useState } from 'react'

export default function IntroductionSection(props) {
  const handleImageLoad = () => {
    props.loading(false)
  };

  return (
    <div className='container' id='firstContainer' style={{rowGap:"70px"}}>
        <div id="speech-container">
            <div className='speech'>
                <label>Hi There <span>👋</span></label>
                <br/>
                <label>I'M </label>
                <label id="name" style={ {color:'#ffc86b'} }>Youssef Isaac</label><br/>
                <label>Computer Science Fresh Graduate <br/> & A Full-Stack Developer</label>
                
            </div>
            <div style={{display:"flex", flexDirection:"row", gap:"10px"}}>
            <a href='#communicationContainer'>Contact Me</a>
            <a href='./images/Youssef_Isaac.pdf' download style={{backgroundColor:'#fec86b', color:"black"}}>Download CV</a>
            </div>
            
        </div>
        <img src='./images/myLogo.png' onLoad={handleImageLoad} onError={handleImageLoad}/>
    </div>
  )
}
