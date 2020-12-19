import "./App.css";
import Header from "./Components/Header";
import Summary from "./Components/Summary";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Education from "./Components/Education";
import Experience from "./Components/Experience";
import { skills } from "./data/data"

function App() {
  return (
    <div className="App">
      <Header />
      <hr />
      <Summary />
      <hr />
      <Skills
        languages={skills.languages}
        frameworks={skills.frameworks}
        databases={skills.databases}
      />
      <hr />
      <Projects />
      <hr />
      <Education />
      <hr />
      <Experience />
    </div>
  );
}

export default App;
