import React from 'react'

const Experience = () => {
	return (
		<div className='section'>
			<div className='container'>
				<div className='row justify-content-center text-center mb-4'>
					<div className='col-5'>
						<h3 className='h3 heading'>My Experience</h3>
						<p>
							I love to learn new things and apply them to my work
							and life
						</p>
					</div>
				</div>
				<div className='row'>
					<div className='col-12 col-sm-6 col-md-6 col-lg-3'>
						<i className='bi bi-card-checklist'></i>
						<h4 className='h4 mb-2'>Education</h4>
						<p>Boston College</p>
						<ul className='list-unstyled list-line'>
							<li>Class of 2024</li>
							<li>GPA: 3.7</li>
							<li>Dean's List</li>
							<li>Major: Computer Science (BS)</li>
							<li>Major: Economics (BA)</li>
						</ul>
					</div>
					<div className='col-12 col-sm-6 col-md-6 col-lg-3'>
						<i className='bi bi-binoculars'></i>
						<h4 className='h4 mb-2'>Work Experience</h4>
						<p>Boston College and Bingo Software Co. Ltd.</p>
						<ul className='list-unstyled list-line'>
							<li>
								Lab Consultant at Digital Humanities Lab, Boston
								College (Jan 2023 - May 2024)
							</li>
							<li>
								Software Engineer at Bingo (Jun 2023 - Aug 2023)
							</li>
							<li>
								Teaching Assistant for the course Data
								Visualization (Aug 2023 - Dec 2023)
							</li>
							<li>
								Teaching Assistant for the course Algorithm (Jan
								2024 - May 2024)
							</li>
						</ul>
					</div>
					<div className='col-12 col-sm-6 col-md-6 col-lg-3'>
						<i className='bi bi-brightness-high'></i>
						<h4 className='h4 mb-2'>Skills</h4>
						<p>Coding and Business</p>
						<ul className='list-unstyled list-line'>
							<li>Coding Languages: Python, Java, JavaScript</li>
							<li>Coding Frameworks: Django, React, Vue</li>
							<li>Data Analysis: SPSS, Stata, R</li>
							<li>Data Visualization: Tableau, D3.js</li>
							<li>Others: MySQL, HTML, CSS</li>
						</ul>
					</div>
					<div className='col-12 col-sm-6 col-md-6 col-lg-3'>
						<i className='bi bi-calendar4-week'></i>
						<h4 className='h4 mb-2'>Interests</h4>
						<p>History, Language, and Culture</p>
						<ul className='list-unstyled list-line'>
							<li>
								Learning a new language: currently I speak
								English, Mandarin, and Cantonese.
							</li>

							<li>Chess: Recreational but competitive player</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Experience
