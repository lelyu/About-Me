import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import React from "react";
import ExperiencePage from "./components/ExperiencePage";
import ProjectsPage from "./components/ProjectsPage";
import AboutMePage from "./components/AboutMePage";
import NewsPage from "./components/NewsPage";
import SingleProjectPage from "./components/SingleProjectPage";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/experience" element={<ExperiencePage />} />
				<Route path="/projects" element={<ProjectsPage />} />
				<Route path="/about" element={<AboutMePage />} />
				<Route path="/news" element={<NewsPage />} />
				<Route
					path="/projects/:projectId"
					element={<SingleProjectPage />}
				/>
			</Routes>
		</Router>
	);
}

export default App;
