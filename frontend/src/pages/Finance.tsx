import { Banknote, Coins, CreditCard, PieChart, TrendingUp, Wallet } from 'lucide-react'
import Card from '../components/Card'
import PageHeader from '../components/PageHeader'

const kpi = [
  {
    title: 'MRR',
    value: '₽ 312k',
    helper: '+12% к прошлому месяцу',
    icon: TrendingUp
  },
  {
    title: 'Расходы',
    value: '₽ 124k',
    helper: '47% бюджета использовано',
    icon: CreditCard
  },
  {
    title: 'Чистая прибыль',
    value: '₽ 188k',
    helper: '+22% YoY',
    icon: Wallet
  }
]

const budgets = [
  {
    category: 'Подписки и сервисы',
    spent: 32000,
    limit: 45000
  },
  {
    category: 'Команда и подрядчики',
    spent: 54000,
    limit: 90000
  },
  {
    category: 'Обучение и R&D',
    spent: 18000,
    limit: 30000
  }
]

const cashflow = [
  {
    source: 'Основная работа',
    amount: '₽ 220k',
    note: 'поддержка инфраструктуры',
    type: 'in'
  },
  {
    source: 'Интеграторство',
    amount: '₽ 150k',
    note: 'CRM внедрение RetailX',
    type: 'in'
  },
  {
    source: 'Хобби-проект',
    amount: '₽ 18k',
    note: 'курсы по автоматизации',
    type: 'out'
  },
  {
    source: 'Подписки/инструменты',
    amount: '₽ 28k',
    note: 'телефония, сервера, SaaS',
    type: 'out'
  }
]

const upcoming = [
  {
    label: 'Инвойс от NovaCall',
    amount: '₽ 95k',
    due: 'до 8 марта'
  },
  {
    label: 'Оплата подрядчику по AI',
    amount: '₽ 40k',
    due: '12 марта'
  },
  {
    label: 'Обновление оборудования',
    amount: '₽ 25k',
    due: 'конец месяца'
  }
]

const Finance = () => {
  return (
    <div className="page">
      <PageHeader
        title="Финансы и аналитика"
        description="Отслеживай денежные потоки, бюджеты и ближайшие обязательства."
        actions={
          <button type="button" className="btn btn--primary">
            Добавить транзакцию
          </button>
        }
      />

      <div className="grid grid--three">
        {kpi.map((item) => {
          const Icon = item.icon
          return (
            <Card key={item.title} title={item.title} subtitle={item.helper}>
              <div className="kpi-card">
                <Icon size={20} strokeWidth={1.6} />
                <span>{item.value}</span>
              </div>
            </Card>
          )
        })}
      </div>

      <div className="grid grid--two">
        <Card
          title="Бюджеты"
          subtitle="Использование лимитов по ключевым статьям"
          actions={<span className="pill">обновлено автоматически</span>}
        >
          <div className="budget-list">
            {budgets.map((item) => {
              const percent = Math.round((item.spent / item.limit) * 100)
              return (
                <div key={item.category} className="budget-list__item">
                  <div>
                    <p className="budget-list__title">{item.category}</p>
                    <p className="budget-list__subtitle">
                      {item.spent.toLocaleString('ru-RU')} ₽ из{' '}
                      {item.limit.toLocaleString('ru-RU')} ₽
                    </p>
                  </div>
                  <div className="progress">
                    <div className="progress__bar" style={{ width: `${percent}%` }} />
                  </div>
                  <span className="budget-list__percent">{percent}%</span>
                </div>
              )
            })}
          </div>
        </Card>
        <Card title="Движение средств" subtitle="Доходы и расходы за 30 дней">
          <ul className="cashflow">
            {cashflow.map((item) => (
              <li key={item.source} className="cashflow__item">
                <div className="cashflow__icon" aria-hidden="true">
                  {item.type === 'in' ? (
                    <Coins size={18} strokeWidth={1.6} />
                  ) : (
                    <Banknote size={18} strokeWidth={1.6} />
                  )}
                </div>
                <div>
                  <p className="cashflow__title">{item.source}</p>
                  <p className="cashflow__subtitle">{item.note}</p>
                </div>
                <span className={item.type === 'in' ? 'text-positive' : 'text-negative'}>
                  {item.amount}
                </span>
              </li>
            ))}
          </ul>
        </Card>
      </div>

      <div className="grid grid--two">
        <Card title="Ближайшие события" subtitle="Обязательства и поступления">
          <ul className="upcoming-list">
            {upcoming.map((item) => (
              <li key={item.label} className="upcoming-list__item">
                <div>
                  <p className="upcoming-list__title">{item.label}</p>
                  <p className="upcoming-list__subtitle">{item.due}</p>
                </div>
                <span>{item.amount}</span>
              </li>
            ))}
          </ul>
        </Card>
        <Card title="Финансовое самочувствие" subtitle="Пульс на ближайший квартал">
          <div className="wellbeing">
            <div className="wellbeing__item">
              <PieChart size={18} strokeWidth={1.6} />
              Доля обязательных расходов — 41% (остается пространство для инвестиций)
            </div>
            <div className="wellbeing__item">
              <Wallet size={18} strokeWidth={1.6} />
              Резервный фонд покрывает 4.5 месяца операционки
            </div>
            <div className="wellbeing__item">
              <Coins size={18} strokeWidth={1.6} />
              Запланировать инвестиции в обучение на 60k ₽ в апреле
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default Finance
