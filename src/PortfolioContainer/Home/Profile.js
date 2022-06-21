import React from "react";
import Typical from "react-typical";
import "./Profile.css";

export default function Profile() {
  return (
    <><div className="profile-container">
      <div className="profile-parent">
        <div className="profile-info">
          <div className="profile-name">
            <h1>
              <span className="texto"> Hello, my name is </span>
            </h1>
          </div>
          <div className="profile-name2">
            <h2>
              <span className="minombre">Gerard Álvarez Izquierdo</span>
            </h2>
          </div>
          <div className="profile-efecto">
            <span>
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Software developer",
                    1000,
                    "Engineering student",
                    1000,
                    "Nice guy ;)",
                    1000,
                    "Maricona",
                    1000,
                  ]} />
              </h1>
            </span>
          </div>
          <div>
            <p className="desc">
              I’m a software engineer specializing in building (and occasionally
              designing) exceptional digital experiences. Currently, I’m focused
              on building accessiblddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
              dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
              ddddddddddddddddddddddddddddddddddde.{" "}
            </p>
          </div>
        </div>
      </div>
      <div class='light x1'></div><div class='light x2'></div><div class='light x3'></div><div class='light x4'></div><div class='light x5'></div><div class='light x6'></div><div class='light x7'></div><div class='light x8'></div><div class='light x9'></div>
    </div></>
  );
}
