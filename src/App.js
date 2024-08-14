import { useState } from 'react';
import './App.css';
import About from './Components/About';
import Communication from './Components/Communication';
import IntroductionSection from './Components/IntroductionSection';
import Loading from './Components/Loading';
import SecondaryInformation from './Components/SecondaryInformation';
import Skills from './Components/Skills';

function App() {
  const [loading, setLoading] = useState(true)
  let handleLoading = (val)=>{
    setLoading(val)
  }
  return (
    <>
      {loading ? <Loading component={<IntroductionSection loading={handleLoading}/>}/> :
      <div>
        <IntroductionSection loading={handleLoading}/>
        <About/>
        <Skills/>
        <Communication/>
      </div>
      }
    </>
  )
}

export default App;
