import React, { useCallback } from "react";
import Particles from "react-particles";
import Typed from "react-typed";
import { loadFull } from "tsparticles";

function Background() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    //do nothing
  }, []);
  return (
    <div id="hero">
      <section className="d-flex flex-column justify-content-center align-items-center">
        <div className="hero-container" data-aos="fade-in">
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
        init={particlesInit}
        loaded={particlesLoaded}
        params={{
          particles: {
            number: {
              value: 50,
              density: {
                enable: true,
                /* value_area: 500, */
              },
            },
            color: {
              value: "#25f",
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
                color: "#000000",
              },
              polygon: {
                nb_sides: 5,
              },
              image: {
                src: "img/github.svg",
                width: 200,
                height: 100,
              },
            },
            opacity: {
              value: 0.5,
              random: false,
              anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
              },
            },
            size: {
              value: 10,
              random: true,
              anim: {
                enable: false,
                speed: 10,
                size_min: 0.1,
                sync: false,
              },
            },
            line_linked: {
              enable: true,
              distance: 300,
              color: "#ffffff",
              opacity: 0.4,
              width: 2,
            },
            move: {
              enable: true,
              speed: 2,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 100,
                rotateY: 200,
              },
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: true,
                mode: "repulse",
              },
              onclick: {
                enable: true,
                mode: "push",
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 800,
                line_linked: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 800,
                size: 80,
                duration: 2,
                opacity: 0.8,
                speed: 0.2,
              },
              repulse: {
                distance: 400,
                duration: 0.4,
              },
              push: {
                particles_nb: 4,
              },
              remove: {
                particles_nb: 2,
              },
            },
          },
          retina_detect: true,
        }}
        height="70vh"
      />
    </div>
  );
}

export default Background;
