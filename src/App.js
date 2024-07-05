import Navbar from "./components/Navbar/navbar";
import Intro from './components/Intro/intro';
import Skills from "./components/Skills/Skills";
// import Skills from './components/Skills/Skills';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro />
      <Skills />
    </div>
  );
}

export default App;
