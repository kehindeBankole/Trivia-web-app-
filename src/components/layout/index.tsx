import { Outlet } from 'react-router-dom'
import classes from './index.module.css'

function Layout() {
  return (
    <main>
      <section className="container mx-auto w-full h-screen p-4">
        <Outlet />
      </section>
    </main>
  )
}

export default Layout
