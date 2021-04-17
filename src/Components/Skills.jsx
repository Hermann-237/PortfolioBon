import React from "react";

function Skills() {
  return (
    <section id="skills" className="skills section-bg">
      <div className="container">
        <div className="section-title">
          <h2>Kenntnisse</h2>
          <p>Hier befinden sich alles über meine Fertigkeiten</p>
        </div>

        <div className="row skills-content">
          <div className="col-lg-6" data-aos="fade-up">
            <div className="section-title">
              <h2>Frontend</h2>
            </div>
            <div className="progress">
              <span className="skill">
                REACT & REDUX <i className="val">75%</i>
              </span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar bg-info"
                  role="progressbar"
                  style={{ width: "75%" }}
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">
                JAVASCRIPT <i className="val">85%</i>
              </span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar bg-info"
                  role="progressbar"
                  style={{ width: "85%" }}
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            <div className="progress">
              <span className="skill">
                JQUERY <i className="val">65%</i>
              </span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar bg-info"
                  role="progressbar"
                  style={{ width: "65%" }}
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            <div className="progress">
              <span className="skill">
                BOOTSTRAP <i className="val">85%</i>
              </span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar bg-info"
                  role="progressbar"
                  style={{ width: "85%" }}
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">
                Ejs <i className="val">90%</i>
              </span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar bg-info"
                  role="progressbar"
                  style={{ width: "90%" }}
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            <div className="progress">
              <span className="skill">
                HTML5 & Css3 <i className="val">90%</i>
              </span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar bg-info"
                  role="progressbar"
                  style={{ width: "90%" }}
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>

          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <div className="section-title">
              <h2>Backend</h2>
            </div>
            <div className="progress">
              <span className="skill">
                NODE JS & EXPRESS JS <i className="val">80%</i>
              </span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar bg-info"
                  role="progressbar"
                  style={{ width: "80%" }}
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">
                MONGODB <i className="val">85%</i>
              </span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar bg-info"
                  role="progressbar"
                  style={{ width: "85%" }}
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            <div className="progress">
              <span className="skill">
                MONGOOSE <i className="val">70%</i>
              </span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar bg-info"
                  role="progressbar"
                  style={{ width: "70%" }}
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">
                FIREBASE <i className="val">40%</i>
              </span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar bg-info"
                  role="progressbar"
                  style={{ width: "40%" }}
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
