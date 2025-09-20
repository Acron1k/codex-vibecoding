import { NavLink } from 'react-router-dom'

const navItems = [
  {
    to: '/dashboard',
    label: 'Пульс дня',
    caption: 'Главные сигналы и события',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="3" width="7" height="5" rx="1.5" />
        <rect x="14" y="11" width="7" height="10" rx="1.5" />
        <rect x="3" y="13" width="7" height="8" rx="1.5" />
      </svg>
    ),
  },
  {
    to: '/projects',
    label: 'Проекты',
    caption: 'Kanban и ресурсный план',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 5h6v6H4z" />
        <path d="M14 4h6v7h-6z" />
        <path d="M4 15h6v5H4z" />
        <path d="M14 14h6v6h-6z" />
      </svg>
    ),
  },
  {
    to: '/habits',
    label: 'Привычки и ритмы',
    caption: 'Личные практики и здоровье',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 12l4 4 12-12" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 5h5" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M4 19h5" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    to: '/finance',
    label: 'Финансы',
    caption: 'Cashflow и прогноз',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 18V6l4 2 6-4 6 3v11" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 18h16" strokeWidth="1.6" strokeLinecap="round" />
        <circle cx="9" cy="14" r="1.2" />
        <circle cx="15" cy="13" r="1.2" />
      </svg>
    ),
  },
  {
    to: '/knowledge',
    label: 'Знания и ассистенты',
    caption: 'Плейбуки, базы и автоматизации',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 4h9a4 4 0 0 1 4 4v12" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5 20h13" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M5 4v16" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M9 8h5" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M9 12h3" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
]

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar__brand">
        <span>VIBECODING</span>
        <span>CRM 0.1</span>
      </div>

      <div className="sidebar__quick">
        <h4>Фокус недели</h4>
        <p>Развернуть матрицу автоматизаций под amoCRM и подготовить шаблоны для Bitrix24.</p>
        <small>3 интеграции в активной фазе</small>
      </div>

      <div className="sidebar__menu">
        <div className="sidebar__section">
          <span>Навигация</span>
          <div className="sidebar__links">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  ['sidebar__link', isActive ? 'is-active' : ''].filter(Boolean).join(' ')
                }
              >
                <span className="sidebar__icon">{item.icon}</span>
                <span className="sidebar__text">
                  <strong>{item.label}</strong>
                  <small>{item.caption}</small>
                </span>
              </NavLink>
            ))}
          </div>
        </div>
      </div>

      <div className="sidebar__cta">
        <button type="button">Создать артефакт</button>
        <small>Shift + Space — добавить заметку</small>
      </div>
    </aside>
  )
}

export default Sidebar
