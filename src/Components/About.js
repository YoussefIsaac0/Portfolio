import React, { useState } from 'react'
import { delay, motion } from "framer-motion";
import List from './List';
import SecondaryInformation from './SecondaryInformation';

export default function About() {

    const [educationList, useEducationList] = useState([
        {
            title:"Faculty of Computer and Information Science, Ain Shams University",
            year:"(Oct 2020 - Jun 2024)",
            body: [
                "Scientific Computing Department, CGPA: 3.7, Graduation Project: A",
            ]
        }
    ])

    const [workExperienceList, useWorkExperienceList] = useState([
        {
            title: "Full-Stack Developer @ Solvytix",
            year:"(Jul 2024 - Present)",
            position:"Intern @ Solvytix",
            body:[
                "Actively involved in frontend development using React.js and backend development using .NET technologies",
                "Implementing user interfaces, integrating APIs, and contributing to the development of scalable web applications with high performance."
            ]
            
        }
    ])

    return (
        <>
        <div className='container' id='about'>
            <div style={{  }}>
                <motion.div
                    initial={{ opacity: 0, position:'relative', left:'-100px'}}
                    whileInView={{ opacity: 1, left:'0px'}}
                    transition={{duration:1, delay:0.2, type:'tween'}}>
                    <div className='about-section'>
                        <h1>About</h1>
                        <p className='about'>I am a recent graduate from the 
                            Faculty of Computer and Information
                            Science at Ain Shams University with
                            a <span style={{color:'#fec86b'}}>CGPA=3.7</span>
                            , focusing on backend /
                            Full-Stack development.
                            With a passion for programming
                            and problem-solving since I was
                            14. I am eager to apply my
                            knowledge to real-world
                            applications 
                            and contribute to 
                            innovative projects.
                        </p>
                    </div>
                </motion.div>
                <br /><hr/><br />
                <motion.div
                    initial={{ opacity: 0, position:'relative', left:'-100px'}}
                    whileInView={{ opacity: 1, left:'0px'}}
                    transition={{duration:1, delay:0.2, type:'tween'}}>
                    <List title="Education" items={educationList}/>
                </motion.div>

                <br /><hr /><br />
                <motion.div
                    initial={{ opacity: 0, position:'relative', left:'-100px'}}
                    whileInView={{ opacity: 1, left:'0px'}}
                    transition={{duration:1, delay:0.2, type:'tween'}}>
                    <List title="Work Experience" items ={workExperienceList}/>
                </motion.div>
            </div>
            <motion.div
                    initial={{ opacity: 0, position:'relative', left:'-200px', top:'-200px'}}
                    whileInView={{ opacity: 1, left:'0px', top:'0px'}}
                    transition={{duration:1, delay:0.2, type:'tween'}}
                    style={{ maxWidth:'fit-content'}}>
                <img src="./images/education.png" alt="EducationSection" id='aboutPicture'/>
            </motion.div>
           

        </div>
        <SecondaryInformation/>
        </>
    )
}
