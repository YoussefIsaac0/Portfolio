import React from 'react'

export default function IntroductionSection() {
  return (
    <div className='container' id='firstContainer'>
        <div id="speech-container">
            <div className='speech'>
                <label>Hi There <span>👋</span></label>
                <br/>
                <label>I'M </label>
                <label id="name" style={ {color:'#ffc86b'} }>Youssef Isaac</label><br/>
                <label>Computer Science Fresh Graduate <br/> & A Full-Stack Developer</label>
                
            </div>
            <button>Contact Me</button>
        </div>
        <img src='/images/Intro.svg'/>
    </div>
  )
}
