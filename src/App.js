import { Route, Routes } from 'react-router-dom';
import './App.css';
import Skills from './pages/Skills';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import React, { useEffect, useReducer, useState } from 'react';
import { projectsPreData, skillsPreData } from './portfolio_data';
import { SkillsDataContext } from './contexts/SkillsDataContext';
import { ProjectsDataContext } from './contexts/ProjectsDataContext';

const skillsReducer = (state, action) => {
  switch (action.type) {
    case "INIT": return action.data;
    default: return state;
  }
};

const projectsReducer = (state, action) => {
  switch (action.type) {
    case "INIT": return action.data;
    default: return state;
  }
};

function App() {
  const [skillsData, skillsDispatch] = useReducer(skillsReducer, []);
  const [projectsData, projectsDispatch] = useReducer(projectsReducer, []);
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  useEffect(() => {
    skillsDispatch({ type: "INIT", data: skillsPreData });
    projectsDispatch({ type: "INIT", data: projectsPreData });
    setIsDataLoaded(true);
  }, []);

  if (!isDataLoaded) {
    return <div>데이터를 불러오는 중이에요</div>;
  } else {
    return (
      <SkillsDataContext.Provider value={skillsData}>
        <ProjectsDataContext.Provider value={projectsData}>
          <div className="App">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/:name" element={<ProjectDetail />}/>
            </Routes>
          </div>
        </ProjectsDataContext.Provider>
      </SkillsDataContext.Provider>
    );
  }
}

export default App;
