import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/home'
import Step1Page from './pages/step1'
import Step2Page from './pages/step2'

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/step/1" element={<Step1Page />} />
        <Route path="/step/2" element={<Step2Page />} />
      </Routes>
    </BrowserRouter>
  )
}
