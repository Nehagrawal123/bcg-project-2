import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import Sidebar from "./Sidebar"
import Chart from "./Chart"
import DataTable from "./DataTable"
import { citiesData, detailsData } from "../data/mockData"
import "./DetailsPage.css"

const DetailsPage = () => {
  const { cityId } = useParams()
  const navigate = useNavigate()
  const [selectedCity, setSelectedCity] = useState(
    citiesData.find((city) => city.id === Number.parseInt(cityId)) || citiesData[0],
  )
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)
  const [chartSettings, setChartSettings] = useState({
    showHistorical: true,
    showForecast: true,
  })

  useEffect(() => {
    // Handle window resize for responsive behavior
    const handleResize = () => {
      const mobile = window.innerWidth <= 768
      setIsMobile(mobile)
      if (mobile) {
        setSidebarCollapsed(false)
        setSidebarOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)
    handleResize() // Call once on mount

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const handleCitySelect = (city) => {
    setSelectedCity(city)
    if (isMobile) {
      setSidebarOpen(false) // Close sidebar on mobile after selection
    }
  }

  const handleBackClick = () => {
    navigate("/")
  }

  const toggleChartLine = (lineType) => {
    setChartSettings((prev) => ({
      ...prev,
      [lineType]: !prev[lineType],
    }))
  }

  const toggleSidebar = () => {
    if (isMobile) {
      setSidebarOpen(!sidebarOpen)
    } else {
      setSidebarCollapsed(!sidebarCollapsed)
    }
  }

  return (
    <div className="details-page">
      {isMobile && (
        <button className="mobile-menu-button" onClick={toggleSidebar}>
          ☰
        </button>
      )}
      
      <Sidebar
        cities={citiesData}
        selectedCity={selectedCity}
        onCitySelect={handleCitySelect}
        collapsed={sidebarCollapsed}
        open={sidebarOpen}
        isMobile={isMobile}
        onToggleCollapse={toggleSidebar}
        onBackClick={handleBackClick}
      />

      <div className={`main-content ${sidebarCollapsed ? "sidebar-collapsed" : ""}`}>
        <div className="content-header">
          <h1>{selectedCity.name} - Inventory Details</h1>
          <div className="card-id">Card ID: {selectedCity.id}</div>
        </div>

        <div className="chart-section">
          <div className="chart-controls">
            <div className="chart-switches">
              <label className="switch">
                <input
                  type="checkbox"
                  checked={chartSettings.showHistorical}
                  onChange={() => toggleChartLine("showHistorical")}
                />
                <span className="slider"></span>
                Historical Data
              </label>
              <label className="switch">
                <input
                  type="checkbox"
                  checked={chartSettings.showForecast}
                  onChange={() => toggleChartLine("showForecast")}
                />
                <span className="slider"></span>
                Forecast Data
              </label>
            </div>
          </div>

          <Chart data={detailsData} settings={chartSettings} />
        </div>

        <div className="table-section">
          <DataTable data={detailsData} />
        </div>
      </div>
    </div>
  )
}

export default DetailsPage
