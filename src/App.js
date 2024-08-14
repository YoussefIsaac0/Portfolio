import './App.css';
import About from './Components/About';
import IntroductionSection from './Components/IntroductionSection';
import SecondaryInformation from './Components/SecondaryInformation';
import Skills from './Components/Skills';

function App() {
  return (
    <div>
      <IntroductionSection/>
      <About/>
      <Skills/>
    </div>
  )
}

export default App;
