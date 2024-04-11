import React from "react";
import { Link } from "react-router-dom";
import Isotope from "isotope-layout";
import AOS from "aos";
import { useEffect, useState } from "react";
import "aos/dist/aos.css"; // Make sure to import AOS styles
import { useRef } from "react";
const Projects = () => {
	const isotopeRef = useRef(null);
	const [filterKey, setFilterKey] = useState("*");
	useEffect(() => {
		AOS.init(); // Initialize AOS

		isotopeRef.current = new Isotope("#portfolio-grid", {
			itemSelector: ".item",
		});

		return () => isotopeRef.current.destroy(); // Cleanup Isotope instance
	}, []);

	// Effect to handle filtering
	useEffect(() => {
		if (filterKey === "*") {
			isotopeRef.current.arrange({ filter: "*" });
		} else {
			isotopeRef.current.arrange({ filter: filterKey });
		}

		AOS.refresh(); // Refresh AOS for any layout changes
	}, [filterKey]);

	const handleFilterClick = (e, filter) => {
		e.preventDefault();
		setFilterKey(filter); // Update filter key based on the button clicked
	};
	return (
		<div className="container">
			<div className="row mb-5 align-items-center">
				<div
					className="col-md-12 col-lg-6 mb-4 mb-lg-0"
					data-aos="fade-up">
					<h2>Hello World, I'm Le Lyu</h2>
					<p className="mb-0">
						Lab Consultant and Teaching Assistant at Boston College
						with a passion for coding, financial forecasting, data
						analysis, and task automation
					</p>
				</div>
				<div
					className="col-md-12 col-lg-6 text-start text-lg-end"
					data-aos="fade-up"
					data-aos-delay="100">
					<div id="filters" className="filters">
						<button
							onClick={(e) => handleFilterClick(e, "*")}
							className={filterKey === "*" ? "active" : ""}>
							All
						</button>
						<button
							onClick={(e) => handleFilterClick(e, ".vis")}
							className={filterKey === ".vis" ? "active" : ""}>
							Data Visualization
						</button>
						<button
							onClick={(e) => handleFilterClick(e, ".fin")}
							className={filterKey === ".fin" ? "active" : ""}>
							Financial Forecasting
						</button>
						<button
							onClick={(e) => handleFilterClick(e, ".auto")}
							className={filterKey === ".auto" ? "active" : ""}>
							Automation
						</button>
						<button
							onClick={(e) => handleFilterClick(e, ".index")}
							className={filterKey === ".index" ? "active" : ""}>
							Data Indexing
						</button>
					</div>
				</div>
			</div>
			<div
				id="portfolio-grid"
				className="row no-gutter"
				data-aos="fade-up"
				data-aos-delay="200">
				<div className="item vis col-sm-6 col-md-4 col-lg-4 mb-4">
					<Link
						to="/projects/project1"
						className="item-wrap fancybox">
						<div className="work-info">
							<h3>Is college worth it?</h3>
							<span>Data Visualization</span>
						</div>
						<img
							className="img-fluid"
							src="/img/project-college_tuition.jpg"
							alt="Project College"
						/>
					</Link>
				</div>
				<div className="item vis col-sm-6 col-md-4 col-lg-4 mb-4">
					<Link
						to="/projects/project2"
						className="item-wrap fancybox">
						<div className="work-info">
							<h3>What causes climate change?</h3>
							<span>Data Visualization</span>
						</div>
						<img
							className="img-fluid"
							src="img/project-climate_change.jpg"
							alt="Project Climate"
						/>
					</Link>
				</div>
				<div className="item fin col-sm-6 col-md-4 col-lg-4 mb-4">
					<Link
						to="/projects/project3"
						className="item-wrap fancybox">
						<div className="work-info">
							<h3>
								What model best predicts revenue for Domino's
								Pizza?
							</h3>
							<span>Financial Forecasting</span>
						</div>
						<img
							className="img-fluid"
							src="img/project-dominos.jpg"
							alt="Project Dominos"
						/>
					</Link>
				</div>
				<div className="item auto col-sm-6 col-md-4 col-lg-4 mb-4">
					<Link
						to="/projects/project4"
						className="item-wrap fancybox">
						<div className="work-info">
							<h3>Gmail Unstarrer</h3>
							<span>Automation</span>
						</div>
						<img
							className="img-fluid"
							src="img/project-gmail_unstarrer-small.jpg"
							alt="Project Gmail Unstarrer"
						/>
					</Link>
				</div>
				<div className="item auto col-sm-6 col-md-4 col-lg-4 mb-4">
					<Link
						to="/projects/project5"
						className="item-wrap fancybox">
						<div className="work-info">
							<h3>Google Drive Automation</h3>
							<span>Automation</span>
						</div>
						<img
							className="img-fluid"
							src="img/project-google_drive-small.png"
							alt="Project Google Drive Automation"
						/>
					</Link>
				</div>
				<div className="item index col-sm-6 col-md-4 col-lg-4 mb-4">
					<Link
						to="/projects/project6"
						className="item-wrap fancybox">
						<div className="work-info">
							<h3>Data Indexing Tool</h3>
							<span>Data Indexing</span>
						</div>
						<img
							className="img-fluid"
							src="img/project-wtd.png"
							alt="Project Data Indexing Tool"
						/>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Projects;
