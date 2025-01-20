import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from "./components/HomePage"
import React from "react"
import ProjectsPage from "./components/ProjectsPage"
import SingleProjectPage from "./components/SingleProjectPage"

// console.log('--->', process.env.NODE_ENV)

const basename = process.env.NODE_ENV === "development" ? "/" : "/About-Me"

function App() {
	return (
		<Router basename={basename}>
			<Routes>
				<Route path="/" element={<HomePage />} />
				{/* <Route path='/experience' element={<ExperiencePage />} /> */}
				<Route path="/projects" element={<ProjectsPage />} />
				{/*<Route path='/about' element={<AboutMePage />} />
				<Route path='/news' element={<NewsPage />} /> */}
				<Route
					path="/projects/:projectId"
					element={<SingleProjectPage />}
				/>
			</Routes>
		</Router>
	)
}

export default App
