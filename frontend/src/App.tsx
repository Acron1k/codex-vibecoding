import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Crm from './pages/Crm'
import Dashboard from './pages/Dashboard'
import Finance from './pages/Finance'
import Habits from './pages/Habits'
import Projects from './pages/Projects'

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="projects" element={<Projects />} />
        <Route path="crm" element={<Crm />} />
        <Route path="habits" element={<Habits />} />
        <Route path="finance" element={<Finance />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}

export default App
