import { Brain, Coffee, HeartPulse, ListChecks, MoonStar, Sunrise } from 'lucide-react'
import Card from '../components/Card'
import PageHeader from '../components/PageHeader'

const streaks = [
  {
    title: 'Ранний старт',
    description: 'Подъём до 07:00',
    value: '12 дней подряд',
    icon: Sunrise
  },
  {
    title: 'Дип-фокус блоки',
    description: '3 помидора до обеда',
    value: '85% выполнения',
    icon: Brain
  },
  {
    title: 'Заряд энергии',
    description: 'Кардио/йога',
    value: '5 раз за неделю',
    icon: HeartPulse
  }
]

const weeklyPlan = [
  {
    day: 'Пн',
    theme: 'Работа с партнёрами',
    highlight: 'вечером — спорт'
  },
  {
    day: 'Вт',
    theme: 'Интеграции клиентов',
    highlight: 'подготовка кейса'
  },
  {
    day: 'Ср',
    theme: 'Финансы и обучение',
    highlight: 'webinar по AI'
  },
  {
    day: 'Чт',
    theme: 'Глубокий фокус',
    highlight: 'без встреч до 15:00'
  },
  {
    day: 'Пт',
    theme: 'Подработка + аналитика',
    highlight: 'итоги недели'
  },
  {
    day: 'Сб',
    theme: 'Хобби и семья',
    highlight: 'музыка + прогулки'
  },
  {
    day: 'Вс',
    theme: 'Перезагрузка',
    highlight: 'digital detox'
  }
]

const rituals = [
  {
    title: 'Утро',
    items: ['Чашка воды', '15 мин чтения', 'Фокус план на день'],
    icon: Coffee
  },
  {
    title: 'День',
    items: ['2 блока deep work', 'Мини-ретроспектива', 'Разминка 5 минут'],
    icon: ListChecks
  },
  {
    title: 'Вечер',
    items: ['Сбор результатов', 'Journaling', 'В 23:00 без гаджетов'],
    icon: MoonStar
  }
]

const Habits = () => {
  return (
    <div className="page">
      <PageHeader
        title="Ритмы и привычки"
        description="Поддерживай баланс энергии, привычек и личных проектов."
        actions={
          <button type="button" className="btn btn--ghost">
            Экспортировать трекер
          </button>
        }
      />

      <div className="grid grid--three">
        {streaks.map((item) => {
          const Icon = item.icon
          return (
            <Card key={item.title} title={item.title} subtitle={item.description}>
              <div className="streak-card">
                <Icon size={20} strokeWidth={1.6} />
                <span>{item.value}</span>
              </div>
            </Card>
          )
        })}
      </div>

      <Card title="Неделя внимания" subtitle="Главные акценты и режимы">
        <div className="week-grid">
          {weeklyPlan.map((slot) => (
            <div key={slot.day} className="week-grid__item">
              <span className="week-grid__day">{slot.day}</span>
              <p className="week-grid__theme">{slot.theme}</p>
              <p className="week-grid__highlight">{slot.highlight}</p>
            </div>
          ))}
        </div>
      </Card>

      <div className="grid grid--two">
        <Card title="Ритуалы дня" subtitle="Этапы и действия">
          <div className="rituals">
            {rituals.map((ritual) => {
              const Icon = ritual.icon
              return (
                <div key={ritual.title} className="rituals__item">
                  <div className="rituals__icon">
                    <Icon size={18} strokeWidth={1.6} />
                  </div>
                  <div>
                    <p className="rituals__title">{ritual.title}</p>
                    <ul>
                      {ritual.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            })}
          </div>
        </Card>
        <Card
          title="Короткая ретроспектива"
          subtitle="Что прокачать и что сохранить"
        >
          <div className="retro">
            <div>
              <h4>Топ-успех</h4>
              <p>3 дня подряд без отвлечений в блоках deep work.</p>
            </div>
            <div>
              <h4>Зона роста</h4>
              <p>После 21:00 всё ещё залипаю в мессенджеры — ограничить экран.</p>
            </div>
            <div>
              <h4>Настроение</h4>
              <p>Баланс спокойствия и драйва, хочется больше творчества.</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default Habits
