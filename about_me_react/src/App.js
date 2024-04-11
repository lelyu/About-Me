import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import React from "react";
import { Link } from "react-router-dom";
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
