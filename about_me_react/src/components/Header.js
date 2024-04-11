import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<div>
			<nav className="navbar navbar-light custom-navbar">
				<div className="container">
					<Link className="navbar-brand" to="/">
						Home
					</Link>
					<p id="legend-message" className="legend-message">
						click top right for nav bar
					</p>
					<Link
						to="#"
						className="burger"
						data-bs-toggle="collapse"
						data-bs-target="#main-navbar">
						<span></span>
					</Link>
				</div>
			</nav>
		</div>
	);
};

export default Header;
