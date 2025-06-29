import "./DataTable.css"

const DataTable = ({ data }) => {
  const allData = [...data.historical, ...data.forecast]
  const currentQuarter = "Q3 2023" // You can make this dynamic

  return (
    <div className="data-table">
      <h3>Quarterly Data</h3>
      <table>
        <thead>
          <tr>
            <th>Quarter</th>
            <th>Historical Consumption</th>
            <th>Forecast</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {allData.map((row, index) => (
            <tr key={index} className={row.quarter === currentQuarter ? "current-quarter" : ""}>
              <td>
                {row.quarter}
                {row.quarter === currentQuarter && <span className="current-badge">Current</span>}
              </td>
              <td>{row.consumption ? row.consumption.toLocaleString() : "-"}</td>
              <td>{row.forecast ? row.forecast.toLocaleString() : "-"}</td>
              <td className="total-cell">{((row.consumption || 0) + (row.forecast || 0)).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Summary */}
      <div className="table-summary">
        <div className="summary-item">
          <span className="summary-label">Total Historical:</span>
          <span className="summary-value">
            {data.historical.reduce((sum, row) => sum + (row.consumption || 0), 0).toLocaleString()}
          </span>
        </div>
        <div className="summary-item">
          <span className="summary-label">Total Forecast:</span>
          <span className="summary-value">
            {data.forecast.reduce((sum, row) => sum + (row.forecast || 0), 0).toLocaleString()}
          </span>
        </div>
        <div className="summary-item grand-total">
          <span className="summary-label">Grand Total:</span>
          <span className="summary-value">
            {(
              data.historical.reduce((sum, row) => sum + (row.consumption || 0), 0) +
              data.forecast.reduce((sum, row) => sum + (row.forecast || 0), 0)
            ).toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  )
}

export default DataTable
