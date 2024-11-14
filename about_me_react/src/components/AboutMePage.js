import React from 'react'
import NavBar from './NavBar'
import Header from './Header'
const AboutMePage = () => {
	return (
		<div>
			<NavBar />
			<Header />
			<main id='main'>
				<section className='section pb-5'>
					<div className='container'>
						<div className='row mb-5 align-items-end'>
							<div className='col-md-6' data-aos='fade-up'>
								<h2>About Me</h2>
								<p className='mb-0'>
									I currently live in Belmont, Massachusetts.
								</p>
							</div>
						</div>

						<div className='row'>
							<div
								className='col-md-4 ml-auto order-2'
								data-aos='fade-up'>
								<h3 className='h3 mb-4'>
									Things I have been learning
								</h3>
								<ul className='list-unstyled'>
									<li className='mb-3'>
										<div className='d-flex mb-1'>
											<strong>Node</strong>
										</div>
										<div className='progress custom-progress'>
											<div
												className='progress-bar'
												role='progressbar'
												style={{ width: '80%' }}
												aria-valuenow='80'
												aria-valuemin='0'
												aria-valuemax='100'></div>
										</div>
									</li>
									<li className='mb-3'>
										<div className='d-flex mb-1'>
											<strong>React</strong>
										</div>
										<div className='progress custom-progress'>
											<div
												className='progress-bar'
												role='progressbar'
												style={{ width: '90%' }}
												aria-valuenow='96'
												aria-valuemin='0'
												aria-valuemax='100'></div>
										</div>
									</li>
									<li className='mb-3'>
										<div className='d-flex mb-1'>
											<strong>Express</strong>
										</div>
										<div className='progress custom-progress'>
											<div
												className='progress-bar'
												role='progressbar'
												style={{ width: '70%' }}
												aria-valuenow='99'
												aria-valuemin='0'
												aria-valuemax='100'></div>
										</div>
									</li>
									<li className='mb-3'>
										<div className='d-flex mb-1'>
											<strong>MongoDB</strong>
										</div>
										<div className='progress custom-progress'>
											<div
												className='progress-bar'
												role='progressbar'
												style={{ width: '50%' }}
												aria-valuenow='87'
												aria-valuemin='0'
												aria-valuemax='100'></div>
										</div>
									</li>
								</ul>
							</div>

							<div
								className='col-md-7 mb-5 mb-md-0'
								data-aos='fade-up'>
								<p>
									<img
										src={
											process.env.PUBLIC_URL +
											'/img/my_photo.png'
										}
										alt='img'
										className='img-fluid'
										id='my-photo'
									/>
								</p>
							</div>
						</div>
					</div>
				</section>
			</main>
		</div>
	)
}

export default AboutMePage
