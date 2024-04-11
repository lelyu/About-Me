import React from "react";
import NavBar from "./NavBar";
import Experience from "./Experience";
const ExperiencePage = () => {
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
			<Experience />
		</div>
	);
};

export default ExperiencePage;
