import React from "react"
import NavBar from "./NavBar"
import Projects from "./Projects"
import Header from "./Header"
import { Link } from "react-router-dom"
const HomePage = () => {
	return (
		<div>
			<NavBar />
			<Header />

			<main id="main">
				<br />
				<br />
				<section className="intro-section" data-aos="fade-up">
					<div className="container">
						<div className="row">
							<div className="col-lg-12">
								<h2>Hi, I'm Le</h2>
								<p>
									Thank you for visiting my portfolio page.
									Here, I try to create useful tools and
									applications that can help people in their
									daily life. There is a lot more to come, so
									stay tuned!
								</p>
							</div>
						</div>
					</div>
				</section>
				<section className="section site-portfolio">
					<Projects />
				</section>
			</main>

			<Link
				to="#"
				className="back-to-top d-flex align-items-center justify-content-center">
				<i className="bi bi-arrow-up-short"></i>
			</Link>
		</div>
	)
}

export default HomePage
