import { useState } from "react"
import MiniChart from "./MiniChart"
import "./CityWidget.css"

const CityWidget = ({ city, onClick }) => {
  const [showTooltip, setShowTooltip] = useState(false)

  return (
    <div
      className="city-widget"
      onClick={onClick}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <div className="widget-header">
        <h3>{city.name}</h3>
        <span className="country">{city.country}</span>
      </div>

      <div className="widget-metrics">
        <div className="metric">
          <span className="label">Sales</span>
          <span className="value">${(city.metrics.sales / 1000000).toFixed(1)}M</span>
        </div>
        <div className="metric">
          <span className="label">Inventory</span>
          <span className="value">{city.metrics.inventory}%</span>
        </div>
        <div className="metric">
          <span className="label">Growth</span>
          <span className={`value ${city.metrics.growth > 10 ? "positive" : "neutral"}`}>{city.metrics.growth}%</span>
        </div>
      </div>

      <div className="widget-chart">
        <MiniChart data={city.chartData} showTooltip={showTooltip} />
      </div>
    </div>
  )
}

export default CityWidget
