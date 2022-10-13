import React from "react";

function About() {
  const age = new Date().getFullYear() - 1989;
  const timeLivingInGerman = new Date().getFullYear() - 2018;
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-title">
          <h2>Über mich</h2>
          <p>
            {`Mein Name ist Hermann Tamouya Totim, gebürtiger Kameruner, der seit
            ${timeLivingInGerman} Jahren in Deutschland lebt. Ich habe im Laufe
            der Jahre viel Erfahrung in Telekommunikation und Netzwerk
            gesammelt. Im Mai 2021, absolviere ich einen Kurs am Digital
            Career Institute (DCI) in Richtung Full Stack Delevoper und dieser
            Bereich hat eine große Leidenschaft für mich entwickelt. Seit Mai 2021 arbeite ich  als Frontend Developer bei eClever Entwicklung OHG.`}
          </p>
        </div>

        <div className="row">
          <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
            <h3>Full Stack Developer </h3>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li>
                    <i className="icofont-rounded-right"></i>{" "}
                    <strong>Geburststag:</strong> 8. Febuar 1989
                  </li>
                  <li>
                    <i className="icofont-rounded-right"></i>{" "}
                    <strong>Website:</strong> hermannwebdev.com
                  </li>
                  <li>
                    <i className="icofont-rounded-right"></i>{" "}
                    <strong>HandyNummer:</strong> +49(0) 1722846967
                  </li>
                  <li>
                    <i className="icofont-rounded-right"></i>{" "}
                    <strong>Stadt:</strong> Leipzig, Deushland
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li>
                    <i className="icofont-rounded-right"></i>{" "}
                    <strong>Age:</strong> {age}
                  </li>
                  <li>
                    <i className="icofont-rounded-right"></i>{" "}
                    <strong>Schulabschluss:</strong> Bachelor (Telekommunikation
                    & Netzwerk)
                  </li>
                  <li>
                    <i className="icofont-rounded-right"></i>{" "}
                    <strong>Email:</strong> hermann.webdev@gmail.com
                  </li>
                  <li>
                    <i className="icofont-rounded-right"></i>{" "}
                    <strong>Verfügbar: </strong> Ab sofort
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
