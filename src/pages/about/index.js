import React from "react";

export default function About() {
  return (
    <section>
      <div>
        <div>
          <h1 className="large">Merin Mary Philip</h1>
          <p className="lead">Systems Engineer at Infosys</p>
        </div>

        <div>
          <h2 className="text-secondary">Skill Set</h2>
          <div className="skills">
            <div className="p-1">
              <i className="fa fa-check"></i> HTML
            </div>
            <div className="p-1">
              <i className="fa fa-check"></i> CSS
            </div>
            <div className="p-1">
              <i className="fa fa-check"></i> JavaScript
            </div>
            <div className="p-1">
              <i className="fa fa-check"></i> React
            </div>
          </div>
        </div>

        <div className="profile-exp bg-white p-2">
          <h2 className="text-secondary">Experience</h2>
          <div>
            <h3 className="text-dark">Infosys</h3>
            <p>July 2021 - Current</p>
            <p>
              <strong>Position: </strong>System Engineer
            </p>
            <p>
              <strong>Description: </strong>React Developer
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-secondary">Education</h2>
          <div>
            <h3>Marian Engineering College</h3>
            <p>2015 - 2019</p>
            <p>
              <strong>Degree: </strong>B.Tech
            </p>
            <p>
              <strong>Field Of Study: </strong>Computer Science Engineering
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
