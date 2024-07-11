import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
	return (
		<div
			className='collapse navbar-collapse custom-navmenu'
			id='main-navbar'>
			<div className='container py-2 py-md-5'>
				<div className='row align-items-start'>
					<div className='col-md-2'>
						<ul className='custom-menu'>
							<li className='active'>
								<Link to='/'>Home</Link>
							</li>
							<li>
								<Link to='/about'>About Me</Link>
							</li>
							<li>
								<Link to='/projects'>Projects</Link>
							</li>
							<li>
								<Link to='/experience'>Experience</Link>
							</li>
							<li>
								<Link to='/news'>News</Link>
							</li>
						</ul>
					</div>
					<div className='col-md-6 d-none d-md-block mr-auto'>
						<div className='tweet d-flex'>
							<div>
								<p>
									<em>
										Connect with me on LinkedIn
										<br />
										<a href='https://www.linkedin.com/in/lelyu/'>
											<span className='bi bi-linkedin text-white mt-2 mr-3'></span>
											https://www.linkedin.com/in/lelyu/
										</a>
									</em>
									<br />
									<br />

									<em>
										Check out my GitHub
										<br />
										<a href='https://github.com/lelyu'>
											<span className='bi bi-github text-white mt-2 mr-3'></span>
											https://github.com/lelyu
										</a>
									</em>
								</p>
							</div>
						</div>
					</div>
					<div className='col-md-4 d-none d-md-block'>
						<h3>Contact</h3>
						<p>
							<Link to='#'>lyulelok@gmail.com</Link> <br />
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default NavBar
