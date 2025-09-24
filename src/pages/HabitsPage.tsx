const habitAreas = [
  {
    title: 'Энергия и тело',
    summary: 'Поддерживает высокий тонус, помогает выдерживать интенсивные спринты.',
    streak: 'Серия 12 дней',
    habits: [
      { name: 'Зарядка 15 минут', progress: 92 },
      { name: 'Контрастный душ', progress: 80 },
      { name: '8k шагов', progress: 68 },
    ],
  },
  {
    title: 'Фокус и продуктивность',
    summary: 'Закрепляет глубокую работу и устойчивый ритм выполнения задач.',
    streak: 'Серия 21 день',
    habits: [
      { name: 'Утренний обзор задач', progress: 88 },
      { name: 'Два блока deep work', progress: 71 },
      { name: 'Ретроспектива дня', progress: 64 },
    ],
  },
  {
    title: 'Творчество и восстановление',
    summary: 'Подпитывает воображение и помогает переключаться после нагрузок.',
    streak: 'Серия 7 дней',
    habits: [
      { name: 'Музыкальная практика', progress: 76 },
      { name: 'Рефлексия в дневнике', progress: 69 },
      { name: 'Чтение 20 минут', progress: 61 },
    ],
  },
]

const moodPulse = {
  rating: '4.3 / 5',
  energy: 78,
  focus: 82,
  highlight: 'Лучшие показатели у дней, где утренний блок начинается в 7:30 и есть перерыв на музыку.',
  week: [
    { day: 'Пн', value: 72 },
    { day: 'Вт', value: 68 },
    { day: 'Ср', value: 86 },
    { day: 'Чт', value: 80 },
    { day: 'Пт', value: 74 },
    { day: 'Сб', value: 66 },
    { day: 'Вс', value: 70 },
  ],
}

const rituals = [
  {
    name: 'Утренний запуск',
    steps: ['Дыхание + зарядка', 'Обзор календаря', 'План трёх главных задач'],
  },
  {
    name: 'Вечерняя настройка',
    steps: ['Ретроспектива в дневнике', 'Подведение итогов по задачам', 'Музыка или чтение'],
  },
]

const experiments = [
  {
    title: 'Цикл помодоро 90/20',
    status: 'В тесте',
    description: 'Сочетание 90 минут глубокой работы и 20 минут активного отдыха.',
  },
  {
    title: 'Digital detox вечером',
    status: 'Запланировано',
    description: 'Отключение мессенджеров за час до сна + физический дневник для заметок.',
  },
  {
    title: 'Музыкальные джемы по субботам',
    status: 'Запускается',
    description: 'Совместная практика с наставником и запись прогресса.',
  },
]

const HabitsPage = () => {
  return (
    <div className="page">
      <section className="section">
        <div className="section-header">
          <h3>Архитектура привычек</h3>
          <button className="btn link">Показать архив</button>
        </div>
        <div className="card-grid habit-grid">
          {habitAreas.map((area) => (
            <article key={area.title} className="panel habit-card">
              <div className="habit-card__meta">
                <span className="badge">{area.streak}</span>
              </div>
              <h4>{area.title}</h4>
              <p>{area.summary}</p>
              <div className="habit-card__list">
                {area.habits.map((habit) => (
                  <div key={habit.name} className="habit-progress__item">
                    <div className="habit-progress__label">
                      <span>{habit.name}</span>
                      <span>{habit.progress}%</span>
                    </div>
                    <div className="progress__track">
                      <div className="progress__value" style={{ width: `${habit.progress}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section habit-layout">
        <div className="panel mood-panel">
          <div className="section-header">
            <h3>Пульс недели</h3>
            <span className="badge">Настроение {moodPulse.rating}</span>
          </div>
          <div className="mood-panel__metrics">
            <div>
              <span>Энергия</span>
              <strong>{moodPulse.energy}%</strong>
            </div>
            <div>
              <span>Фокус</span>
              <strong>{moodPulse.focus}%</strong>
            </div>
          </div>
          <div className="mood-panel__chart">
            {moodPulse.week.map((day) => (
              <div key={day.day} className="chart-column">
                <div className="chart-column__bar" style={{ height: `${day.value}%` }} />
                <span>{day.day}</span>
              </div>
            ))}
          </div>
          <p className="mood-panel__highlight">{moodPulse.highlight}</p>
        </div>
        <div className="panel ritual-panel">
          <div className="section-header">
            <h3>Ритуалы</h3>
            <span className="badge">2 активных</span>
          </div>
          <div className="ritual-list">
            {rituals.map((ritual) => (
              <div key={ritual.name} className="ritual-item">
                <h4>{ritual.name}</h4>
                <ul>
                  {ritual.steps.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="panel experiments-panel">
          <div className="section-header">
            <h3>Эксперименты и точки роста</h3>
            <button className="btn ghost">Запланировать новый</button>
          </div>
          <ul className="experiments-list">
            {experiments.map((experiment) => (
              <li key={experiment.title} className="experiments-item">
                <div>
                  <h4>{experiment.title}</h4>
                  <p>{experiment.description}</p>
                </div>
                <span className="badge">{experiment.status}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}

export default HabitsPage
