import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Projects = () => {
	const [projects, setProjects] = useState([])
	const [searchText, setSearchText] = useState('')
	const [filterKey, setFilterKey] = useState('*')

	useEffect(() => {
		// Fetch the data.json file from the public folder
		fetch(`${process.env.PUBLIC_URL}/data.json`)
			.then((response) => {
				console.log('---->', response)
				return response.json()
			})
			.then((data) => {
				setProjects(data.initialProjects)
			})
	}, [])

	const filteredProjects = projects.filter((project) => {
		const matchesTitle = project.title
			.toLowerCase()
			.includes(searchText.toLowerCase())
		const matchesCategory = project.category
			.toLowerCase()
			.includes(searchText.toLowerCase())
		const matchesFilter =
			filterKey === '*' ||
			project.category.toLowerCase().includes(filterKey.replace('.', ''))
		return (matchesTitle || matchesCategory) && matchesFilter
	})

	useEffect(() => {
		AOS.refresh()
	}, [filteredProjects])

	const handleSearchChange = (e) => {
		setSearchText(e.target.value)
	}

	const handleFilterClick = (filter) => {
		setFilterKey(filter)
	}

	return (
		<div className='container'>
			<h2>My Projects</h2>
			<div className='row mb-5 align-items-center'>
				<div className='col-md-6' data-aos='fade-up'>
					<input
						type='text'
						placeholder='Search projects...'
						value={searchText}
						onChange={handleSearchChange}
						className='form-control'
					/>
				</div>
				<div
					className='col-md-6 text-start text-lg-end'
					data-aos='fade-up'
					data-aos-delay='100'>
					<div id='filters' className='filters'>
						<button
							onClick={() => handleFilterClick('*')}
							className={filterKey === '*' ? 'active' : ''}>
							All
						</button>
						<button
							onClick={() => handleFilterClick('.vis')}
							className={filterKey === '.vis' ? 'active' : ''}>
							Data Visualization
						</button>
						<button
							onClick={() => handleFilterClick('.fin')}
							className={filterKey === '.fin' ? 'active' : ''}>
							Financial Forecasting
						</button>
						<button
							onClick={() => handleFilterClick('.auto')}
							className={filterKey === '.auto' ? 'active' : ''}>
							Automation
						</button>
						<button
							onClick={() => handleFilterClick('.index')}
							className={filterKey === '.index' ? 'active' : ''}>
							Data Indexing
						</button>
					</div>
				</div>
			</div>

			<div
				id='portfolio-grid'
				className='row no-gutter'
				data-aos='fade-up'
				data-aos-delay='200'>
				{filteredProjects.map((project) => (
					<div
						key={project.id}
						className={`item ${project.filterType} col-sm-6 col-md-4 col-lg-4 mb-4`}>
						<Link
							to={project.pageLink}
							className='item-wrap fancybox'>
							<div className='work-info'>
								<h3>{project.title}</h3>
								<span>{project.category}</span>
							</div>
							<img
								className='img-fluid'
								src={process.env.PUBLIC_URL + project.imageSrc}
								alt={project.title}
							/>
						</Link>
					</div>
				))}
			</div>
		</div>
	)
}

export default Projects
