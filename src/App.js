import './App.css';
import { useState } from 'react';
import Button from './components/Button/Button.jsx';
import About from './components/About/About.jsx';
import Experience from './components/Experience/Experience.jsx';
import Education from './components/Education/Education.jsx';
import Skills from './components/Skills/Skills.jsx';
import Projects from './components/Projects/Projects.jsx';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';

function App() {

  const [content, setContent] = useState('About');

  const tabs = ['About', 'Experience', 'Education', 'Skills', 'Projects'];

  const views = {
    'About' : About,
    'Experience' : Experience, 
    'Education' : Education,
    'Skills' : Skills, 
    'Projects' : Projects
  }

  const ActiveTab = views[content];

  function clickHandler(text) {
    setContent(text);
  }

  return (
    <div className="App">
      <Header />      
      <div className='custom-button'>
        {tabs.map((tab, idx) => (
          <Button key={idx} name={tab} isActive={content === tab} onClick={() => clickHandler(tab)}/>
        ))}
      </div>
      <div className='content'>
          <ActiveTab />
      </div>
      <Footer />
    </div>
  );
}

export default App;
