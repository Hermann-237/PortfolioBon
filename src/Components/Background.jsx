import React from "react";
import Particles from "react-particles-js";
import Typed from "react-typed";

function Background() {
  return (
    <div id="hero">
      <section class="d-flex flex-column justify-content-center align-items-center">
        <div class="hero-container" data-aos="fade-in">
          <div>
            <Typed
              strings={["Hallo! Ich bin Hermann"]}
              style={{ color: "white", fontSize: "50px" }}
            />
            <br />
            <Typed
              strings={[
                "Ich bin ein Full Stack Developer",
                "Ich bin zuverlässig ",
                "Ich bin hilfsbereit",
                "Ich habe eine schnelle Auffassungsgabe ",
              ]}
              typeSpeed={40}
              backSpeed={50}
              loop
              style={{ color: "white", fontSize: "30px" }}
            />
            <br />
          </div>
        </div>
      </section>
      <Particles
        params={{
          particles: {
            number: {
              value: 200,
            },
            size: {
              value: 5,
            },
          },
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "repulse",
              },
            },
          },
        }}
        height="70vh"
      />
    </div>
  );
}

export default Background;
