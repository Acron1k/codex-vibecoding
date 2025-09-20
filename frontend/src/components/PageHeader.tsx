import type { ReactNode } from 'react'

interface PageHeaderProps {
  title: string
  description: string
  actions?: ReactNode
}

const PageHeader = ({ title, description, actions }: PageHeaderProps) => {
  return (
    <div className="page-header">
      <div>
        <p className="page-header__eyebrow">Обновлено пару минут назад</p>
        <h2 className="page-header__title">{title}</h2>
        <p className="page-header__description">{description}</p>
      </div>
      {actions ? <div className="page-header__actions">{actions}</div> : null}
    </div>
  )
}

export default PageHeader
