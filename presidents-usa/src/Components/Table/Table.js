import React from 'react'
import { array } from 'prop-types'
import './Table.scss'

const Table = ({ data, onRowClick }) => {
  return (
    <table className="table">
      <thead className="table__head">
        <tr className="head__row">
          <th className="head__field">Name</th>
          <th className="head__field">Birthday</th>
          <th className="head__field">Birthplace</th>
          <th className="head__field">Deathday</th>
          <th className="head__field">Deathplace</th>
        </tr>
      </thead>
      <tbody className="table__body">
        {
          data && data.map((row, idx) => {
            let fields = Object.values(row)
            return (
              <tr
                key={idx}
                className="body__row"
                onClick={() => onRowClick(row)}
              >
                {
                  fields.map((field, idx) => {
                    return (
                      <td key={idx} className="body__field">{field}</td>
                    )
                  })
                }
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}

Table.propTypes = {
  data: array.isRequired,
}

Table.defaultProps = {
  data: [],
}

export default Table