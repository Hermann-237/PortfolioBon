import React from "react";
import Typed from "react-typed";

function FirstSection() {
  return (
    <section
      id="hero"
      class="d-flex flex-column justify-content-center align-items-center"
    >
      <div class="hero-container" data-aos="fade-in">
        <div>
          <Typed
            strings={["Hey! Ich bin Hermann"]}
            style={{ color: "white", fontSize: "50px" }}
          />
          <br />
          <Typed
            strings={["Ich bin ein Full Stack Developer", "Ich bin motiviert"]}
            typeSpeed={80}
            backSpeed={50}
            loop
            style={{ color: "white", fontSize: "30px" }}
          />
          <br />
        </div>
      </div>
    </section>
  );
}

export default FirstSection;
