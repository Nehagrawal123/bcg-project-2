import { useState } from "react"
import "./MiniChart.css"

const MiniChart = ({ data, showTooltip }) => {
  const [hoveredPoint, setHoveredPoint] = useState(null)

  const maxValue = Math.max(...data.map((d) => d.value))
  const minValue = Math.min(...data.map((d) => d.value))
  const range = maxValue - minValue

  const getY = (value) => {
    return 60 - ((value - minValue) / range) * 50
  }

  const getX = (index) => {
    return (index / (data.length - 1)) * 180 + 10
  }

  const pathData = data
    .map((point, index) => {
      const x = getX(index)
      const y = getY(point.value)
      return `${index === 0 ? "M" : "L"} ${x} ${y}`
    })
    .join(" ")

  return (
    <div className="mini-chart">
      <svg width="200" height="80" viewBox="0 0 200 80">
        {/* Chart line */}
        <path d={pathData} fill="none" stroke="#3b82f6" strokeWidth="2" />

        {/* Data points */}
        {data.map((point, index) => (
          <circle
            key={index}
            cx={getX(index)}
            cy={getY(point.value)}
            r="4"
            fill="#3b82f6"
            stroke="#ffffff"
            strokeWidth="2"
            className="chart-point"
            onMouseEnter={() => setHoveredPoint({ ...point, index })}
            onMouseLeave={() => setHoveredPoint(null)}
          />
        ))}
      </svg>

      {/* Tooltip */}
      {hoveredPoint && showTooltip && (
        <div className="chart-tooltip">
          <div>{hoveredPoint.quarter}</div>
          <div>${hoveredPoint.value.toLocaleString()}</div>
        </div>
      )}
    </div>
  )
}

export default MiniChart
