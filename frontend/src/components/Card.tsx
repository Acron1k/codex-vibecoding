import type { ReactNode } from 'react'

interface CardProps {
  title: string
  subtitle?: string
  actions?: ReactNode
  children: ReactNode
  className?: string
}

const Card = ({ title, subtitle, actions, children, className }: CardProps) => {
  return (
    <section className={`card ${className ?? ''}`}>
      <header className="card__header">
        <div>
          <h3 className="card__title">{title}</h3>
          {subtitle ? <p className="card__subtitle">{subtitle}</p> : null}
        </div>
        {actions ? <div className="card__actions">{actions}</div> : null}
      </header>
      <div className="card__content">{children}</div>
    </section>
  )
}

export default Card
