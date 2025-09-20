import PageHeader from '../components/PageHeader'

const knowledgeItems = [
  {
    title: 'Плейбук интеграции телефонии',
    description: 'Пошаговая схема развёртывания, чек-листы тестов, шаблоны ответов клиентам.',
    tags: ['Телефония', 'Bitrix24', 'SLA'],
    updated: 'обновлено вчера',
  },
  {
    title: 'AI-ассистент: анализ звонков',
    description: 'Prompt + сценарий в Make для расшифровки и разметки транскриптов по тегам.',
    tags: ['AI', 'Make', 'Нейросети'],
    updated: 'обновлено 3 дня назад',
  },
  {
    title: 'Шаблон коммерческого предложения',
    description: 'Рекламные пакеты, структура предложения, автоматический расчёт стоимости.',
    tags: ['Интеграторство', 'Финансы'],
    updated: 'обновлено неделю назад',
  },
]

const automationRules = [
  {
    title: 'Если сделка > 150k — запускаем white-glove поддержку',
    detail: 'Создаёт чек-лист в Notion, уведомляет команду и бронирует встречу со мной.',
    status: 'Активно',
  },
  {
    title: 'Провал привычки 3 дня подряд',
    detail: 'Создаёт слот рефлексии + отправляет gentle reminder жене (ответственный партнёр).',
    status: 'На паузе',
  },
  {
    title: 'Нет ответа клиенту 30 минут',
    detail: 'Пинует в чат поддержки и ставит задачу дежурному специалисту.',
    status: 'Активно',
  },
]

const ideaBacklog = [
  'Нейроассистент для быстрых тех. аудитов на встрече.',
  'Автоматическая сборка дэшборда по привычкам ↔ продуктивности.',
  'Тепловая карта интеграций: какие связки приносят больше денег.',
]

const KnowledgePage = () => {
  return (
    <div className="page">
      <PageHeader
        title="Знания и ассистенты"
        subtitle="Вся экспертиза, макросы и автоматизации в одном месте. Быстрый доступ к плейбукам и идеям."
        actions={
          <>
            <button type="button" className="button-ghost">
              Импорт из GitHub Wiki
            </button>
            <button type="button" className="button-primary">
              Новая заметка
            </button>
          </>
        }
      />

      <section className="glass-card">
        <div className="glass-card__header">
          <h3>Избранные материалы</h3>
          <span className="badge">3 файла</span>
        </div>
        <div className="resource-list">
          {knowledgeItems.map((item) => (
            <article key={item.title} className="resource-item">
              <header>
                <strong>{item.title}</strong>
                <span className="pill">{item.updated}</span>
              </header>
              <p>{item.description}</p>
              <div className="resource-tags">
                {item.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="glass-card">
        <div className="glass-card__header">
          <h3>Автоматизации</h3>
          <span className="badge">Rule engine</span>
        </div>
        <ul className="list">
          {automationRules.map((rule) => (
            <li key={rule.title} className="list-item">
              <div className="list-item__meta">
                <strong>{rule.title}</strong>
                <p>{rule.detail}</p>
              </div>
              <span className="pill">{rule.status}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="glass-card">
        <div className="glass-card__header">
          <h3>Бэклог идей</h3>
          <span className="badge">Next up</span>
        </div>
        <ul className="list">
          {ideaBacklog.map((idea) => (
            <li key={idea} className="list-item list-item--notes">
              <p>{idea}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}

export default KnowledgePage
