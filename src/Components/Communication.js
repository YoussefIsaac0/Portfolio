import React from 'react'

export default function Communication() {
  return (
      <div id='communicationContainer'>
        <label id="Invitation">Ready to take <span style={{color:"#ffc86b"}}>your</span> digital<br/> presence to the next level?</label>
        <p>Reach out to me today and let's discuss how I can help you achieve your goals</p>
        <a href='mailto:youssefisaac002@gmail.com' target="_blank" id='email'>Let's get in touch 
        <img src="./images/paperplane.svg" alt="paperplane" id='paperPlane' />
        </a>
    <footer>
        <label>Cobyright © 2024 Youssef Isaac</label>
        <div className='comIcons'>
            <a href="https://github.com/YoussefIsaac0" target="_blank" >
            <img src='./images/github.svg'></img></a>
            <a href="https://www.linkedin.com/in/youssefisaac/" target="_blank" >
            <img src='./images/linkedin.svg'></img>
            </a>
        </div>
    </footer>
    </div>
  )
}
