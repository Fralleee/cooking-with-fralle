import { Link, Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Browse</Link></li>
          <li>
            <Link to="/cupcakes">Cupcakes</Link>
          </li>
          <li>
            <Link to="/pancakes">Pancakes</Link>
          </li>
          <li>
            <Link to="/nothing-here">Nothing Here</Link>
          </li>
        </ul>
      </nav>


      <Outlet />
    </div>
  )
}

export default Layout
