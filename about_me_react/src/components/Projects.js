import React from "react";

const Projects = () => {
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
						<a href="#" data-filter="*" className="active">
							All
						</a>
						<a href="#" data-filter=".vis">
							Data Visualization
						</a>
						<a href="#" data-filter=".fin">
							Financial Forecasting
						</a>
						<a href="#" data-filter=".auto">
							Automation
						</a>
						<a href="#" data-filter=".index">
							Data Indexing
						</a>
					</div>
				</div>
			</div>
			<div
				id="portfolio-grid"
				className="row no-gutter"
				data-aos="fade-up"
				data-aos-delay="200">
				<div className="item vis col-sm-6 col-md-4 col-lg-4 mb-4">
					<a
						href="project-college.html"
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
					</a>
				</div>
				<div className="item vis col-sm-6 col-md-4 col-lg-4 mb-4">
					<a
						href="project-climate.html"
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
					</a>
				</div>
				<div className="item fin col-sm-6 col-md-4 col-lg-4 mb-4">
					<a href="dominos.html" className="item-wrap fancybox">
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
					</a>
				</div>
				<div className="item auto col-sm-6 col-md-4 col-lg-4 mb-4">
					<a
						href="gamil-unstarrer.html"
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
					</a>
				</div>
				<div className="item auto col-sm-6 col-md-4 col-lg-4 mb-4">
					<a
						href="google-drive-automation.html"
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
					</a>
				</div>
				<div className="item index col-sm-6 col-md-4 col-lg-4 mb-4">
					<a href="project-wtd.html" className="item-wrap fancybox">
						<div className="work-info">
							<h3>Data Indexing Tool</h3>
							<span>Data Indexing</span>
						</div>
						<img
							className="img-fluid"
							src="img/project-wtd.png"
							alt="Project Data Indexing Tool"
						/>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Projects;
