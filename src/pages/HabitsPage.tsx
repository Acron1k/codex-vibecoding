import PageHeader from '../components/PageHeader'

const habitStacks = [
  {
    title: 'Утренний блок',
    streak: '21 день',
    completion: 92,
    rituals: ['Журнал на 5 минут', 'Дыхательная практика box breathing', 'Проверка приоритетов дня'],
  },
  {
    title: 'Здоровье',
    streak: '12 дней',
    completion: 78,
    rituals: ['Плавание 3 раза в неделю', '8k шагов', 'Контроль сна > 7 часов'],
  },
  {
    title: 'Развитие',
    streak: '8 дней',
    completion: 66,
    rituals: ['Курс по интеграциям', 'Чтение 20 страниц', 'Конспект инсайтов в базе знаний'],
  },
]

const focusExperiments = [
  {
    title: 'Digital detox 45 минут',
    detail: 'Выключаем уведомления во время фокус-сессий, после — ретроспектива в журнале.',
    window: 'ежедневно 10:00',
  },
  {
    title: 'Habit stacking: бассейн + подкаст',
    detail: 'Сочетаем тренировку и обучение: отмечаем конспект сразу в заметках.',
    window: 'вт, чт, сб',
  },
  {
    title: 'Личное творчество',
    detail: '30 минут музыки или дизайна по воскресеньям — фиксируем настроение.',
    window: 'вс · 16:00',
  },
]

const wellbeingMetrics = [
  {
    label: 'Энергия',
    value: '8.4 / 10',
    note: 'Лучше после утреннего бассейна',
  },
  {
    label: 'Осознанность',
    value: '73%',
    note: 'Журнал заполнен 5 из 7 дней',
  },
  {
    label: 'Время для себя',
    value: '5.5 ч',
    note: 'Добавить творческий слот в пятницу',
  },
]

const HabitsPage = () => {
  return (
    <div className="page">
      <PageHeader
        title="Привычки и ритмы"
        subtitle="Следим за энергией, стриками и экспериментами, чтобы поддерживать креативность и стабильность."
        actions={
          <>
            <button type="button" className="button-ghost">
              Синхронизировать с Apple Health
            </button>
            <button type="button" className="button-primary">
              Новая практика
            </button>
          </>
        }
      />

      <div className="habit-grid">
        {habitStacks.map((stack) => (
          <div key={stack.title} className="habit-card">
            <div className="habit-title">
              <h3>{stack.title}</h3>
              <span>{stack.streak}</span>
            </div>
            <div className="progress-track">
              <div className="progress-fill" style={{ width: `${stack.completion}%` }} />
            </div>
            <div className="habit-progress-value">{stack.completion}% выполнено</div>
            <ul>
              {stack.rituals.map((ritual) => (
                <li key={ritual}>{ritual}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <section className="glass-card">
        <div className="glass-card__header">
          <h3>Эксперименты недели</h3>
          <span className="badge">Личный рост</span>
        </div>
        <ul className="list">
          {focusExperiments.map((experiment) => (
            <li key={experiment.title} className="list-item">
              <div className="list-item__meta">
                <strong>{experiment.title}</strong>
                <p>{experiment.detail}</p>
              </div>
              <span className="pill">{experiment.window}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="glass-card">
        <div className="glass-card__header">
          <h3>Самочувствие</h3>
          <span className="badge">Week in review</span>
        </div>
        <div className="stat-grid">
          {wellbeingMetrics.map((metric) => (
            <div key={metric.label} className="stat-card">
              <span className="stat-value">{metric.value}</span>
              <strong>{metric.label}</strong>
              <p>{metric.note}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default HabitsPage
