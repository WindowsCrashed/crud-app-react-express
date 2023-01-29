import React from 'react'
import TableRow from '../table-row'
import './style.css'

function Table({ headers, data }) {
    return ( 
        <div className='table'>
            <table>
                <thead>
                    <tr>
                        { headers.map((header, index) => <th key={ index }>{ header }</th>) }
                    </tr>                    
                </thead>
                <tbody>
                    { data.map((value, index) => <TableRow key={ index } data={ value }/>) }
                </tbody>
            </table>
        </div>
    )
}

export default Table