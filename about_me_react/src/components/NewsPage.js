import React from "react";
import NavBar from "./NavBar";
import Header from "./Header";
const NewsPage = () => {
	return (
		<div>
			<NavBar />
			<Header />
			<main id="main">
				<section className="section">
					<div className="container">
						<div className="row mb-4 align-items-center">
							<div className="col-md-6" data-aos="fade-up">
								<h2>News</h2>
								<p>Update Irregularly</p>
							</div>
						</div>
					</div>

					<div className="site-section pb-0 services">
						<div className="container">
							<div className="row">
								<div
									className="col-12 col-sm-6 col-md-6 col-lg-6 mb-5"
									data-aos="fade-up"
									data-aos-delay="">
									<h4 className="h4 mb-2">March 2024</h4>
									<p>Hit leetcode 300 questions.</p>
								</div>
								<div
									className="col-12 col-sm-6 col-md-6 col-lg-6 mb-5"
									data-aos="fade-up"
									data-aos-delay="100">
									<h4 className="h4 mb-2">Jan 2024</h4>
									<p>
										TA for Algorithm with professor
										Alexander Creiner.
									</p>
								</div>
								<div
									className="col-12 col-sm-6 col-md-6 col-lg-6 mb-5"
									data-aos="fade-up"
									data-aos-delay="">
									<h4 className="h4 mb-2">Aug 2023</h4>
									<p>
										TA for Data Visualization with professor
										Nam Wook Kim.
									</p>
								</div>
								<div
									className="col-12 col-sm-6 col-md-6 col-lg-6 mb-5"
									data-aos="fade-up"
									data-aos-delay="100">
									<h4 className="h4 mb-2">Jan 2023</h4>
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
