import React from 'react'
import { useState, useEffect } from 'react'
import SearchBar from './SearchBar'
const News = () => {
	const [news, setNews] = useState(null)
	useEffect(() => {
		const fetchNews = async () => {
			try {
				const response = await fetch(
					`${process.env.PUBLIC_URL}/data.json`
				)
				if (!response.ok) {
					throw new Error('Network response was not ok')
				}
				const data = await response.json()
				setNews(data.news)
			} catch (error) {
				console.error(
					'There has been a problem with your fetch operation:',
					error
				)
			}
		}
		fetchNews()
	}, [])

	if (!news) {
		return <div>Loading...</div>
	}
	return (
		<div>
			<main id='main'>
				<section className='section'>
					<div className='container'>
						<div className='row mb-4 align-items-center'>
							<div className='col-md-6' data-aos='fade-up'>
								<h2>News</h2>
								<p>Update Irregularly</p>
							</div>
						</div>
					</div>

					<div className='site-section pb-0 services'>
						<div className='container'>
							<div className='row'>
								<SearchBar
									data={news}
									renderFilteredData={(filteredData) =>
										filteredData.map((item, index) => (
											<div
												className='col-12 col-sm-6 col-md-6 col-lg-6 mb-5'
												data-aos='fade-up'
												key={index}>
												<h4 className='h4 mb-2'>
													{item.date}
												</h4>
												<p>{item.content}</p>
											</div>
										))
									}
								/>
							</div>
						</div>
					</div>
				</section>
			</main>
		</div>
	)
}

export default News
