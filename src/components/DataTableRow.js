import React from 'react'

import formatNumber from '../utils/numberFomater'

class DataTableRow extends React.Component {

	populateRow = () => {
		const keys = Object.keys(this.props.row);
		return keys.filter((key) => 
			key !== 'countryInfo'
			&& key !== 'updated'
			&& key !== 'critical'
			&& key !== 'active'
			&& key !== 'casesPerOneMillion'
			&& key !== 'deathsPerOneMillion'
			&& key !== 'testsPerOneMillion'
			&& key !== 'continent'
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