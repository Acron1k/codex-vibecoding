const contextStats = [
  {
    id: 'core',
    title: 'Основная работа',
    tasks: 18,
    progress: 64,
    highlight: 'Спринт по телефонии и омниканалу',
    trend: '+8% эффективности',
  },
  {
    id: 'freelance',
    title: 'Подработка',
    tasks: 9,
    progress: 52,
    highlight: 'Новый клиент Loft.Tech в онбординге',
    trend: '+12% выручки',
  },
  {
    id: 'personal',
    title: 'Личное',
    tasks: 6,
    progress: 81,
    highlight: 'Музыка, спорт и трекинг привычек',
    trend: '4 привычки без срывов',
  },
]

const timeline = [
  {
    time: '09:30',
    title: 'Стендап по инфраструктуре',
    context: 'Основная работа',
    description: 'Синхронизация по задачам amoCRM/Bitrix24 и статусам телефонии.',
  },
  {
    time: '11:00',
    title: 'Аудит воронки Loft.Tech',
    context: 'Подработка',
    description: 'Собрать требования и подготовить план автоматизаций.',
  },
  {
    time: '15:00',
    title: 'Звонок с провайдером телефонии',
    context: 'Основная работа',
    description: 'Уточнить маршрутизацию и новые сценарии SIP-транков.',
  },
  {
    time: '19:00',
    title: 'Музыкальная практика',
    context: 'Личное',
    description: '45 минут гитары и работа над новой прогрессией аккордов.',
  },
]

const insights = [
  {
    title: 'Автоматизация клиентских сценариев',
    body: 'Новые боты реагирования сэкономили 4.5 часа ручной поддержки на этой неделе.',
  },
  {
    title: 'Связь привычек и продуктивности',
    body: 'Утренние ритуалы повышают фокус на 12%. Следующее улучшение — добавить вечерний рефлекс.',
  },
  {
    title: 'Доходы',
    body: 'Подписки на сопровождение закрывают 62% планового дохода августа.',
  },
]

const habitSnapshot = {
  score: 78,
  streak: 18,
  energy: 76,
  focus: [
    { label: 'Утренняя зарядка', progress: 90 },
    { label: 'Deep work блоки', progress: 68 },
    { label: 'Музыка', progress: 74 },
  ],
  reflection:
    'Лучший день недели — среда. Закрыты две интеграции и проведена творческая сессия по музыке.',
}

const DashboardPage = () => {
  return (
    <div className="page">
      <section className="section">
        <div className="panel hero-card">
          <div className="hero-card__content">
            <span className="badge badge--pulse">В потоке</span>
            <h2>Вибрации недели: фокус на автоматизации и устойчивости</h2>
            <p>
              В приоритете сценарии телефонии, укрепление клиентских воронок и поддержка личного
              баланса. Продолжай вести стратегический дневник и фиксировать микродостижения.
            </p>
            <div className="hero-card__highlights">
              <div>
                <span className="hero-metric">32 часа</span>
                <span className="hero-label">Запланировано deep-work блоков</span>
              </div>
              <div>
                <span className="hero-metric">5 интеграций</span>
                <span className="hero-label">В активной фазе</span>
              </div>
              <div>
                <span className="hero-metric">3 привычки</span>
                <span className="hero-label">Укреплены до статуса «автомата»</span>
              </div>
            </div>
          </div>
          <div className="hero-card__glow" aria-hidden />
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <h3>Контексты</h3>
          <button className="btn link">Открыть планирование недели</button>
        </div>
        <div className="card-grid">
          {contextStats.map((context) => (
            <article key={context.id} className="panel stat-card">
              <div className="stat-card__header">
                <h4>{context.title}</h4>
                <span className="stat-trend">{context.trend}</span>
              </div>
              <p className="stat-highlight">{context.highlight}</p>
              <div className="progress">
                <div className="progress__track">
                  <div className="progress__value" style={{ width: `${context.progress}%` }} />
                </div>
                <span className="progress__label">Прогресс недели · {context.progress}%</span>
              </div>
              <div className="stat-footer">
                <span className="stat-number">{context.tasks}</span>
                <span className="stat-caption">активных задач</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section dashboard-grid">
        <div className="panel timeline-panel">
          <div className="section-header">
            <h3>Текущий ритм дня</h3>
            <span className="badge">4 события</span>
          </div>
          <ul className="timeline">
            {timeline.map((item) => (
              <li key={item.title} className="timeline__item">
                <span className="timeline__time">{item.time}</span>
                <div className="timeline__body">
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                  <span className="chip">{item.context}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="dashboard-grid__side">
          <div className="panel insight-panel">
            <div className="section-header">
              <h3>Инсайты недели</h3>
              <button className="btn link">Подробнее</button>
            </div>
            <div className="insight-list">
              {insights.map((insight) => (
                <div key={insight.title} className="insight-card">
                  <h4>{insight.title}</h4>
                  <p>{insight.body}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="panel habit-panel">
            <div className="section-header">
              <h3>Состояние привычек</h3>
              <span className="badge">Серия {habitSnapshot.streak} дней</span>
            </div>
            <div className="habit-overview">
              <div className="habit-score">
                <span>Счет вибраций</span>
                <strong>{habitSnapshot.score}</strong>
              </div>
              <div className="habit-energy">
                <span>Энергия</span>
                <strong>{habitSnapshot.energy}%</strong>
              </div>
            </div>
            <div className="habit-progress">
              {habitSnapshot.focus.map((item) => (
                <div key={item.label} className="habit-progress__item">
                  <div className="habit-progress__label">
                    <span>{item.label}</span>
                    <span>{item.progress}%</span>
                  </div>
                  <div className="progress__track">
                    <div className="progress__value" style={{ width: `${item.progress}%` }} />
                  </div>
                </div>
              ))}
            </div>
            <p className="habit-reflection">{habitSnapshot.reflection}</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default DashboardPage
