import "./App.css";
import Header from "./Components/Header";
import Summary from "./Components/Summary";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Education from "./Components/Education";
import Experience from "./Components/Experience";

const data = {
  languages: ["Javascript", "HTML", "SQL", "CSS", "C", "Ruby"],
  frameworks: ["NodeJs", "React", "Express", "jQuery", "Ajax"],
  databases: ["PostgresSQL"],
};

function App() {
  return (
    <div className="App">
      <Header />
      <hr />
      <Summary />
      <hr />
      <Skills
        languages={data.languages}
        frameworks={data.frameworks}
        databases={data.databases}
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
