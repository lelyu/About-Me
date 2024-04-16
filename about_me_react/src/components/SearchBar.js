import React, { useState, useEffect } from "react";
const SearchBar = ({ data, renderFilteredData }) => {
	const [searchQuery, setSearchQuery] = useState("");
	const [filteredData, setFilteredData] = useState([]);

	useEffect(() => {
		if (searchQuery.trim() === "") {
			setFilteredData(data);
		} else {
			const filtered = data.filter(
				(item) =>
					item.content
						.toLowerCase()
						.includes(searchQuery.toLowerCase()) ||
					item.date.toLowerCase().includes(searchQuery.toLowerCase())
			);
			setFilteredData(filtered);
		}
	}, [searchQuery, data]);

	return (
		<>
			<input
				className="form-control form-control-sm"
				type="text"
				placeholder="Search..."
				value={searchQuery}
				onChange={(e) => setSearchQuery(e.target.value)}
			/>

			{renderFilteredData(filteredData)}
		</>
	);
};

export default SearchBar;
