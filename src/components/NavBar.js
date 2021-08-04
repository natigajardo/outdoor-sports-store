import './NavBar.css';
import logo from './../assets/images/nglogo2.png';

function NavBar (){
  return (
    <div className="header">

      <nav className="navbar navbar-expand-lg navbar-light menu-navbar">

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="navbar-brand">
          <img src={logo} className="logo-img" alt="logo" />
        </div>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto mt-2">
            <li className="nav-item">
              <p className="nav-link">Home</p>
            </li>
            <li className="nav-item">
              <p className="nav-link">Nosotros</p>
            </li>
            <li className="nav-item">
              <p className="nav-link">Productos</p>
            </li>
            <li className="nav-item">
              <p className="nav-link">Tours</p>
            </li>
            <li className="nav-item">
              <p className="nav-link">Newsletter</p>
            </li> 
          </ul>
        </div>

      </nav>
    </div>  
  );
}

export default NavBar;