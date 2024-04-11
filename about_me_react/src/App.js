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

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/experience" element={<ExperiencePage />} />
				<Route path="/projects" element={<ProjectsPage />} />
			</Routes>
		</Router>
	);
}

export default App;
