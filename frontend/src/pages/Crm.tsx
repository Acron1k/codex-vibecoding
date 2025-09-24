import {
  BadgeCheck,
  Headset,
  MessageSquare,
  PhoneCall,
  Workflow,
  Zap
} from 'lucide-react'
import Card from '../components/Card'
import PageHeader from '../components/PageHeader'

const pipeline = [
  {
    stage: 'Новые лиды',
    deals: 5,
    value: '₽ 120k',
    trend: '+2 за 24 часа'
  },
  {
    stage: 'Оценка',
    deals: 4,
    value: '₽ 210k',
    trend: 'готовы к презентации'
  },
  {
    stage: 'Внедрение',
    deals: 3,
    value: '₽ 360k',
    trend: 'идут по графику'
  },
  {
    stage: 'Сопровождение',
    deals: 6,
    value: '₽ 280k',
    trend: 'SLA 1.9 ч'
  }
]

const upcomingCalls = [
  {
    client: 'NovaCall',
    topic: 'Финализация IVR сценариев',
    time: 'Сегодня · 15:00',
    channel: 'Zoom'
  },
  {
    client: 'RetailX',
    topic: 'Аудит amoCRM + телефония',
    time: 'Завтра · 11:30',
    channel: 'Телефония'
  },
  {
    client: 'SkyLog',
    topic: 'Доработка вебхуков и синхронизации',
    time: '12 марта · 10:00',
    channel: 'Google Meet'
  }
]

const serviceDesk = [
  {
    id: 'SD-142',
    title: 'Не работает прокладка звонков в CRM',
    eta: 'в работе · 2 часа',
    owner: 'Основная работа'
  },
  {
    id: 'SD-143',
    title: 'Подключить вебхук для нового лендинга',
    eta: 'запланировано на завтра',
    owner: 'Подработка'
  },
  {
    id: 'SD-144',
    title: 'Сверка дашбордов по эффективности',
    eta: 'ожидает фидбек',
    owner: 'Клиент'
  }
]

const Crm = () => {
  return (
    <div className="page">
      <PageHeader
        title="CRM-процессы"
        description="Следи за воронкой продаж, коммуникациями и сервис-деском в одном месте."
        actions={
          <button type="button" className="btn btn--primary">
            Добавить сделку
          </button>
        }
      />

      <Card
        title="Воронка"
        subtitle="Концентрация сделок и прогнозируемая выручка"
        actions={<span className="badge badge--soft">Автообновление каждые 5 мин</span>}
      >
        <div className="pipeline">
          {pipeline.map((stage) => (
            <div key={stage.stage} className="pipeline__stage">
              <p className="pipeline__title">{stage.stage}</p>
              <p className="pipeline__value">{stage.value}</p>
              <p className="pipeline__deals">{stage.deals} активных сделок</p>
              <span className="pipeline__trend">{stage.trend}</span>
            </div>
          ))}
        </div>
      </Card>

      <div className="grid grid--two">
        <Card title="Грядущие коммуникации" subtitle="Звонки и встречи">
          <ul className="call-list">
            {upcomingCalls.map((call) => (
              <li key={call.client} className="call-list__item">
                <div className="call-list__icon" aria-hidden="true">
                  <PhoneCall size={18} strokeWidth={1.6} />
                </div>
                <div>
                  <p className="call-list__client">{call.client}</p>
                  <p className="call-list__topic">{call.topic}</p>
                </div>
                <div className="call-list__meta">
                  <span>{call.time}</span>
                  <span className="pill">{call.channel}</span>
                </div>
              </li>
            ))}
          </ul>
        </Card>
        <Card
          title="Сервис-деск"
          subtitle="Кейсы на сопровождении и их статус"
          actions={<span className="pill pill--accent">SLA 94% за неделю</span>}
        >
          <ul className="service-list">
            {serviceDesk.map((item) => (
              <li key={item.id} className="service-list__item">
                <div>
                  <p className="service-list__title">{item.title}</p>
                  <p className="service-list__subtitle">{item.id}</p>
                </div>
                <div className="service-list__meta">
                  <span>{item.eta}</span>
                  <span className="pill">{item.owner}</span>
                </div>
              </li>
            ))}
          </ul>
        </Card>
      </div>

      <div className="grid grid--three">
        <Card title="Качество коммуникаций" subtitle="По данным звонков и чат-бота">
          <div className="quality">
            <div className="quality__item">
              <Headset size={18} strokeWidth={1.6} />
              92% звонков обработаны в первую линию
            </div>
            <div className="quality__item">
              <MessageSquare size={18} strokeWidth={1.6} />
              Среднее время ответа в чатах: 4 минуты
            </div>
            <div className="quality__item">
              <BadgeCheck size={18} strokeWidth={1.6} />
              NPS клиентов сопровождения: 9.1
            </div>
          </div>
        </Card>
        <Card title="Автоматизации" subtitle="Что приносит максимальный эффект">
          <ul className="automation-list">
            <li>
              <Workflow size={18} strokeWidth={1.6} />
              Робот-пинг просроченных задач сократил срывы на 27%
            </li>
            <li>
              <Zap size={18} strokeWidth={1.6} />
              Автосоздание тикетов из звонков экономит ~3 ч в неделю
            </li>
            <li>
              <Workflow size={18} strokeWidth={1.6} />
              Триггеры повторных продаж: +15% к MRR за месяц
            </li>
          </ul>
        </Card>
        <Card title="Клиентские сигналы" subtitle="Интересы и настроение клиентов">
          <div className="signals">
            <div className="signals__item">
              <span className="pill pill--positive">Рост интереса</span>
              Тема: аналитика звонков, клиенты хотят видеть больше визуализаций
            </div>
            <div className="signals__item">
              <span className="pill pill--warning">Риск оттока</span>
              Клиент RetailX ждёт SLA 1 час в пиковой нагрузке
            </div>
            <div className="signals__item">
              <span className="pill pill--accent">Возможность</span>
              NovaCall готова на доп. пакет обучения операторов
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default Crm
