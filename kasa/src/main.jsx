import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router'

import './utils/style/general.scss'

import Home from './pages/Home/'
import About from './pages/About/'
import Property from './pages/Property/'

import Header from './components/Header'
import Error from './components/Error'
import Footer from './components/Footer'

const container = document.getElementById('root')

const root = ReactDOM.createRoot(container)

root.render(
  <StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/property/:id" element={<Property />} />
        <Route path="*" element={<Error />} />
        <Route path="/404" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </StrictMode>,
)
