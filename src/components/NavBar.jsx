import { Link } from "react-router-dom";


function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/" style={{color: "green"}}>Verde Vivo</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Inicio</Link>
        </li>
        <li className="nav-item dropdown">
          <Link class="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Plantas
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/plantas1">Plantas sin flor</Link></li>
            <li><Link className="dropdown-item" to="#">Plantas con flor</Link></li>
            <li><Link className="dropdown-item" to="#">otras</Link></li>
          </ul>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/blogs">Blog</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/acercade">Acerca de</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="contacto">Contacto</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  );
}

export default NavBar;
