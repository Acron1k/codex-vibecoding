import PageHeader from '../components/PageHeader'

const kanbanColumns = [
  {
    title: 'Discovery',
    meta: '2 инициативы',
    tasks: [
      {
        title: 'Аудит цепочек в amoCRM',
        detail: 'Собрать карту событий, отловить дубликаты триггеров и настроить логи',
        due: 'сегодня',
        effort: '90 мин',
        tag: 'amoCRM',
      },
      {
        title: 'Диагностика телефонии для Bitrix24',
        detail: 'Проверить маршруты, задержки и обновить документацию для саппорта',
        due: 'завтра',
        effort: '2 ч',
        tag: 'Телефония',
      },
    ],
  },
  {
    title: 'В работе',
    meta: '3 активных задачи',
    tasks: [
      {
        title: 'Проект Тюмень — внедрение amoCRM',
        detail: 'Выгрузка из старой системы, миграция воронок, настройка сквозной аналитики',
        due: 'в процессе',
        effort: '6 ч',
        tag: 'Интеграторство',
      },
      {
        title: 'Переезд телефонии на новую АТС',
        detail: 'Параллельный прогон с нагрузочным тестом, обновить SLA и правила очереди',
        due: 'четверг',
        effort: '4 ч',
        tag: 'Основная работа',
      },
      {
        title: 'Плейбук по lead scoring',
        detail: 'Сформировать шаблоны для менеджеров и настроить auto tagging',
        due: 'пятница',
        effort: '2.5 ч',
        tag: 'Аналитика',
      },
    ],
  },
  {
    title: 'Тестирование',
    meta: '1 задача',
    tasks: [
      {
        title: 'QA-спринт для автоматизаций',
        detail: 'Прогнать сценарии интеграции amoCRM ↔ Битрикс24, проверить уведомления',
        due: 'пт · 12:00',
        effort: '3 ч',
        tag: 'QA',
      },
    ],
  },
  {
    title: 'Готово',
    meta: '2 апдейта',
    tasks: [
      {
        title: 'KPI-дэшборд по SLA',
        detail: 'Добавлен в Notion и синхронизирован с Power BI',
        due: 'вчера',
        effort: '—',
        tag: 'Отчётность',
      },
      {
        title: 'Скрипт автоматического бэкапа',
        detail: 'Запуск по cron, уведомление в Telegram-канале поддержки',
        due: 'пн',
        effort: '—',
        tag: 'Инфраструктура',
      },
    ],
  },
]

const milestones = [
  {
    title: 'amoCRM rollout',
    date: '14 февраля',
    detail: 'Финализировать интеграцию, обучить команду продаж, включить автоворонку.',
  },
  {
    title: 'Телефония. Нагрузка',
    date: '16 февраля',
    detail: 'Убедиться, что новая АТС проходит stress-тест, обновить playbook.',
  },
  {
    title: 'Годовой roadmap',
    date: '19 февраля',
    detail: 'Свести проекты основной работы и подработки в единую канбан-матрицу.',
  },
]

const resourceSignals = [
  {
    label: 'Загрузка недели',
    value: '78%',
    trend: '+6% к прошлой',
  },
  {
    label: 'Фокусные слоты',
    value: '5 из 7',
    trend: 'нужен резерв',
  },
  {
    label: 'Делегирование',
    value: '2 задачи',
    trend: '+1 ассистент',
  },
]

const ProjectsPage = () => {
  return (
    <div className="page">
      <PageHeader
        title="Проектный центр"
        subtitle="Kanban по всем инициативам: отслеживаем загрузку, статус интеграций и контрольные точки."
        actions={
          <>
            <button type="button" className="button-ghost">
              Экспорт в Notion
            </button>
            <button type="button" className="button-primary">
              Новая задача
            </button>
          </>
        }
      />

      <section className="glass-card">
        <div className="glass-card__header">
          <h3>Загрузка</h3>
          <span className="badge">Неделя</span>
        </div>
        <div className="stat-grid">
          {resourceSignals.map((signal) => (
            <div key={signal.label} className="stat-card">
              <span className="stat-value">{signal.value}</span>
              <span className="stat-trend">{signal.trend}</span>
              <strong>{signal.label}</strong>
            </div>
          ))}
        </div>
      </section>

      <div className="kanban">
        {kanbanColumns.map((column) => (
          <section key={column.title} className="kanban-column">
            <div className="glass-card__header">
              <h3>{column.title}</h3>
              <span className="kanban-meta">{column.meta}</span>
            </div>
            <div className="kanban-items">
              {column.tasks.map((task) => (
                <div key={task.title} className="kanban-card">
                  <strong>{task.title}</strong>
                  <p>{task.detail}</p>
                  <div className="kanban-footer">
                    <span className="pill">{task.tag}</span>
                    <span>{task.due}</span>
                  </div>
                  <span className="habit-progress-value">{task.effort}</span>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      <section className="glass-card">
        <div className="glass-card__header">
          <h3>Контрольные точки</h3>
          <span className="badge">3 ближайшие</span>
        </div>
        <ul className="list">
          {milestones.map((milestone) => (
            <li key={milestone.title} className="list-item">
              <div className="list-item__meta">
                <strong>{milestone.title}</strong>
                <p>{milestone.detail}</p>
              </div>
              <span className="pill">{milestone.date}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}

export default ProjectsPage
