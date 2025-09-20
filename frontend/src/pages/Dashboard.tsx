import {
  Activity,
  CheckCircle2,
  Clock3,
  Flame,
  LineChart,
  Sparkles,
  TrendingUp
} from 'lucide-react'
import Card from '../components/Card'
import PageHeader from '../components/PageHeader'

const stats = [
  {
    title: 'Активные задачи',
    value: '18',
    helper: '+3 к прошлой неделе',
    icon: Activity,
    tone: 'positive'
  },
  {
    title: 'Средний SLA',
    value: '2.4 ч',
    helper: 'в окне до 4 часов',
    icon: Clock3,
    tone: 'neutral'
  },
  {
    title: 'Успешные интеграции',
    value: '12',
    helper: 'из 14 на поддержке',
    icon: CheckCircle2,
    tone: 'positive'
  },
  {
    title: 'Выручка месяца',
    value: '₽ 420k',
    helper: '+18% прогноз',
    icon: TrendingUp,
    tone: 'accent'
  }
]

const focusProjects = [
  {
    name: 'VoiceOps телефония',
    status: '⚡ Срочно закрыть интеграцию с Bitrix24',
    progress: 78,
    context: 'Основная работа'
  },
  {
    name: 'amoCRM retail bundle',
    status: '🚀 Завершение набора автоматизаций',
    progress: 62,
    context: 'Подработка'
  },
  {
    name: 'Domotics IoT домашняя',
    status: '🎯 Спланировать тестовый запуск датчиков',
    progress: 34,
    context: 'Хобби'
  }
]

const timeline = [
  {
    time: '10:30',
    title: 'Демо голосового меню',
    context: 'Клиент: NovaCall',
    status: 'подготовиться'
  },
  {
    time: '13:00',
    title: 'Спринт с разработкой',
    context: 'Bitrix24 инфраструктура',
    status: 'совместное планирование'
  },
  {
    time: '18:30',
    title: 'Обновление MRR таблички',
    context: 'Финансы',
    status: 'личная рутина'
  }
]

const habits = [
  {
    title: 'Утренний разбор статей',
    streak: 9,
    target: 'ежедневно'
  },
  {
    title: '15 минут гитары',
    streak: 4,
    target: '5/7 дней'
  },
  {
    title: 'Фокус без отвлечений',
    streak: 6,
    target: '3 блока в день'
  }
]

const finances = [
  {
    label: 'Поддержка Bitrix24',
    value: '₽ 180k',
    type: 'in'
  },
  {
    label: 'Интеграторство',
    value: '₽ 140k',
    type: 'in'
  },
  {
    label: 'Подписки и сервисы',
    value: '₽ 32k',
    type: 'out'
  },
  {
    label: 'Обучение и софт',
    value: '₽ 14k',
    type: 'out'
  }
]

const Dashboard = () => {
  return (
    <div className="page">
      <PageHeader
        title="Командный центр"
        description="Свежие цифры и подсказки по всем потокам: работа, интеграция и личное."
        actions={
          <button type="button" className="btn btn--ghost">
            Экспорт отчёта
          </button>
        }
      />

      <div className="grid grid--four">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <Card
              key={stat.title}
              title={stat.title}
              subtitle={stat.helper}
              className={`card--stat card--${stat.tone}`}
            >
              <div className="stat-card">
                <span className="stat-card__value">{stat.value}</span>
                <span className="stat-card__icon" aria-hidden="true">
                  <Icon size={22} strokeWidth={1.6} />
                </span>
              </div>
            </Card>
          )
        })}
      </div>

      <div className="grid grid--two">
        <Card
          title="Фокус недели"
          subtitle="Ключевые проекты, где важен твой сегодняшний вклад"
          actions={
            <button type="button" className="btn btn--ghost">
              Посмотреть дорожную карту
            </button>
          }
        >
          <div className="stack">
            {focusProjects.map((project) => (
              <div key={project.name} className="focus-card">
                <div className="focus-card__head">
                  <div>
                    <p className="focus-card__title">{project.name}</p>
                    <p className="focus-card__context">{project.context}</p>
                  </div>
                  <span className="focus-card__status">{project.status}</span>
                </div>
                <div className="progress">
                  <div
                    className="progress__bar"
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>
        <Card
          title="Ближайший таймлайн"
          subtitle="Слоты в календаре и ритуалы на сегодня"
        >
          <ol className="timeline">
            {timeline.map((item) => (
              <li key={item.title} className="timeline__item">
                <span className="timeline__time">{item.time}</span>
                <div>
                  <p className="timeline__title">{item.title}</p>
                  <p className="timeline__context">{item.context}</p>
                </div>
                <span className="timeline__badge">{item.status}</span>
              </li>
            ))}
          </ol>
        </Card>
      </div>

      <div className="grid grid--three">
        <Card title="Прогресс привычек" subtitle="Серия побед и зоны роста">
          <ul className="habit-list">
            {habits.map((habit) => (
              <li key={habit.title} className="habit-list__item">
                <div>
                  <p className="habit-list__title">{habit.title}</p>
                  <p className="habit-list__subtitle">Цель: {habit.target}</p>
                </div>
                <span className="habit-list__streak">
                  <Flame size={18} strokeWidth={1.6} />
                  {habit.streak} дней
                </span>
              </li>
            ))}
          </ul>
        </Card>
        <Card title="Финансовый импульс" subtitle="Кэшфлоу за последние 30 дней">
          <div className="finance-summary">
            {finances.map((item) => (
              <div key={item.label} className="finance-summary__row">
                <span>{item.label}</span>
                <span className={item.type === 'in' ? 'text-positive' : 'text-negative'}>
                  {item.value}
                </span>
              </div>
            ))}
          </div>
          <div className="glow-panel">
            <Sparkles size={18} strokeWidth={1.6} />
            Прогноз: можно инвестировать дополнительно 40k ₽ в обучение.
          </div>
        </Card>
        <Card title="Аналитика эффективности" subtitle="Фокус + энергия">
          <div className="efficiency">
            <div className="efficiency__item">
              <LineChart size={18} strokeWidth={1.6} />
              73% задач закрываются в рамках планируемого дня
            </div>
            <div className="efficiency__item">
              <Activity size={18} strokeWidth={1.6} />
              4,5 часа глубокого фокуса в среднем ежедневно
            </div>
            <div className="efficiency__item">
              <Sparkles size={18} strokeWidth={1.6} />
              Лучший день недели: четверг — +24% продуктивности
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default Dashboard
