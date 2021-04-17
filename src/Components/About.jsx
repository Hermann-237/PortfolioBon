import React from "react";

function About() {
  return (
    <section id="about" class="about">
      <div class="container">
        <div class="section-title">
          <h2>Über mich</h2>
          <p>
            Mein Name ist Hermann Tamouya Totim, gebürtiger Kameruner, der seit
            drei Jahren in Deutschland lebt. Ich habe im Laufe der Jahre viel
            Erfahrung in Telekommunikation und Netzwerk gesammelt. Seit einem
            Jahr absolviere ich einen Kurs am Digital Career Institute (DCI) in
            Richtung Full Stack Delevoper und dieser Bereich hat eine große
            Leidenschaft für mich entwickelt. Ich habe kürzlich meine Ausbildung
            zum Webentwickler abgeschlossen.
          </p>
        </div>

        <div class="row">
          {/* <div class="col-lg-4" data-aos="fade-right">
            <img src="assets/img/author-image.jpg" class="img-fluid" alt="" />
          </div> */}
          <div class="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
            <h3>Full Stack Developer </h3>
            <div class="row">
              <div class="col-lg-6">
                <ul>
                  <li>
                    <i class="icofont-rounded-right"></i>{" "}
                    <strong>Geburststag:</strong> 2 Febuar 1989
                  </li>
                  <li>
                    <i class="icofont-rounded-right"></i>{" "}
                    <strong>Website:</strong> hermannwebdev.com
                  </li>
                  <li>
                    <i class="icofont-rounded-right"></i>{" "}
                    <strong>HandyNummer:</strong> +49(0) 1722846967
                  </li>
                  <li>
                    <i class="icofont-rounded-right"></i>{" "}
                    <strong>Stadt:</strong> Leipzig, Deushland
                  </li>
                </ul>
              </div>
              <div class="col-lg-6">
                <ul>
                  <li>
                    <i class="icofont-rounded-right"></i> <strong>Age:</strong>{" "}
                    32
                  </li>
                  <li>
                    <i class="icofont-rounded-right"></i>{" "}
                    <strong>Schulabschluss:</strong> Bachelor
                  </li>
                  <li>
                    <i class="icofont-rounded-right"></i>{" "}
                    <strong>Email:</strong> hermann.webdev@gmail.com
                  </li>
                  <li>
                    <i class="icofont-rounded-right"></i>{" "}
                    <strong>Verfügbar: </strong> Ab 16-07-2021
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
