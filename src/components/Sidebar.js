import "./Sidebar.css"

const Sidebar = ({ cities, selectedCity, onCitySelect, collapsed, open, isMobile, onToggleCollapse, onBackClick }) => {
  return (
    <div className={`sidebar ${collapsed ? "collapsed" : ""} ${open ? "open" : ""}`}>
      <div className="sidebar-header">
        <button className="back-button" onClick={onBackClick}>
          ← Back to Map
        </button>
        {!isMobile && (
          <button className="collapse-button" onClick={onToggleCollapse}>
            {collapsed ? "→" : "←"}
          </button>
        )}
      </div>

      {!collapsed && (
        <div className="sidebar-content">
          <h3>Select City</h3>
          <div className="city-cards">
            {cities.map((city) => (
              <div
                key={city.id}
                className={`city-card ${selectedCity.id === city.id ? "selected" : ""}`}
                onClick={() => onCitySelect(city)}
              >
                <div className="card-header">
                  <h4>{city.name}</h4>
                  <span className="country">{city.country}</span>
                </div>
                <div className="card-metrics">
                  <div className="metric-item">
                    <span>Sales: ${(city.metrics.sales / 1000000).toFixed(1)}M</span>
                  </div>
                  <div className="metric-item">
                    <span>Growth: {city.metrics.growth}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Sidebar
