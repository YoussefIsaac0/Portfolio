import { useState } from 'react';
import './App.css';
import About from './Components/About';
import Communication from './Components/Communication';
import IntroductionSection from './Components/IntroductionSection';
import Loading from './Components/Loading';
import SecondaryInformation from './Components/SecondaryInformation';
import Skills from './Components/Skills';
import { delay, motion } from "framer-motion";


function App() {
  const [loading, setLoading] = useState(true)
  let handleLoading = (val)=>{
    setLoading(val)
  }
  return (
    <>
      {loading ? <Loading component={<IntroductionSection loading={handleLoading}/>}/> :
      <motion.div
      viewport={{ once: true }}
      initial={{ opacity: 0}}
      whileInView={{ opacity: 1}}
      transition={{duration:1, delay:0.2, type:'tween'}}>
      
        <IntroductionSection loading={handleLoading}/>
        <About/>
        <Skills/>
        <Communication/>
      </motion.div>
      }
    </>
  )
}

export default App;
