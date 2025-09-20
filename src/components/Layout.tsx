import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import TopBar from './TopBar'

const Layout = () => {
  return (
    <>
      <Sidebar />
      <div className="app-main">
        <TopBar />
        <div className="app-scroll">
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default Layout
