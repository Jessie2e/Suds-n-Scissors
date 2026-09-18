import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Pricing from './pages/Pricing'
import Boarding from './pages/Boarding'
import Gallery from './pages/Gallery'
import About from './pages/About'
import Reviews from './pages/Reviews'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/pricing" element={<Pricing/>} />
        <Route path="/boarding" element={<Boarding/>} />
        <Route path="/specialty" element={<Navigate to="/pricing#extras" replace />} />
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/reviews" element={<Reviews/>} />
      </Routes>
    </Layout>
  )
}
