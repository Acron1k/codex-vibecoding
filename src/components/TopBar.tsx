const contexts = [
  {
    label: 'Основная работа',
    focus: '5.5 ч / 8 ч',
    hint: 'SLA 97%',
  },
  {
    label: 'Интеграторство',
    focus: '2 проекта',
    hint: '+18% к выручке',
    tone: 'secondary',
  },
  {
    label: 'Личное',
    focus: '7/9 привычек',
    hint: 'Утро закрыто',
    tone: 'amber',
  },
]

const TopBar = () => {
  const formattedDate = new Intl.DateTimeFormat('ru-RU', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  }).format(new Date())

  return (
    <header className="topbar">
      <div className="topbar__intro">
        <p>{formattedDate}</p>
        <h2>Привет, Алексей 👋</h2>
      </div>

      <div className="topbar__contexts">
        {contexts.map((item) => (
          <span
            key={item.label}
            className={[
              'topbar__chip',
              item.tone === 'secondary' ? 'topbar__chip--secondary' : '',
              item.tone === 'amber' ? 'topbar__chip--amber' : '',
            ]
              .filter(Boolean)
              .join(' ')}
          >
            <span>{item.label}</span>
            <strong>{item.focus}</strong>
            <small>{item.hint}</small>
          </span>
        ))}
      </div>

      <div className="topbar__actions">
        <button type="button" className="button-ghost">
          Команда недели
        </button>
        <button type="button" className="button-primary">
          Новая запись
        </button>
      </div>
    </header>
  )
}

export default TopBar
