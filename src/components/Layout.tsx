import { NavLink, Outlet, useLocation } from 'react-router-dom'
import { Bell, CalendarDays, Flame, PlusCircle, Sparkles } from 'lucide-react'
import type { NavItem } from '../App'

type LayoutProps = {
  navItems: NavItem[]
}

const Layout = ({ navItems }: LayoutProps) => {
  const location = useLocation()
  const current =
    navItems.find((item) =>
      item.path === '/' ? location.pathname === item.path : location.pathname.startsWith(item.path),
    ) ?? null

  const today = new Date()
  const formattedDate = new Intl.DateTimeFormat('ru-RU', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  }).format(today)
  const dateWithCapital = formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1)

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="sidebar__brand">
          <span className="logo">Vibe<span>OS</span></span>
          <p>Личный операционный центр</p>
        </div>
        <nav className="nav">
          {navItems.map((item) => {
            const Icon = item.icon
            return (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
              >
                <span className="nav-icon">
                  <Icon size={18} />
                </span>
                <span className="nav-content">
                  <span className="nav-label">{item.label}</span>
                  <span className="nav-description">{item.description}</span>
                </span>
              </NavLink>
            )
          })}
        </nav>
        <div className="sidebar__focus panel subtle">
          <div className="sidebar__badge">
            <Flame size={16} />
            Фокус недели
          </div>
          <h4>Стабилизировать коммуникации</h4>
          <p>Закрыть бета-тест телефонии и свернуть ручные триггеры в Bitrix24.</p>
        </div>
      </aside>
      <div className="main-area">
        <header className="topbar">
          <div className="topbar__context">
            <span className="topbar__kicker">Неделя 28</span>
            <h1>{current?.label ?? 'Рабочее пространство'}</h1>
            <p>
              {current?.description ??
                'Управляй задачами, привычками и финансами в едином ритме.'}
            </p>
          </div>
          <div className="topbar__actions">
            <button className="btn ghost">
              <CalendarDays size={16} />
              {dateWithCapital}
            </button>
            <button className="btn ghost">
              <Bell size={16} />
              3 напоминания
            </button>
            <button className="btn primary">
              <PlusCircle size={18} />
              Быстрый захват
            </button>
          </div>
        </header>
        <main className="content">
          <div className="content__intro panel glow">
            <Sparkles size={18} />
            Привет! Энергия стабильна, можно планировать смелые интеграции и эксперименты.
          </div>
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default Layout
