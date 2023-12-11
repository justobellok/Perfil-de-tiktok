import { Outlet, Link } from "react-router-dom";
import { FaLayerGroup, FaHeartCircleMinus} from "react-icons/fa6";
import "./link.css"

const Layout = () => {
  return (
    <div className="contenedor">
      <nav className="links">
        <ul>
          <li>
            <Link to="/"> <FaLayerGroup /> </Link>
          </li>
          <li>
            <Link to="/private"><FaHeartCircleMinus /></Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  )
};

export default Layout;