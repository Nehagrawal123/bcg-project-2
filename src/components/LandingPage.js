import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import WorldMap from "./WorldMap"
import CityWidget from "./CityWidget"
import { citiesData } from "../data/mockData"
import "./LandingPage.css"

const LandingPage = () => {
  const [selectedAlignment, setSelectedAlignment] = useState("right")
  const [mapZoom, setMapZoom] = useState(1)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)
  const navigate = useNavigate()

  useEffect(() => {
    // Initial zoom animation
    const timer = setTimeout(() => {
      setMapZoom(1.2)
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    // Handle window resize for responsive behavior
    const handleResize = () => {
      const mobile = window.innerWidth <= 768
      setIsMobile(mobile)
      // On mobile, force bottom alignment for better UX
      if (mobile && selectedAlignment !== "bottom") {
        setSelectedAlignment("bottom")
      }
    }

    window.addEventListener("resize", handleResize)
    handleResize() // Call once on mount

    return () => window.removeEventListener("resize", handleResize)
  }, [selectedAlignment])

  const handleCityClick = (cityId) => {
    navigate(`/details/${cityId}`)
  }

  return (
    <div className="landing-page">
      <div className="header">
        <h1>Global Inventory Dashboard</h1>
        {!isMobile && (
          <div className="alignment-controls">
            <label>Widget Alignment:</label>
            <select value={selectedAlignment} onChange={(e) => setSelectedAlignment(e.target.value)}>
              <option value="right">Right</option>
              <option value="left">Left</option>
              <option value="top">Top</option>
              <option value="bottom">Bottom</option>
            </select>
          </div>
        )}
      </div>

      <div className={`main-content alignment-${selectedAlignment}`}>
        <div className="map-container">
          <WorldMap cities={citiesData} onCityClick={handleCityClick} zoom={mapZoom} />
        </div>

        <div className="widgets-container">
          <div className="widgets-scroll">
            {citiesData.map((city) => (
              <CityWidget key={city.id} city={city} onClick={() => handleCityClick(city.id)} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
