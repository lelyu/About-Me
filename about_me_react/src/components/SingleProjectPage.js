import NavBar from "./NavBar";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleProjectPage = () => {
	const { projectId } = useParams();
	const [projectData, setProjectData] = useState(null);

	useEffect(() => {
		// Fetch the data.json file from the public folder
		fetch("/data.json")
			.then((response) => response.json())
			.then((data) => {
				// Find the project data that matches the projectId parameter
				const project = data.projects.find((p) => p.id === projectId);
				setProjectData(project);
			});
	}, [projectId]); // Dependency array ensures this effect runs when projectId changes

	if (!projectData) {
		return <div>Loading...</div>;
	}
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
			<section class="section">
				<div class="container">
					<div class="row mb-4 align-items-center">
						<div class="col-md-6" data-aos="fade-up">
							<h2>{projectData.title}</h2>
							<p>{projectData.description}</p>
						</div>
					</div>
				</div>

				<div class="site-section pb-0">
					<div class="container">
						<div class="row align-items-stretch">
							<div class="col-md-8" data-aos="fade-up">
								<img
									src={projectData.image}
									alt="Image"
									class="img-fluid"
								/>
							</div>
							<div
								class="col-md-3 ml-auto"
								data-aos="fade-up"
								data-aos-delay="100">
								<div class="sticky-content">
									<h3 class="h3">Site Snippet</h3>
									<p class="mb-4">
										<span class="text-muted">
											{projectData.category}
										</span>
									</p>

									<div class="mb-5">
										<p></p>
									</div>

									<h4 class="h4 mb-3">Skills Involved</h4>
									<ul class="list-unstyled list-line mb-5">
										<li>Data Visualization with Tableau</li>
										<li>
											Web Development (HTML, CSS,
											JavaScript)
										</li>
										<li>
											Interactive User Interface Design
										</li>
										<li>
											Statistical Analysis and Data
											Interpretation
										</li>
									</ul>

									<p>
										<a
											href="https://mini-project-2-lsp.glitch.me/"
											class="readmore">
											Visit This Project
										</a>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default SingleProjectPage;
