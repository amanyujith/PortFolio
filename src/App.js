import logo from './logo.svg';
import './App.css';
import Header from './parts/Header';
import About from './parts/About';
import Education from './parts/Education';
import notes from './notes';
import Projects from './parts/Projects';
import work from './work';
import Skills from './parts/Skills';
import lang from './lang';
import Contact from './parts/Contact'
import Foot from './parts/Foot';
function App() {
  return (
    <div >
      <Header/>
      <About/>
      <div>
      <h1 className="edu">Education</h1>
      {notes.map(noteItem => (
        <Education
          key={noteItem.id}
          degree={noteItem.degree}
          grade={noteItem.grade}
          year={noteItem.year}
          institue={noteItem.institute}
          
        />
      ))}
      </div>
      <div className="blank-div"></div>
      <h1>Projects</h1>
      {work.map(workItem=>(
        <Projects
        key={workItem.key}
        name={workItem.name}
        pname={workItem.pname}
        summary={workItem.summary}
        link={workItem.link}
        
        />
      ))}
                  <div className="blank-divi"></div>

        <h1>Skills</h1>
        <div className="blank-div">
        {lang.map(langItem => (
        <Skills
          key={langItem.key}
          title={langItem.title}
          list1={langItem.list1}
          list2={langItem.list2}
        />
      ))}        </div>
                  <div className="blank-divi"></div>
        <Contact/>
        <div className="blank-divi"></div>
      <Foot/>
    </div>
  );
}

export default App;
