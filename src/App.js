import './App.css';
import About from './Components/About';
import Communication from './Components/Communication';
import IntroductionSection from './Components/IntroductionSection';
import SecondaryInformation from './Components/SecondaryInformation';
import Skills from './Components/Skills';

function App() {
  return (
    <div>
      <IntroductionSection/>
      <About/>
      <Skills/>
      <Communication/>
    </div>
  )
}

export default App;
