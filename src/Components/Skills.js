import React, { useState } from 'react'
import Skill from './Skill'

export default function Skills() {
    const[skills,setSkills] = useState([
        {
            name: 'Python',
            imgPath: './images/Python.svg'
        },
        {
            name: 'C#',
            imgPath: './images/Csharp.svg'
        },
        {
            name: 'C++',
            imgPath: './images/C++.svg'
        },
        {
            name: 'Dart',
            imgPath: './images/Dart.svg'
        },
        {
            name: 'Java',
            imgPath: './images/Java.svg'
        },
        {
            name: 'JavaScript',
            imgPath: './images/JavaScript.svg'
        },
        {
            name: 'HTML & CSS',
            imgPath: './images/HTMl.svg'
        },
        {
            name: 'MongoDb',
            imgPath: './images/MongoDB.svg'
        },
        {
            name: 'SQL',
            imgPath: './images/SQL.svg'
        },
        {
            name: 'ASP.NET Core',
            imgPath: './images/net.png'
        },
        {
            name: 'MySQL',
            imgPath: './images/MySQL.svg'
        },
        {
            name: 'Node.JS',
            imgPath: './images/NodeJS.svg'
        },
        {
            name: 'TypeScript',
            imgPath: './images/TypeScript.svg'
        },
        {
            name: 'React.JS',
            imgPath: './images/ReactJS.svg'
        },
        {
            name: 'TailWind CSS',
            imgPath: './images/Tailwind.svg'
        },
        {
            name: 'Bootstrap',
            imgPath: './images/Bootstrap.svg'
        },
        
    ])
  return (
    <div className='container' style={{flexDirection:'column', alignItems:'center'}}>
        <h1 style={{marginTop:"50px"}}>My Skills</h1>
        <div className='skillsContainer'>
            {
                skills.map((skill,key) =>(
                    <Skill name={skill.name} imgPath={skill.imgPath} key ={key}/>
                ))
            }
        </div>
    </div>
  )
}
