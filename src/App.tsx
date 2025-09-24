import { Navigate, Route, Routes } from 'react-router-dom'
import type { ComponentType } from 'react'
import './App.css'
import {
  BrainCircuit,
  ChartLine,
  LayoutDashboard,
  PanelsLeftBottom,
} from 'lucide-react'
import Layout from './components/Layout'
import DashboardPage from './pages/DashboardPage'
import ProjectsPage from './pages/ProjectsPage'
import HabitsPage from './pages/HabitsPage'
import FinancePage from './pages/FinancePage'

export type NavItem = {
  path: string
  label: string
  description: string
  icon: ComponentType<{ size?: number }>
}

const NAV_ITEMS: NavItem[] = [
  {
    path: '/',
    label: 'Обзор',
    description: 'Сводка по контекстам, настроению и фокусу недели',
    icon: LayoutDashboard,
  },
  {
    path: '/projects',
    label: 'Проекты',
    description: 'Доски задач, загрузка ресурсов и таймлайн интеграций',
    icon: PanelsLeftBottom,
  },
  {
    path: '/habits',
    label: 'Привычки',
    description: 'Ритуалы, состояние энергии и эксперименты',
    icon: BrainCircuit,
  },
  {
    path: '/finance',
    label: 'Финансы',
    description: 'Доходы, бюджеты и прогнозы по направлениям',
    icon: ChartLine,
  },
]

function App() {
  return (
    <Routes>
      <Route element={<Layout navItems={NAV_ITEMS} /> }>
        <Route index element={<DashboardPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/habits" element={<HabitsPage />} />
        <Route path="/finance" element={<FinancePage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
