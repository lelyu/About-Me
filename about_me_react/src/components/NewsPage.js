import React from "react";
import NavBar from "./NavBar";

const NewsPage = () => {
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
			<main id="main">
				<section class="section">
					<div class="container">
						<div class="row mb-4 align-items-center">
							<div class="col-md-6" data-aos="fade-up">
								<h2>News</h2>
								<p>Update Irregularly</p>
							</div>
						</div>
					</div>

					<div class="site-section pb-0 services">
						<div class="container">
							<div class="row">
								<div
									class="col-12 col-sm-6 col-md-6 col-lg-6 mb-5"
									data-aos="fade-up"
									data-aos-delay="">
									<h4 class="h4 mb-2">March 2024</h4>
									<p>Hit leetcode 300 questions.</p>
								</div>
								<div
									class="col-12 col-sm-6 col-md-6 col-lg-6 mb-5"
									data-aos="fade-up"
									data-aos-delay="100">
									<h4 class="h4 mb-2">Jan 2024</h4>
									<p>
										TA for Algorithm with professor
										Alexander Creiner.
									</p>
								</div>
								<div
									class="col-12 col-sm-6 col-md-6 col-lg-6 mb-5"
									data-aos="fade-up"
									data-aos-delay="">
									<h4 class="h4 mb-2">Aug 2023</h4>
									<p>
										TA for Data Visualization with professor
										Nam Wook Kim.
									</p>
								</div>
								<div
									class="col-12 col-sm-6 col-md-6 col-lg-6 mb-5"
									data-aos="fade-up"
									data-aos-delay="100">
									<h4 class="h4 mb-2">Jan 2023</h4>
									<p>Lab Consultant with Dr. Bee Lehman.</p>
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
		</div>
	);
};

export default NewsPage;
