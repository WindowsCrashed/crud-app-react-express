import React from 'react'

function TableRow({ data }) {
	return (
		<tr>
			{data?.map((value, index) => (
				<td key={index}>{value}</td>
			))}
		</tr>
	)
}

export default TableRow
