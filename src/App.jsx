import { Route, Routes } from 'react-router-dom';
import './App.css';
import Skills from './pages/skills/Skills';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Layout from './layouts/layout/Layout';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="skills" element={<Skills />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/:name" element={<ProjectDetail />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;