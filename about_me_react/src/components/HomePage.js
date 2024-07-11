import React from 'react'
import NavBar from './NavBar'
import Projects from './Projects'
import Experience from './Experience'
import Header from './Header'
import { Link } from 'react-router-dom'
import News from './News'
const HomePage = () => {
	return (
		<div>
			<NavBar />
			<Header />

			<main id='main'>
				<br />
				<br />
				<section className='intro-section' data-aos='fade-up'>
					<div className='container'>
						<div className='row'>
							<div className='col-lg-12'>
								<h2>Hi, I'm Le</h2>
								<p>
									I graduated from Boston College in May 2024.
									I currently make websites for small local
									businesses in Massachusetts as an
									independent developer.
								</p>
							</div>
						</div>
					</div>
				</section>
				<section className='section site-portfolio'>
					<Projects />
				</section>

				<section className='section services'>
					<Experience />
				</section>
				<News />
			</main>

			<Link
				to='#'
				className='back-to-top d-flex align-items-center justify-content-center'>
				<i className='bi bi-arrow-up-short'></i>
			</Link>
		</div>
	)
}

export default HomePage
