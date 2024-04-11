import React from "react";
import NavBar from "./NavBar";
import Projects from "./Projects";
import Experience from "./Experience";
import Header from "./Header";
import { Link } from "react-router-dom";
import News from "./News";
const HomePage = () => {
	return (
		<div>
			<NavBar />
			<Header />
			<main id="main">
				<section className="section site-portfolio">
					<Projects />
				</section>

				<section className="section">
					<div className="container">
						<div className="row justify-content-center text-center mb-4">
							<div className="col-5">
								<h3 className="h3 heading">
									Places I've worked at
								</h3>
								<p>Boston College, Bingo Software Co. Ltd.</p>
							</div>
						</div>
						<div className="row justify-content-center">
							<div className="col-4 col-sm-4 col-md-2 d-flex justify-content-center">
								<a
									href="https://www.bc.edu/"
									className="client-logo">
									<img
										src="img/boston_college_logo.png"
										alt="img"
										className="img-fluid"
									/>
								</a>
							</div>
							<div className="col-4 col-sm-4 col-md-2 d-flex justify-content-center">
								<a
									href="https://finance.yahoo.com/quote/688227.SS/profile/?guccounter=1&guce_referrer=aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS8&guce_referrer_sig=AQAAAFLvP35EWmuLwQhMegv_Qpe91B7g6LD0Eio5DgSf2LX6pqnQa4kiwJwiT_9bGb2Be7euhT_9XpqQKPGrqVpjGsUFqrdnNnO4t-4TMKLGNkXdOcIdplQds1H2lyVKc_n0HGUCXHJ4I3ya7H41qPgJ79hNl9QU65V7DyogyyIC4WuZ"
									className="client-logo">
									<img
										src="img/Bingo_Logo.png"
										alt="img"
										className="img-fluid"
									/>
								</a>
							</div>
						</div>
					</div>
				</section>

				<section className="section services">
					<Experience />
				</section>
				<News />
			</main>

			<Link
				to="#"
				className="back-to-top d-flex align-items-center justify-content-center">
				<i className="bi bi-arrow-up-short"></i>
			</Link>
		</div>
	);
};

export default HomePage;
