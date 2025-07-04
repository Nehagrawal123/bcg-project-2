import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import LandingPage from "./components/LandingPage"
import DetailsPage from "./components/DetailsPage"

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/details/:cityId" element={<DetailsPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
