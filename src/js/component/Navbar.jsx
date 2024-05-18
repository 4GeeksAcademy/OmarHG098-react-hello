import React from "react";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand text-light" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <i class="fas fa-bars text-white"></i>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active text-secondary" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-secondary" href="#">About us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-secondary" href="#">Contact us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-secondary" href="#">Support</a>
        </li>
      
      </ul>
    </div>
  </div>
</nav>
 )
}

export default Navbar;