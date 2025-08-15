import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import Projects from './pages/projects/Projects';
import ProjectDetail from './pages/project-detail/ProjectDetail';
import Layout from './layouts/layout/Layout';
import About from './pages/about/About';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

function App() {
    const { i18n } = useTranslation(); // i18n.language 자동 추적됨

    useEffect(() => {
        document.documentElement.lang = i18n.resolvedLanguage || i18n.language;
    }, [i18n.language]); // 마운트, 언어 변경 시마다 실행

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
