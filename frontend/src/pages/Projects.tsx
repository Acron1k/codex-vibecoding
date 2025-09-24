import { CalendarClock, CheckCircle2, Compass, Gauge, Target } from 'lucide-react'
import Card from '../components/Card'
import PageHeader from '../components/PageHeader'

const sprintStreams = [
  {
    name: 'Спринт «Телефония v3»',
    focus: 'Авто-распределение звонков + отчёты',
    health: { label: 'Зелёный', tone: 'positive' },
    due: 'завершить к 6 марта',
    velocity: '12/15 задач'
  },
  {
    name: 'Сопровождение amoCRM',
    focus: 'Перегрев лидов → обновить скрипты и роботов',
    health: { label: 'Жёлтый', tone: 'warning' },
    due: 'ревью в пятницу',
    velocity: '8/12 задач'
  }
]

const kanbanColumns = [
  {
    title: 'Discovery',
    items: [
      'Собрать инсайты по новой партнёрской воронке',
      'Анализ API ограничения для телефонии'
    ]
  },
  {
    title: 'В работе',
    items: [
      'Настроить сквозную аналитику в Bitrix24',
      'Подготовить playbook по внедрению Retail CRM'
    ]
  },
  {
    title: 'На проверке',
    items: [
      'Автотегирование звонков по ключевым словам',
      'Конфигурация бэкапов amoCRM'
    ]
  },
  {
    title: 'Закрыто',
    items: ['Интеграция LMS → amoCRM', 'Новый отчёт по качеству звонков']
  }
]

const checkpoints = [
  {
    title: 'Ретро по подработке',
    description: 'Определить следующий upsell пакет',
    date: '7 марта, 11:00'
  },
  {
    title: 'Отчёт по инфраструктуре',
    description: 'Финализировать обновление серверов телефонии',
    date: '9 марта, 16:30'
  },
  {
    title: 'Хобби-проект IoT',
    description: 'Завести задачи в трекере и расписать эксперименты',
    date: '10 марта, утро'
  }
]

const riskBoard = [
  {
    title: 'Блокеры',
    items: [
      'Ожидается апдейт API от провайдера телефонии',
      'Нет тестовых данных по новой воронке маркетинга'
    ]
  },
  {
    title: 'Возможности роста',
    items: [
      'Запустить пакет сопровождения на основе последних кейсов',
      'Предложить обучение клиентам по работе с дашбордами'
    ]
  }
]

const Projects = () => {
  return (
    <div className="page">
      <PageHeader
        title="Проекты и задачи"
        description="Операционная доска: спринты, канбан и ключевые точки внимания."
        actions={
          <div className="header-actions">
            <button type="button" className="btn btn--ghost">
              Импортировать задачи
            </button>
            <button type="button" className="btn btn--primary">
              Новая задача
            </button>
          </div>
        }
      />

      <div className="grid grid--two">
        <Card title="Активные спринты" subtitle="Статус и скорость выполнения">
          <div className="stack">
            {sprintStreams.map((sprint) => (
              <div key={sprint.name} className="sprint-card">
                <div>
                  <p className="sprint-card__title">{sprint.name}</p>
                  <p className="sprint-card__focus">{sprint.focus}</p>
                </div>
                <div className="sprint-card__meta">
                  <span className={`badge badge--${sprint.health.tone}`}>
                    {sprint.health.label}
                  </span>
                  <span>{sprint.velocity}</span>
                  <span>{sprint.due}</span>
                </div>
              </div>
            ))}
          </div>
        </Card>
        <Card title="Контроль точек" subtitle="Совещания и контрольные сессии">
          <ul className="checkpoint-list">
            {checkpoints.map((checkpoint) => (
              <li key={checkpoint.title} className="checkpoint-list__item">
                <div>
                  <p className="checkpoint-list__title">{checkpoint.title}</p>
                  <p className="checkpoint-list__description">{checkpoint.description}</p>
                </div>
                <span className="checkpoint-list__date">{checkpoint.date}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>

      <Card
        title="Канбан-потоки"
        subtitle="Быстрый обзор стадий. Перетаскивай карточки и фиксируй инсайты"
        actions={
          <span className="board-legend">
            <Compass size={16} strokeWidth={1.6} /> Discovery ·
            <Gauge size={16} strokeWidth={1.6} /> В работе ·
            <CheckCircle2 size={16} strokeWidth={1.6} /> Готово
          </span>
        }
      >
        <div className="kanban">
          {kanbanColumns.map((column) => (
            <div key={column.title} className="kanban__column">
              <h3 className="kanban__title">{column.title}</h3>
              <div className="kanban__stack">
                {column.items.map((item) => (
                  <div key={item} className="kanban__card">
                    <Target size={16} strokeWidth={1.6} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Card>

      <div className="grid grid--two">
        {riskBoard.map((section) => (
          <Card key={section.title} title={section.title} subtitle="Отслеживай и закрывай">
            <ul className="risk-list">
              {section.items.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </Card>
        ))}
        <Card title="Мой ресурсный план" subtitle="Когда и на что выделен фокус">
          <div className="resource-plan">
            <div className="resource-plan__item">
              <CalendarClock size={18} strokeWidth={1.6} />
              <span>Утро: интеграции клиентов (2 блока по 60 мин)</span>
            </div>
            <div className="resource-plan__item">
              <CalendarClock size={18} strokeWidth={1.6} />
              <span>День: внутренняя инфраструктура (2 блока по 90 мин)</span>
            </div>
            <div className="resource-plan__item">
              <CalendarClock size={18} strokeWidth={1.6} />
              <span>Вечер: личные проекты и обучение (1 блок)</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default Projects
