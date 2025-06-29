import { useState } from "react"
import "./WorldMap.css"

const WorldMap = ({ cities, onCityClick, zoom }) => {
  const [hoveredCity, setHoveredCity] = useState(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleCityHover = (city, event) => {
    setHoveredCity(city)
    setMousePosition({ x: event.clientX, y: event.clientY })
  }

  const handleMouseMove = (event) => {
    if (hoveredCity) {
      setMousePosition({ x: event.clientX, y: event.clientY })
    }
  }

  // Convert lat/lng to SVG coordinates (simplified projection)
  const projectCoordinates = (lat, lng) => {
    const x = ((lng + 180) / 360) * 800
    const y = ((90 - lat) / 180) * 400
    return { x, y }
  }

  return (
    <div className="world-map" onMouseMove={handleMouseMove}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 800 400"
        style={{ transform: `scale(${zoom})`, transition: "transform 1s ease-in-out" }}
      >
        {/* Simplified world map background */}
        <rect width="800" height="400" fill="#e6f3ff" />

        {/* Continents (simplified shapes) */}
        <g fill="#d4d4d8" stroke="#a1a1aa" strokeWidth="1">
          {/* North America */}
          <path d="M50 80 L200 70 L220 120 L180 180 L120 160 L80 140 Z" />
          {/* South America */}
          <path d="M140 200 L180 190 L200 250 L170 320 L140 300 L120 240 Z" />
          {/* Europe */}
          <path d="M350 60 L420 55 L430 90 L400 110 L360 100 Z" />
          {/* Africa */}
          <path d="M380 120 L450 115 L470 200 L440 280 L400 270 L370 200 Z" />
          {/* Asia */}
          <path d="M450 50 L650 45 L680 120 L620 160 L580 140 L520 100 Z" />
          {/* Australia */}
          <path d="M600 250 L680 245 L690 280 L650 290 L620 275 Z" />
        </g>

        {/* City points */}
        {cities.map((city) => {
          const { x, y } = projectCoordinates(city.coordinates.lat, city.coordinates.lng)
          return (
            <g key={city.id}>
              <circle
                cx={x}
                cy={y}
                r="8"
                fill="#ef4444"
                stroke="#ffffff"
                strokeWidth="2"
                className="city-point"
                onMouseEnter={(e) => handleCityHover(city, e)}
                onMouseLeave={() => setHoveredCity(null)}
                onClick={() => onCityClick(city.id)}
                style={{ cursor: "pointer" }}
              />
              <circle cx={x} cy={y} r="12" fill="rgba(239, 68, 68, 0.3)" className="city-pulse" />
            </g>
          )
        })}
      </svg>

      {/* Tooltip */}
      {hoveredCity && (
        <div
          className="map-tooltip"
          style={{
            left: mousePosition.x + 10,
            top: mousePosition.y - 10,
          }}
        >
          <h4>
            {hoveredCity.name}, {hoveredCity.country}
          </h4>
          <p>Sales: ${hoveredCity.metrics.sales.toLocaleString()}</p>
          <p>Inventory: {hoveredCity.metrics.inventory}%</p>
          <p>Growth: {hoveredCity.metrics.growth}%</p>
        </div>
      )}
    </div>
  )
}

export default WorldMap
