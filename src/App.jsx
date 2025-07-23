import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import Projects from './pages/projects/Projects';
import ProjectDetail from './pages/project-detail/ProjectDetail';
import Layout from './layouts/layout/Layout';
import About from './pages/about/About';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/:name" element={<ProjectDetail />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;