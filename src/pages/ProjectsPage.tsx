const initiativeSummary = [
  {
    name: 'Контур телефонии',
    context: 'Основная работа',
    progress: 72,
    highlight: 'Раскатка новых сценариев IVR и мониторинг SLA',
    status: 'В работе',
  },
  {
    name: 'Воронка Loft.Tech',
    context: 'Подработка',
    progress: 58,
    highlight: 'Готовы три автоворонки, на подходе обучение менеджеров',
    status: 'Идет демонстрация',
  },
  {
    name: 'Знания и плейбуки',
    context: 'Общее',
    progress: 46,
    highlight: 'Обновлены 5 гайдов, осталось описать сценарии резервирования',
    status: 'Фаза систематизации',
  },
]

const boardColumns = [
  {
    title: 'Фокус недели',
    accent: '3 задач',
    tasks: [
      {
        title: 'Пилот интеграции телефонии с Power BI',
        context: 'Основная работа',
        eta: 'Дедлайн: 25 июля',
        detail: 'Синхронизация метрик звонков и алертов в едином дашборде.',
      },
      {
        title: 'Настройка customer journey для Loft.Tech',
        context: 'Подработка',
        eta: 'Спринт 24 — 27 июля',
        detail: 'Гейты квалификации, SLA ответов и виджеты в amoCRM.',
      },
    ],
  },
  {
    title: 'Активные спринты',
    accent: '4 задач',
    tasks: [
      {
        title: 'Рефакторинг автоматизаций Bitrix24',
        context: 'Основная работа',
        eta: 'В работе',
        detail: 'Удалить дублирующиеся роботы, оптимизировать уведомления.',
      },
      {
        title: 'Документация «Белый список телефонии»',
        context: 'Общее',
        eta: 'Ревью 26 июля',
        detail: 'Гайд по маршрутам, бекапам и аварийным сценариям.',
      },
      {
        title: 'Онбординг нового интегратора',
        context: 'Подработка',
        eta: 'Старт в субботу',
        detail: 'Подготовить стек, гайды и чек-лист запуска.',
      },
    ],
  },
  {
    title: 'На радаре',
    accent: '3 инициативы',
    tasks: [
      {
        title: 'Конфигурация Service Desk',
        context: 'Основная работа',
        eta: 'Подготовка Q3',
        detail: 'Шаблоны заявок, SLA и база решений.',
      },
      {
        title: 'Геймификация привычек',
        context: 'Личное',
        eta: 'Исследование',
        detail: 'Система достижений и визуальные награды.',
      },
      {
        title: 'Карта интеграций 2025',
        context: 'Стратегия',
        eta: 'Черновик',
        detail: 'Сводный документ по развитию CRM-ландшафта.',
      },
    ],
  },
]

const automationQueue = [
  {
    name: 'Автоприглашения на демо',
    impact: 'Высокий',
    status: 'Тестирование',
    note: 'Триггер по тёплым лидам в amoCRM с записью на звонок.',
  },
  {
    name: 'Пульс удовлетворённости',
    impact: 'Средний',
    status: 'В работе',
    note: 'Сбор NPS после закрытия обращения в Bitrix24.',
  },
  {
    name: 'Мониторинг ошибок телефонии',
    impact: 'Критичный',
    status: 'Внедрено',
    note: 'Алерты в Telegram при падениях или задержках.',
  },
]

const ProjectsPage = () => {
  return (
    <div className="page">
      <section className="section">
        <div className="section-header">
          <h3>Главные инициативы</h3>
          <button className="btn link">Дорожная карта квартала</button>
        </div>
        <div className="card-grid initiatives-grid">
          {initiativeSummary.map((initiative) => (
            <article key={initiative.name} className="panel initiative-card">
              <div className="initiative-card__meta">
                <span className="chip">{initiative.context}</span>
                <span className="badge">{initiative.status}</span>
              </div>
              <h4>{initiative.name}</h4>
              <p>{initiative.highlight}</p>
              <div className="progress">
                <div className="progress__track">
                  <div className="progress__value" style={{ width: `${initiative.progress}%` }} />
                </div>
                <span className="progress__label">Прогресс {initiative.progress}%</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <h3>Доска приоритетов</h3>
          <div className="chips-inline">
            <span className="chip">Спринт 23 — 27 июля</span>
            <span className="chip chip--muted">10 задач</span>
          </div>
        </div>
        <div className="board-grid">
          {boardColumns.map((column) => (
            <div key={column.title} className="panel board-column">
              <div className="board-column__header">
                <h4>{column.title}</h4>
                <span className="badge">{column.accent}</span>
              </div>
              <div className="board-column__tasks">
                {column.tasks.map((task) => (
                  <div key={task.title} className="task-card">
                    <div className="task-card__title">{task.title}</div>
                    <p>{task.detail}</p>
                    <div className="task-card__footer">
                      <span className="chip">{task.context}</span>
                      <span className="task-card__eta">{task.eta}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="panel automation-panel">
          <div className="section-header">
            <h3>Очередь автоматизаций</h3>
            <button className="btn ghost">Создать правило</button>
          </div>
          <ul className="automation-list">
            {automationQueue.map((item) => (
              <li key={item.name} className="automation-item">
                <div>
                  <h4>{item.name}</h4>
                  <p>{item.note}</p>
                </div>
                <div className="automation-item__meta">
                  <span className="chip">{item.impact}</span>
                  <span className="badge">{item.status}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}

export default ProjectsPage
