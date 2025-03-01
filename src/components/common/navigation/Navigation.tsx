

import "./navigation.scss";

const Navigation = () => {
  return (
    <div className="nav-content bg-dark">
      <div className="nav-bar-bar container">
        <div className="row">
          <div className="col-lg-8 col-md-12">
            <div className="navigation-bar">
            <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
    <div className="container-fluid">
     
      <div className="collapse navbar-collapse" id="navbarColor01">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item dropdown">
    <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Dropdown</a>
    <ul className="dropdown-menu">
      <li><a className="dropdown-item" href="#">Action</a></li>
      <li><a className="dropdown-item" href="#">Another action</a></li>
      <li><a className="dropdown-item" href="#">Something else here</a></li>
     
      <li><a className="dropdown-item" href="#">Separated link</a></li>
    </ul>
  </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Features</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Pricing</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">About</a>
          </li>
        </ul>
      
      </div>
    </div>
  </nav>
            </div>
          </div>
          <div className="col-lg-4 col-md-12">Accounts Component</div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
