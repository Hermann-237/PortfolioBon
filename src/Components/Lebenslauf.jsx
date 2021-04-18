function Lebenslauf() {
  return (
    <section id="resume" className="resume">
      <div className="container">
        <div className="section-title">
          <h2>Lebenslauf</h2>
          <p>
            Netzwerktechniker mit zwei Jahren Erfahrung in der IT-Branche.
            Stressresistent und geübt im Umgang mit Kunden. Auf der Suche nach
            einer Position bei der, die Fähigkeiten und das Wissen im Bereich
            Web Development genutzt werden können.
          </p>
        </div>

        <div className="row">
          <div className="col-lg-6" data-aos="fade-up">
            <h3 className="resume-title">Persönliche Daten</h3>
            <div className="resume-item pb-0">
              <h4>Hermann Tamouya Totim</h4>
              <ul>
                <li>Am Meilenstein 10 , 04159 Leipzig</li>
                <li>+49(0) 1722846967</li>
                <li>hermann.webdev@gmail.com</li>
              </ul>
            </div>

            <h3 className="resume-title">Bildung</h3>
            <div className="resume-item">
              <h4>Full Stack Web Development</h4>
              <h5>Juin 2020 - Juin 2021</h5>
              <p>
                <em> Digital Career Institute (DCI) gGmbH</em>
              </p>
              <p>
                <strong>Kreieren vieler kleiner Projekte, wie:</strong>
              </p>
              <ul style={{ listStyleType: "none" }}>
                <li>
                  <i className="icofont-rounded-right"></i>{" "}
                  <strong>Backend :</strong>
                  <ul>
                    <li>
                      Registierung, Speicherung und Verschlüsselung von
                      Nutzerdaten
                    </li>
                    <li>Authentifierierung mit Hilfe von Token und Cookies</li>
                  </ul>{" "}
                </li>

                <li>
                  <i className="icofont-rounded-right"></i>{" "}
                  <strong>Frontend :</strong>
                  <ul>
                    <li>Multy-page Application (mit Ejs)</li>
                    <li>Single-page Application (mit React, Redux...)</li>
                  </ul>{" "}
                </li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>Deutschkurs und Leben in Deutschland </h4>
              <h5>September 2018 - Januar 2020</h5>
              <p>
                <em> Euro-Schulen, Leipzig</em>
              </p>
              <ul style={{ listStyleType: "none" }}>
                <li>
                  <ul>
                    <li>
                      Leben in Deutschland Kurs mit 30/30 Punkten abgeschlossen
                    </li>
                    <li>
                      Deutsch Sprachkurs mit 238.5/300 Punkten abgeschlossen
                    </li>
                  </ul>{" "}
                </li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>Telekommunikation und Netzwerk </h4>
              <h5>September 2009 - September 2012</h5>
              <p>
                <em> University Institute of the Gulf of Guinea, Kamerun</em>
              </p>
              <p>
                Das Abschlussprojekt war die Anordnung eines Computerraumes, bei
                der der Zugriff einzelner Computer auf den Server ermöglicht
                wurde.
              </p>
            </div>
          </div>
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 className="resume-title">Beschäftigung</h3>
            <div className="resume-item">
              <h4>Teilzeitjob als Auslieferungsfahrer</h4>
              <h5>July 2019 - January 2020</h5>
              <p>
                <em>Auslieferungsfahrer in Leipzig </em>
              </p>
            </div>
            <div className="resume-item">
              <h4> Teilzeitjob als Sicherheitskraft (im Fußballstadion)</h4>
              <h5>November 2018 - January 2019</h5>
              <p>
                <em>Black Vikings Eventservice (BVE) in Leipzig </em>
              </p>
            </div>

            <div className="resume-item">
              <h4> IT-Assistent und Netzwerkadministrator</h4>
              <h5>July 2013 - January 2016</h5>
              <p>
                <em>Internetcafe Balengou in Kamerun</em>
              </p>
              <ul style={{ listStyleType: "none" }}>
                <li>
                  <ul>
                    <li>
                      Router setting, Anordnung der Computerräume,
                      Netzwerkadministration
                    </li>
                    <li>Wartung von Computer Systemen</li>
                  </ul>{" "}
                </li>
              </ul>
            </div>
            <div className="resume-item">
              <h4> Handelsvertreter</h4>
              <h5>March 2012 - May 2013</h5>
              <p>
                <em>Premier games in Douala-Kamerun </em>
              </p>
            </div>

            <h3 className="resume-title">Sprachen</h3>
            <div className="resume-item">
              <h4>Deusch</h4>
              <h5>Niveau: B2</h5>
            </div>
            <div className="resume-item">
              <h4>English</h4>
              <h5>Niveau: B1</h5>
            </div>
            <div className="resume-item">
              <h4>Französisch</h4>
              <h5>Niveau: C1</h5>
            </div>
            <div className="resume-item">
              <h4>Bandjoun</h4>
              <h5>Niveau: Muttersprache</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Lebenslauf;
