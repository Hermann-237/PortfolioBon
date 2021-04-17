import React from "react";

function Header() {
  return (
    <header id="header">
      <div className="d-flex flex-column">
        <div className="profile">
          <img
            src="assets/img/author-image.jpg"
            alt=""
            className="img-fluid rounded-circle"
          />
          <h1 className="text-light">
            <a href="index.html">Hermann Tamouya Totim</a>
          </h1>
          <div className="social-links mt-3 text-center">
            <a
              href="https://github.com/hermann-237"
              target="_blank"
              rel="noreferrer"
              title="Github"
              className="google-plus"
            >
              <i className="bx bxl-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/hermann-webdev"
              className="linkedin"
              title="Linkedin"
              rel="noreferrer"
              target="_blank"
            >
              <i className="bx bxl-linkedin"></i>
            </a>
          </div>
        </div>

        <nav className="nav-menu">
          <ul>
            <li className="active">
              <a href="#hero">
                <i className="bx bx-home"></i> <span>Start</span>
              </a>
            </li>
            <li>
              <a href="#about">
                <i className="bx bx-user"></i> <span>Über mich</span>
              </a>
            </li>
            <li>
              <a href="#resume">
                <i className="bx bx-file-blank"></i> <span>Lebenslauf</span>
              </a>
            </li>

            <li>
              <a href="#project">
                <i className="bx bx-book-content"></i> Projekte
              </a>
            </li>
            <li>
              <a href="#skills">
                <i className="bx bx-server"></i> Kenntnisse
              </a>
            </li>
            <li>
              <a href="#contact">
                <i className="bx bx-envelope"></i> Kontakt
              </a>
            </li>
          </ul>
        </nav>
        <button type="button" className="mobile-nav-toggle d-xl-none">
          <i className="icofont-navigation-menu"></i>
        </button>
      </div>
    </header>
  );
}

export default Header;
