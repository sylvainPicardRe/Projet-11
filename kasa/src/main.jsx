import { StrictMode } from 'react'
import ReactDOM from "react-dom/client"
import { BrowserRouter as Router, Routes, Route } from "react-router"
import './index.css'
import Home from "./pages/Home/Home.jsx"
import About from "./pages/About/About.jsx"
import Header from "./components/Header"
import Error from "./components/Error"

import App from './App.jsx'

const root = document.getElementById('root')

ReactDOM.createRoot(root).render(
  <StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  </StrictMode>,
  root
)
