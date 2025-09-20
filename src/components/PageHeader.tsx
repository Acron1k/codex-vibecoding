import type { ReactNode } from 'react'

type PageHeaderProps = {
  title: string
  subtitle: string
  actions?: ReactNode
}

const PageHeader = ({ title, subtitle, actions }: PageHeaderProps) => {
  return (
    <div className="page-header">
      <div className="page-header__meta">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
      {actions ? <div className="page-header__actions">{actions}</div> : null}
    </div>
  )
}

export default PageHeader
