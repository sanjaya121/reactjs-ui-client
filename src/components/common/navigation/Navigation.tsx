import { Link } from "react-router-dom";
import NavAccount from "../account/NavAccount";
import "./navigation.scss";

const Navigation = () => {
  return (
    <div className="nav-content bg-dark">
      <div className="nav-bar-bar container">
        <div className="row">
          <div className="col-lg-8 col-md-12">
            <div className="navigation-bar">
              <nav
                className="navbar navbar-expand-lg bg-dark border-bottom border-body"
                data-bs-theme="dark"
              >
                <div className="container-fluid">
                  <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                      <li className="nav-item">
                        <Link
                          className="nav-link active"
                          aria-current="page"
                          to="/"
                        >
                          Home
                        </Link>
                      </li>
                      <li className="nav-item dropdown">
                        <a
                          className="nav-link dropdown-toggle"
                          data-bs-toggle="dropdown"
                          href="#"
                          role="button"
                          aria-expanded="false"
                        >
                          Categories
                        </a>
                        <ul className="dropdown-menu">
                          <li>
                            <a className="dropdown-item" href="#">
                              Men's
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Women's
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Kids
                            </a>
                          </li>

                          <li>
                            <a className="dropdown-item" href="#">
                              Sales
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          New
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          Summer Sales
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          Today's Sale
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 nav-account-icons">
            <NavAccount />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
