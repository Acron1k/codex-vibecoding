const summaryCards = [
  {
    title: 'Выручка месяца',
    value: '₽420 000',
    change: '+18% к прошлому месяцу',
    note: 'Основная работа + два проекта на сопровождении',
    accent: 'План выполнен на 72%',
  },
  {
    title: 'Чистая прибыль',
    value: '₽275 000',
    change: '+12%',
    note: 'После налогов, инструментов и отчислений в резерв',
    accent: 'Рентабельность 65%',
  },
  {
    title: 'Резерв развития',
    value: '₽95 000',
    change: '+8%',
    note: 'Фонд экспериментов, обучения и личных проектов',
    accent: 'Свободно 45 000 ₽',
  },
]

const forecast = {
  labels: ['Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг'],
  values: [62, 74, 88, 95, 108, 124],
  commentary: 'Рост благодаря продлению ретейнеров и запуску Loft.Tech.',
  outlook: '+15% прогноз на август',
}

const cashflow = [
  {
    title: 'Ретейнеры и сопровождение',
    amount: '₽210 000',
    trend: '+6%',
    detail: 'Три компании на ежемесячной оплате, SLA выполнено на 98%.',
  },
  {
    title: 'Разовые внедрения',
    amount: '₽160 000',
    trend: '+25%',
    detail: 'Два проекта в активной фазе, один в оценке бюджета.',
  },
  {
    title: 'Расходы',
    amount: '₽145 000',
    trend: '−9%',
    detail: 'Оптимизация телефонии и пересмотр подписок на аналитику.',
  },
]

const budgets = [
  {
    name: 'Инструменты и подписки',
    limit: '₽35 000',
    used: 64,
    detail: 'amoCRM, телефония, BI, мониторинг',
    status: 'В пределах нормы',
  },
  {
    name: 'Обучение и развитие',
    limit: '₽25 000',
    used: 48,
    detail: 'Курсы, наставники, книги',
    status: 'Есть пространство для инвестиций',
  },
  {
    name: 'Хобби и отдых',
    limit: '₽20 000',
    used: 58,
    detail: 'Музыка, поездки, спортзал',
    status: 'Комфортный уровень',
  },
]

const pipeline = [
  { title: 'Сопровождение RIO Systems', amount: '₽85 000', date: '25 июля', type: 'Ретейнер' },
  { title: 'Внедрение Loft.Tech', amount: '₽140 000', date: '30 июля', type: 'Проект' },
  { title: 'Коучинг по стратегическому мышлению', amount: '₽18 000', date: '2 августа', type: 'Расход' },
  { title: 'Музыкальная мастерская', amount: '₽9 000', date: '4 августа', type: 'Хобби' },
]

const FinancePage = () => {
  return (
    <div className="page">
      <section className="section">
        <div className="section-header">
          <h3>Финансовый срез</h3>
          <button className="btn link">Экспортировать отчёт</button>
        </div>
        <div className="card-grid">
          {summaryCards.map((card) => (
            <article key={card.title} className="panel stat-card">
              <div className="stat-card__header">
                <h4>{card.title}</h4>
                <span className="stat-trend">{card.change}</span>
              </div>
              <div className="stat-number">{card.value}</div>
              <p className="stat-highlight">{card.note}</p>
              <span className="stat-caption">{card.accent}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section finance-grid">
        <div className="panel forecast-panel">
          <div className="section-header">
            <h3>Прогноз выручки</h3>
            <span className="badge">{forecast.outlook}</span>
          </div>
          <div className="forecast-chart">
            {forecast.values.map((value, index) => (
              <div key={forecast.labels[index]} className="forecast-bar">
                <div className="forecast-bar__line" style={{ height: `${value}%` }} />
                <span>{forecast.labels[index]}</span>
              </div>
            ))}
          </div>
          <p>{forecast.commentary}</p>
        </div>
        <div className="panel cashflow-panel">
          <div className="section-header">
            <h3>Движение денег</h3>
            <button className="btn ghost">Посмотреть детализацию</button>
          </div>
          <ul className="cashflow-list">
            {cashflow.map((item) => (
              <li key={item.title} className="cashflow-item">
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.detail}</p>
                </div>
                <div className="cashflow-item__meta">
                  <span className="stat-number">{item.amount}</span>
                  <span className="stat-trend">{item.trend}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section finance-bottom">
        <div className="panel budgets-panel">
          <div className="section-header">
            <h3>Бюджеты</h3>
            <span className="badge">Месяц</span>
          </div>
          <div className="budget-list">
            {budgets.map((budget) => (
              <div key={budget.name} className="budget-item">
                <div className="budget-item__head">
                  <h4>{budget.name}</h4>
                  <span className="budget-item__limit">Лимит {budget.limit}</span>
                </div>
                <p>{budget.detail}</p>
                <div className="progress__track">
                  <div className="progress__value" style={{ width: `${budget.used}%` }} />
                </div>
                <div className="budget-item__footer">
                  <span>{budget.status}</span>
                  <span>{budget.used}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="panel pipeline-panel">
          <div className="section-header">
            <h3>Ближайшие движения</h3>
            <span className="badge">4 записи</span>
          </div>
          <ul className="pipeline-list">
            {pipeline.map((item) => (
              <li key={item.title} className="pipeline-item">
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.type}</p>
                </div>
                <div className="pipeline-item__meta">
                  <span className="stat-number">{item.amount}</span>
                  <span className="stat-caption">{item.date}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}

export default FinancePage
