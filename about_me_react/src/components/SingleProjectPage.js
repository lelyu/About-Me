import NavBar from "./NavBar";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";
const SingleProjectPage = () => {
	const { projectId } = useParams();
	const [projectData, setProjectData] = useState(null);
	useEffect(() => {
		// Fetch the data.json file from the public folder
		fetch("/data.json")
			.then((response) => {
				return response.json();
			})
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
			<Header />
			<section className="section">
				<div className="container">
					<div className="row mb-4 align-items-center">
						<div className="col-md-6" data-aos="fade-up">
							<h2>{projectData.title}</h2>
							<p>{projectData.description}</p>
						</div>
					</div>
				</div>

				<div className="site-section pb-0">
					<div className="container">
						<div className="row align-items-stretch">
							<div className="col-md-8" data-aos="fade-up">
								<img
									src={projectData.image}
									alt="img"
									className="img-fluid"
								/>
							</div>
							<div
								className="col-md-3 ml-auto"
								data-aos="fade-up"
								data-aos-delay="100">
								<div className="sticky-content">
									<h3 className="h3">Site Snippet</h3>
									<p className="mb-4">
										<span className="text-muted">
											{projectData.category}
										</span>
									</p>

									<div className="mb-5">
										<p></p>
									</div>

									<h4 className="h4 mb-3">Skills Involved</h4>
									<ul className="list-unstyled list-line mb-5">
										{projectData.skills.map(
											(skill, index) => (
												<li key={index}>{skill}</li>
											)
										)}
									</ul>

									<p>
										<a
											href={projectData.link}
											className="readmore">
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
