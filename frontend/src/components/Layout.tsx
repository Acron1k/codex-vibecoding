import { NavLink, Outlet } from 'react-router-dom'
import {
  AlarmClock,
  LayoutDashboard,
  KanbanSquare,
  LineChart,
  Sparkles,
  Wallet
} from 'lucide-react'

const navItems = [
  {
    to: '/',
    label: 'Дашборд',
    description: 'Общий обзор и подсказки',
    icon: LayoutDashboard
  },
  {
    to: '/projects',
    label: 'Проекты и задачи',
    description: 'Канбан и спринты',
    icon: KanbanSquare
  },
  {
    to: '/crm',
    label: 'CRM-процессы',
    description: 'Воронка и коммуникации',
    icon: AlarmClock
  },
  {
    to: '/habits',
    label: 'Ритмы и привычки',
    description: 'Личное развитие',
    icon: Sparkles
  },
  {
    to: '/finance',
    label: 'Финансы',
    description: 'Кэшфлоу и бюджеты',
    icon: Wallet
  }
]

const Layout = () => {
  const today = new Intl.DateTimeFormat('ru-RU', {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
  }).format(new Date())

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="sidebar__brand">
          <span className="sidebar__logo">VC</span>
          <div>
            <p className="sidebar__title">VibeCoding CRM</p>
            <p className="sidebar__subtitle">личный контроль потоков</p>
          </div>
        </div>
        <nav className="sidebar__nav">
          {navItems.map((item) => {
            const Icon = item.icon
            return (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `nav-link ${isActive ? 'nav-link--active' : ''}`
                }
                end={item.to === '/'}
              >
                <span className="nav-link__icon" aria-hidden="true">
                  <Icon size={20} strokeWidth={1.6} />
                </span>
                <span className="nav-link__content">
                  <span className="nav-link__label">{item.label}</span>
                  <span className="nav-link__description">{item.description}</span>
                </span>
              </NavLink>
            )
          })}
        </nav>
        <div className="sidebar__footer">
          <div>
            <p className="sidebar__footer-title">Сегодняшний фокус</p>
            <p className="sidebar__footer-text">
              Проверить интеграции и подготовить отчёт по спринту.
            </p>
          </div>
          <NavLink to="/projects" className="sidebar__footer-link">
            Смотреть план
            <LineChart size={16} strokeWidth={1.6} />
          </NavLink>
        </div>
      </aside>
      <div className="workspace">
        <header className="topbar">
          <div>
            <p className="topbar__eyebrow">{today}</p>
            <h1 className="topbar__title">Персональный командный центр</h1>
          </div>
          <div className="topbar__actions" aria-label="Контексты">
            <button type="button" className="chip chip--active">
              Основная работа
            </button>
            <button type="button" className="chip">
              Подработка
            </button>
            <button type="button" className="chip">
              Личное
            </button>
            <button type="button" className="btn btn--primary">
              Создать запись
            </button>
          </div>
        </header>
        <main className="workspace__content">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default Layout
