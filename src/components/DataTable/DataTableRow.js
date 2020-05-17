import React from 'react'

import formatNumber from '../../utils/numberFomater'

class DataTableRow extends React.Component {

	populateRow = () => {
		const keys = Object.keys(this.props.row);
		console.log(keys)
		return keys.filter((key) => 
			key === "country" ||
			key === "cases" ||
			key === "todayCases" ||
			key === "deaths" ||
			key === "todayDeaths" ||
			key === "recovered" ||
			key === "tests"
			)
		.map((key, index) => {
			return <td key={key}>{formatNumber(this.props.row[key])}</td>
		})
}

render() {
		return (
			this.populateRow()
		)
	}
}

export default DataTableRow