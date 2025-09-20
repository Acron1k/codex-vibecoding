import PageHeader from '../components/PageHeader'

const weeklyFlow = [
  { label: 'Пн', amount: '120k', height: 72, tone: 'primary' },
  { label: 'Вт', amount: '86k', height: 58, tone: 'secondary' },
  { label: 'Ср', amount: '140k', height: 88, tone: 'primary' },
  { label: 'Чт', amount: '95k', height: 62, tone: 'secondary' },
  { label: 'Пт', amount: '180k', height: 96, tone: 'primary' },
  { label: 'Сб', amount: '45k', height: 35, tone: 'secondary' },
  { label: 'Вс', amount: '70k', height: 48, tone: 'secondary' },
]

const cashSignals = [
  {
    label: 'Выручка (неделя)',
    value: '696 000 ₽',
    trend: '+18% к цели',
  },
  {
    label: 'Расходы',
    value: '248 000 ₽',
    trend: '52% бюджета',
  },
  {
    label: 'Чистый поток',
    value: '448 000 ₽',
    trend: '+12% к прошлой',
  },
]

const spendBreakdown = [
  {
    title: 'Подписки и сервисы',
    detail: 'amoCRM, Bitrix24, телефония, облака',
    value: '82 000 ₽',
  },
  {
    title: 'Обучение и развитие',
    detail: 'Курсы по AI и интеграциям, материалы для хобби',
    value: '38 000 ₽',
  },
  {
    title: 'Операционные расходы',
    detail: 'Фриланс-помощь, поездки к клиентам, мелкие закупки',
    value: '64 000 ₽',
  },
]

const forecastNotes = [
  'Ретейнер на поддержку Bitrix24 продляется — +90k к следующей неделе.',
  'Планируется покупка нового сервера записи звонков — учесть 45k.',
  'Хобби-проект приносит первые 12k — стоит масштабировать канал.',
]

const FinancePage = () => {
  return (
    <div className="page">
      <PageHeader
        title="Финансы"
        subtitle="Контролируем денежные потоки, бюджеты по направлениям и смотрим вперёд, чтобы не терять темп."
        actions={
          <>
            <button type="button" className="button-ghost">
              Экспорт в Google Sheets
            </button>
            <button type="button" className="button-primary">
              Добавить транзакцию
            </button>
          </>
        }
      />

      <div className="finance-grid">
        <section className="glass-card finance-overview">
          <div className="glass-card__header">
            <h3>Недельный поток</h3>
            <span className="badge">Динамика</span>
          </div>
          <div className="bar-chart">
            {weeklyFlow.map((day) => (
              <div
                key={day.label}
                className={['bar', day.tone === 'secondary' ? 'bar--secondary' : ''].filter(Boolean).join(' ')}
                style={{ height: `${day.height}%` }}
                data-label={day.label}
              >
                <span>{day.amount}</span>
              </div>
            ))}
          </div>
          <p>
            Пятница закрыла крупный этап интеграции и принесла большую часть выручки. Субботу используем для
            ревизии расходов и планирования личных проектов.
          </p>
        </section>

        <section className="glass-card">
          <div className="glass-card__header">
            <h3>Ближайший прогноз</h3>
            <span className="badge">Forward view</span>
          </div>
          <ul className="list">
            {forecastNotes.map((note) => (
              <li key={note} className="list-item list-item--notes">
                <p>{note}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <section className="glass-card">
        <div className="glass-card__header">
          <h3>Пульс бюджета</h3>
          <span className="badge">Сводка</span>
        </div>
        <div className="stat-grid">
          {cashSignals.map((signal) => (
            <div key={signal.label} className="stat-card">
              <span className="stat-value">{signal.value}</span>
              <span className="stat-trend">{signal.trend}</span>
              <strong>{signal.label}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="glass-card">
        <div className="glass-card__header">
          <h3>Расшифровка расходов</h3>
          <span className="badge">Категории</span>
        </div>
        <ul className="list">
          {spendBreakdown.map((item) => (
            <li key={item.title} className="list-item">
              <div className="list-item__meta">
                <strong>{item.title}</strong>
                <p>{item.detail}</p>
              </div>
              <span className="pill">{item.value}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}

export default FinancePage
