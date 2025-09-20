import PageHeader from '../components/PageHeader'

const contextSnapshot = [
  {
    name: 'Основная работа',
    summary: '8 задач · 3 критичных',
    progress: 72,
    focus: 'Поддержка телефонии + аудит интеграций',
  },
  {
    name: 'Интеграторство',
    summary: '2 проекта в исполнении',
    progress: 54,
    focus: 'Тюмень: внедрение amoCRM, Екатеринбург: миграция',
  },
  {
    name: 'Личное',
    summary: '7/9 привычек в streak',
    progress: 83,
    focus: 'Утренний журнал + фокус на бассейн',
  },
]

const todaysFlow = [
  {
    time: '08:30',
    title: 'Daily sync по инфраструктуре CRM',
    detail: 'Разбор инцидентов в телефонии + ревью очереди задач',
    tag: 'Bitrix24',
  },
  {
    time: '11:00',
    title: 'Демо для партнёров по amoCRM',
    detail: 'Показ MVP автоматизации лидов + согласование SLA',
    tag: 'Интеграторство',
  },
  {
    time: '14:30',
    title: 'Рабочая сессия с аналитиком',
    detail: 'Настройка отчётов по UTM и вебхукам, подготовка плейбука',
    tag: 'Data',
  },
  {
    time: '17:30',
    title: 'Личное окно: бассейн',
    detail: '45 минут плавания + дневник ощущений',
    tag: 'Здоровье',
  },
]

const systemPulse = [
  {
    label: 'SLA телефонии',
    value: '97%',
    trend: '+2.4%',
    trendType: 'positive' as const,
    note: 'После оптимизации очередей и обновления IVR',
  },
  {
    label: 'Конверсия заявок',
    value: '31%',
    trend: '+6% MoM',
    trendType: 'positive' as const,
    note: 'Благодаря новым скриптам и автоворонке',
  },
  {
    label: 'Время реакции',
    value: '18 мин',
    trend: '-4 мин',
    trendType: 'positive' as const,
    note: 'Закрепили дежурства и авто-триггеры в чате',
  },
]

const insights = [
  {
    title: 'Критичный инцидент закрыт',
    detail: 'Завершили восстановление интеграции с телефонией UIS. Проверить логи через 24 часа.',
  },
  {
    title: 'Хороший рост по выручке',
    detail: '+18% к целевому показателю недели благодаря апселлу на обучении.',
  },
  {
    title: 'Личные привычки',
    detail: 'Streak по утреннему журналу — 21 день. Стоит добавить ретроспективу в воскресенье.',
  },
]

const focusAreas = [
  {
    title: 'Воронка amoCRM',
    detail: 'Отследить rollout новой воронки и включить автопилот по webhooks к пятнице.',
  },
  {
    title: 'Обучение команды',
    detail: 'Подготовить обучающий модуль и live-сессию для клиентских менеджеров.',
  },
  {
    title: 'Автоматизации календарей',
    detail: 'Найти лучший сценарий синка Google Calendar ↔ Bitrix24, протестировать связку.',
  },
]

const DashboardPage = () => {
  return (
    <div className="page">
      <PageHeader
        title="Пульс дня"
        subtitle="Актуальная картина по всем контекстам: где горит, где есть рост и куда инвестировать внимание сегодня."
        actions={
          <>
            <button type="button" className="button-ghost">
              Журнал побед
            </button>
            <button type="button" className="button-primary">
              Запланировать фокус-слот
            </button>
          </>
        }
      />

      <div className="dashboard-layout">
        <div className="dashboard-main">
          <section className="glass-card highlight-card">
            <div className="glass-card__header">
              <div>
                <span className="badge">Фокус недели</span>
                <h3>Интеграция телефонии + повышение прозрачности задач</h3>
              </div>
              <span className="pill">ETA: 3 дня</span>
            </div>
            <p>
              Мы раскатываем единую доску для инцидентов и финализируем автоворонки в amoCRM. Все критичные
              метрики держатся в зелёной зоне, можно усилить работу с обучением команды.
            </p>
            <div className="tag-grid">
              <span className="tag">Телефония</span>
              <span className="tag">amoCRM</span>
              <span className="tag">Обучение</span>
              <span className="tag">Личное развитие</span>
            </div>
          </section>

          <section className="glass-card">
            <div className="glass-card__header">
              <h3>Контексты</h3>
              <span className="badge">Live tracking</span>
            </div>
            <div className="context-grid">
              {contextSnapshot.map((context) => (
                <div key={context.name} className="context-card">
                  <h4>{context.name}</h4>
                  <span>{context.summary}</span>
                  <div className="progress-track">
                    <div className="progress-fill" style={{ width: `${context.progress}%` }} />
                  </div>
                  <small>{context.focus}</small>
                </div>
              ))}
            </div>
          </section>

          <section className="glass-card">
            <div className="glass-card__header">
              <h3>Сегодня</h3>
              <span className="badge">Таймлайн</span>
            </div>
            <div className="timeline">
              {todaysFlow.map((event) => (
                <div key={event.time} className="timeline-item">
                  <span className="timeline-time">{event.time}</span>
                  <span className="timeline-dot" />
                  <div className="timeline-card">
                    <strong>{event.title}</strong>
                    <p>{event.detail}</p>
                    <span className="pill">{event.tag}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="dashboard-side">
          <section className="glass-card">
            <div className="glass-card__header">
              <h3>Пульс систем</h3>
              <span className="badge">Метрики</span>
            </div>
            <div className="stat-grid">
              {systemPulse.map((metric) => (
                <div key={metric.label} className="stat-card">
                  <span className="stat-value">{metric.value}</span>
                  <span className={`stat-trend ${metric.trendType}`}>{metric.trend}</span>
                  <strong>{metric.label}</strong>
                  <p>{metric.note}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="glass-card">
            <div className="glass-card__header">
              <h3>Точки роста</h3>
              <span className="badge">Следующие шаги</span>
            </div>
            <ul className="list">
              {focusAreas.map((item) => (
                <li key={item.title} className="list-item">
                  <div className="list-item__meta">
                    <strong>{item.title}</strong>
                    <p>{item.detail}</p>
                  </div>
                  <span className="pill">В работе</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="glass-card">
            <div className="glass-card__header">
              <h3>Инсайты и победы</h3>
              <span className="badge">Журнал</span>
            </div>
            <ul className="list">
              {insights.map((insight) => (
                <li key={insight.title} className="list-item">
                  <div className="list-item__meta">
                    <strong>{insight.title}</strong>
                    <p>{insight.detail}</p>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}

export default DashboardPage
