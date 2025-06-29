import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import "./Chart.css"

const Chart = ({ data, settings }) => {
  const allData = [...data.historical, ...data.forecast].map((item, index) => ({
    quarter: item.quarter,
    historical: item.consumption || null,
    forecast: item.forecast || null,
    index,
  }))

  return (
    <div className="chart-container">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={allData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis dataKey="quarter" stroke="#666" fontSize={12} angle={-45} textAnchor="end" height={60} />
          <YAxis stroke="#666" fontSize={12} tickFormatter={(value) => `${(value / 1000).toFixed(0)}K`} />
          <Tooltip
            content={({ active, payload, label }) => {
              if (active && payload && payload.length) {
                return (
                  <div className="chart-tooltip">
                    <p className="tooltip-label">{label}</p>
                    {payload.map((entry, index) => (
                      <div key={index} className="tooltip-item">
                        <span className="tooltip-name" style={{ color: entry.color }}>
                          {entry.name}:
                        </span>
                        <span className="tooltip-value">{entry.value ? entry.value.toLocaleString() : "N/A"}</span>
                      </div>
                    ))}
                  </div>
                )
              }
              return null
            }}
          />

          {settings.showHistorical && (
            <Line
              type="monotone"
              dataKey="historical"
              stroke="#3b82f6"
              strokeWidth={3}
              dot={{ fill: "#3b82f6", strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6, fill: "#3b82f6" }}
              name="Historical"
              connectNulls={false}
            />
          )}

          {settings.showForecast && (
            <Line
              type="monotone"
              dataKey="forecast"
              stroke="#10b981"
              strokeWidth={3}
              strokeDasharray="8 4"
              dot={{ fill: "#10b981", strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6, fill: "#10b981" }}
              name="Forecast"
              connectNulls={false}
            />
          )}
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart
