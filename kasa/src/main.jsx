import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router'
import './index.css'
import Home from './pages/Home/'
import About from './pages/About/'
import Header from './components/Header'
import Error from './components/Error'
import Banner from './components/Banner'

import App from './App.jsx'

const container = document.getElementById('root')

const root = ReactDOM.createRoot(container)

root.render(
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
)
