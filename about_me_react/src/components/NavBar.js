import React from "react";

const NavBar = () => {
	return (
		<div
			className="collapse navbar-collapse custom-navmenu"
			id="main-navbar">
			<div className="container py-2 py-md-5">
				<div className="row align-items-start">
					<div className="col-md-2">
						<ul className="custom-menu">
							<li className="active">
								<a href="index.html">Home</a>
							</li>
							<li>
								<a href="about.html">About Me</a>
							</li>
							<li>
								<a href="experience.html">Experience</a>
							</li>
							<li>
								<a href="projects.html">Projects</a>
							</li>
							<li>
								<a href="news.html">News</a>
							</li>
						</ul>
					</div>
					<div className="col-md-6 d-none d-md-block mr-auto">
						<div className="tweet d-flex">
							<div>
								<p>
									<em>
										Connect with me on LinkedIn
										<br />
										<a href="https://www.linkedin.com/in/le-lyu-90818517a/">
											<span className="bi bi-linkedin text-white mt-2 mr-3"></span>
											https://www.linkedin.com/in/le-lyu-90818517a/
										</a>
									</em>
									<br />
									<br />

									<em>
										Check out my GitHub
										<br />
										<a href="https://github.com/lelyu">
											<span className="bi bi-github text-white mt-2 mr-3"></span>
											https://github.com/lelyu
										</a>
									</em>
								</p>
							</div>
						</div>
					</div>
					<div className="col-md-4 d-none d-md-block">
						<h3>Contact</h3>
						<p>
							<a href="#">lyulelok@gmail.com</a> <br />
							<a href="#">lyule@bc.edu</a> <br />
							<a href="#">617-834-4377</a>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NavBar;
