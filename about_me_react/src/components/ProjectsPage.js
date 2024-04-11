import React from "react";
import NavBar from "./NavBar";
import Projects from "./Projects";
const ProjectsPage = () => {
	return (
		<div>
			<NavBar />
			<nav className="navbar navbar-light custom-navbar">
				<div className="container">
					<a className="navbar-brand" href="/">
						Home
					</a>
					<p id="legend-message" className="legend-message">
						click top right for nav bar
					</p>
					<a
						href="#"
						className="burger"
						data-bs-toggle="collapse"
						data-bs-target="#main-navbar">
						<span></span>
					</a>
				</div>
			</nav>
			<Projects />
		</div>
	);
};

export default ProjectsPage;
