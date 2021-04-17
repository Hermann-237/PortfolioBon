import React from "react";

function Contact() {
  return (
    <section id="contact" class="contact">
      <div class="container">
        <div class="section-title">
          <h2>Kontakt</h2>
          <p>
            wenn Sie eine schnelle Antwort haben möchten, kontaktieren Sie mich
            bitte am besten per E-Mail oder rufen Sie mich einfach an.
          </p>
        </div>

        <div class="row" data-aos="fade-in">
          <div class="col-lg-12 d-flex align-items-stretch">
            <div class="info">
              <div class="address">
                <i class="icofont-google-map"></i>
                <h4>Adresse:</h4>
                <p>Am Meilenstein 10 , 04159 Leipzig</p>
              </div>

              <div class="email">
                <i class="icofont-envelope"></i>
                <h4>Email:</h4>
                <p>hermann.webdev@gmail.com</p>
              </div>

              <div class="phone">
                <i class="icofont-phone"></i>
                <h4>Handynummer:</h4>
                <p>+49(0)1722846967</p>
              </div>

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2490.4745381018834!2d12.319704716002725!3d51.375955979613764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a65880e0eb79cf%3A0xa23f6f8e754caa57!2sAm%20Meilenstein%2010%2C%2004159%20Leipzig!5e0!3m2!1sfr!2sde!4v1617821763298!5m2!1sfr!2sde"
                frameborder="0"
                style={{ border: "0", width: "100%", height: "290px" }}
                allowfullscreen
                title="hermann-map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
