import React from "react";

function Project() {
  return (
    <section id="project" className="services">
      <div className="container">
        <div className="section-title">
          <h2>Projekte</h2>
          <p>
            Hier befinden Sie ein paar von den Projekte, den ich gemacht habe.
          </p>
        </div>

        <div className="row">
          <div className=" col-md-6 icon-box" data-aos="fade-up">
            <div className="card cardBon">
              <img
                src="assets/img/project1.png"
                className="card-img-top"
                alt="..."
              />
              <hr />
              <div className="card-body">
                <h5 className="card-title">Aufgabenliste</h5>
                <hr />
                <p className="text-info">
                  Diese Website benutzt die folgende Tools:
                </p>
                <p className="card-text">
                  <ul style={{ listStyle: "none" }}>
                    <li>
                      <b className="text-primary">Backend:</b> Node Js, MongoDb,
                      Mongoose, Express Js
                    </li>
                    <li>
                      <b className="text-primary">Frontend:</b> React, Bootstrap
                    </li>
                    <li>
                      <b className="text-primary">Deploy:</b> Dieses Projekt
                      wurde auf Github bereitgestellt
                    </li>
                  </ul>
                </p>
                <hr />
                <h4>Beschreibung</h4>
                <p>
                  Mit dieser App können Sie Ihre Einkäufe auf der Liste
                  eintragen und gleichzeitig entfernen. Sie können auch den Wert
                  jedes Artikels ändern und die Artikel werden in der
                  Reihenfolge ihrer Priorität angezeigt
                </p>
                <hr />
                <a
                  href="https://github.com/Hermann-237/frontend-hermann-shop"
                  className="btn btn-secondary  w-100 mb-2 "
                  target="_blank"
                  rel="noreferrer"
                >
                  Github anschauen
                </a>
                <a
                  href="https://hermann-237.github.io/frontend-hermann-shop/"
                  className="btn btn-primary w-100"
                  target="_blank"
                  rel="noreferrer"
                >
                  Website anschauen
                </a>
              </div>
            </div>
          </div>
          {/* le deuxieme */}
          <div className=" col-md-6 icon-box" data-aos="fade-up">
            <div className="card">
              <img
                src="assets/img/project2.png"
                className="card-img-top"
                alt="..."
              />
              <hr />
              <div className="card-body">
                <h5 className="card-title">Konjugation von Verben</h5>
                <hr />
                <p className="text-info">
                  Diese Website benutzt die folgende Tools:
                </p>
                <p className="card-text">
                  <ul style={{ listStyle: "none" }}>
                    <li>
                      <b className="text-primary">Backend:</b> Node Js, MongoDb,
                      Mongoose, Express Js
                    </li>
                    <li>
                      <b className="text-primary">Frontend:</b> React, Bootstrap
                    </li>
                    <li>
                      <b className="text-primary">Deploy:</b> Dieses Projekt
                      wurde auf Digitalocean bereitgestellt
                    </li>
                  </ul>
                </p>
                <hr />
                <h4>Beschreibung</h4>
                <p>
                  Mit dieser App, die ich augebaut habe , können Sie alle
                  Zeitformen auf Englisch befinden
                </p>
                <hr />
                <a
                  href="https://github.com/Hermann-237/simo"
                  className="btn btn-secondary  w-100 mb-2"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github anschauen
                </a>
                <a
                  href="https://www.simplecyto.com/"
                  className="btn btn-primary w-100"
                  target="_blank"
                  rel="noreferrer"
                >
                  Website anschauen
                </a>
              </div>
            </div>
          </div>
          {/* le troisieme */}
          <div className=" col-md-6 icon-box" data-aos="fade-up">
            <div className="card">
              <img
                src="assets/img/project3.png"
                className="card-img-top"
                alt="..."
              />
              <hr />
              <div className="card-body">
                <h5 className="card-title">
                  Sehen Sie die Produktliste erst nach dem Login
                </h5>
                <hr />
                <p className="text-info">
                  Diese Website benutzt die folgende Tools:
                </p>
                <p className="card-text">
                  <ul style={{ listStyle: "none" }}>
                    <li>
                      <b className="text-primary">Backend:</b> Node Js, MongoDb,
                      Mongoose, Express Js, Jsonwebtoken, Cookie-parser, Bcrypt
                    </li>
                    <li>
                      <b className="text-primary">Frontend:</b> Bootstrap, Ejs
                    </li>
                    <li>
                      <b className="text-primary">Deploy:</b> Dieses Projekt
                      wurde auf Heroku bereitgestellt
                    </li>
                  </ul>
                </p>
                <hr />
                <h4>Beschreibung</h4>
                <p>
                  In dieser App wird die Liste der Produkte nur erst angezeigt,
                  nachdem Sie ein Konto erstellt und sich angemeldet haben.
                </p>
                <hr />
                <a
                  href="https://github.com/Hermann-237/seeProducts"
                  className="btn btn-secondary  w-100 mb-2"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github anschauen
                </a>
                <a
                  href="https://herman02.herokuapp.com/"
                  className="btn btn-primary w-100"
                  target="_blank"
                  rel="noreferrer"
                >
                  Website anschauen
                </a>
              </div>
            </div>
          </div>
          {/* le quatrieme */}
          <div className=" col-md-6 icon-box" data-aos="fade-up">
            <div className="card">
              <img
                src="assets/img/project4.png"
                className="card-img-top"
                alt="..."
              />
              <hr />
              <div className="card-body">
                <h5 className="card-title">Währung konvertieren</h5>
                <hr />
                <p className="text-info">
                  Diese Website benutzt die folgende Tools:
                </p>
                <p className="card-text">
                  <ul style={{ listStyle: "none" }}>
                    <li>
                      <b className="text-primary">Backend:</b> Ich habe die
                      Daten auf dieser Website{" "}
                      <strong>api.cryptonator.com </strong> abgeholt
                    </li>
                    <li>
                      <b className="text-primary">Frontend:</b> Bootstrap
                    </li>
                    <li>
                      <b className="text-primary">Deploy:</b> Dieses Projekt
                      wurde auf Github bereitgestellt
                    </li>
                  </ul>
                </p>
                <hr />
                <h4>Beschreibung</h4>
                <p>
                  Mit dieser App, die ich aufgebaut habe, können Sie Währung
                  konvertieren.
                </p>
                <hr />
                <a
                  href="https://github.com/Hermann-237/crypto-rate"
                  className="btn btn-secondary  w-100 mb-2"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github anschauen
                </a>
                <a
                  href="https://hermann-237.github.io/crypto-rate/"
                  className="btn btn-primary w-100"
                  target="_blank"
                  rel="noreferrer"
                >
                  Website anschauen
                </a>
              </div>
            </div>
          </div>
          {/* le cinquieme */}
          <div className=" col-md-6 icon-box" data-aos="fade-up">
            <div className="card">
              <img
                src="assets/img/project5.png"
                className="card-img-top"
                alt="..."
              />
              <hr />
              <div className="card-body">
                <h5 className="card-title">Taschenrechner</h5>
                <hr />
                <p className="text-info">
                  Diese Website benutzt die folgende Tools:
                </p>
                <p className="card-text">
                  <ul style={{ listStyle: "none" }}>
                    <li>
                      <b className="text-primary">Frontend:</b> Bootstrap und
                      vanille Javascript (DOM)
                    </li>
                    <li>
                      <b className="text-primary">Deploy:</b> Dieses Projekt
                      wurde auf Github bereitgestellt
                    </li>
                  </ul>
                </p>
                <hr />
                <h4>Beschreibung</h4>
                <p>
                  Mit dieser App, die ich aufgebaut habe, können Sie Modulo und
                  Division berechnen.
                </p>
                <hr />
                <a
                  href="https://github.com/Hermann-237/calculator"
                  className="btn btn-secondary  w-100 mb-2"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github anschauen
                </a>
                <a
                  href="https://hermann-237.github.io/calculator/"
                  className="btn btn-primary w-100"
                  target="_blank"
                  rel="noreferrer"
                >
                  Website anschauen
                </a>
              </div>
            </div>
          </div>
          {/* le sixieme */}
          <div className=" col-md-6 icon-box" data-aos="fade-up">
            <div className="card">
              <img
                src="assets/img/project6.png"
                className="card-img-top"
                alt="..."
              />
              <hr />
              <div className="card-body">
                <h5 className="card-title">Bank App</h5>
                <hr />
                <p className="text-info">
                  Diese Website benutzt die folgende Tools:
                </p>
                <p className="card-text">
                  <ul style={{ listStyle: "none" }}>
                    <li>
                      <b className="text-primary">Backend:</b> Node Js, MongoDb,
                      Mongoose, Express Js, Jsonwebtoken, Cookie-parser, Bcrypt
                    </li>
                    <li>
                      <b className="text-primary">Frontend:</b> Ich habe Postman
                      benutzt, um das Ergebnis zu sehen
                    </li>
                    <li>
                      <b className="text-primary">Deploy:</b> Dieses Projekt
                      wurde auf Github bereitgestellt
                    </li>
                  </ul>
                </p>
                <hr />
                <h4>Beschreibung</h4>
                <p>
                  Mit dieser App, die ich aufgebaut habe, können Sie erst nach
                  der Anmeldung Geld auf Ihr Konto auszahlen und einzahlen.
                </p>
                <hr />
                <a
                  href="https://github.com/Hermann-237/smallBankApp"
                  className="btn btn-secondary  w-100 mb-2"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github anschauen
                </a>
              </div>
            </div>
          </div>

          {/* le septieme */}
          <div className=" col-md-6 icon-box" data-aos="fade-up">
            <div className="card">
              <img
                src="assets/img/project7.png"
                className="card-img-top"
                alt="..."
              />
              <hr />
              <div className="card-body">
                <h5 className="card-title">Daten im Browser speichern</h5>
                <hr />
                <p className="text-info">
                  Diese Website benutzt die folgende Tools:
                </p>
                <p className="card-text">
                  <ul style={{ listStyle: "none" }}>
                    <li>
                      <b className="text-primary">Backend:</b> Ich habe die
                      Daten auf dieser Website <strong>www.omdbapi.com </strong>{" "}
                      abgeholt
                    </li>
                    <li>
                      <p>
                        <b className="text-primary">Frontend:</b>Javascript,
                        Html5 und Css3
                      </p>
                    </li>
                    <li>
                      <b className="text-primary">Deploy:</b> Dieses Projekt
                      wurde auf Github bereitgestellt
                    </li>
                  </ul>
                </p>
                <hr />
                <h4>Beschreibung</h4>
                <p>
                  Mit dieser App, die ich aufgebaut habe, können Sie die Daten,
                  die Sie von einen API abgeholt haben in Ihrem Browser
                  speichern.
                </p>
                <hr />
                <a
                  href="https://github.com/Hermann-237/storeMovieBrowser"
                  className="btn btn-secondary  w-100 mb-2"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github anschauen
                </a>
              </div>
            </div>
          </div>

          {/* le huitieme */}
          <div className=" col-md-6 icon-box" data-aos="fade-up">
            <div className="card">
              <img
                src="assets/img/project8.png"
                className="card-img-top"
                alt="..."
              />
              <hr />
              <div className="card-body">
                <h5 className="card-title">Bank Box Rezepte</h5>
                <hr />
                <p className="text-info">
                  Diese Website benutzt die folgende Tools:
                </p>
                <p className="card-text">
                  <ul style={{ listStyle: "none", height: "200px" }}>
                    <li>
                      <b className="text-primary">Frontend:</b> Vanille
                      Javascript(DOM), Html5 und CSS3
                    </li>
                    <li>
                      <b className="text-primary">Deploy:</b> Dieses Projekt
                      wurde auf Github bereitgestellt
                    </li>
                  </ul>
                </p>
                <hr />

                <h4>Beschreibung</h4>
                <p>
                  Mit dieser App, die ich aufgebaut habe, können Sie einfach die
                  Rezept suchen und nachbacken
                </p>

                <hr />
                <a
                  href="https://github.com/Hermann-237/BankRecept"
                  className="btn btn-secondary  w-100 mb-2"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github anschauen
                </a>
                <a
                  href="https://hermann-237.github.io/BankRecept/"
                  className="btn btn-primary w-100"
                  target="_blank"
                  rel="noreferrer"
                >
                  Website anschauen
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project;
