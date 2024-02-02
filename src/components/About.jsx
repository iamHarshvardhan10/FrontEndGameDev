import { useState } from "react";
import aboutImage from "../assests/asset 11.jpeg";
import { acordion } from "../utils/api";
import Projects from "./Projects";

const About = () => {
  const [show, setShow] = useState(Array(acordion.length).fill(false));

  const handleAccordion = (index) => {
    const newShow = [...show];
    newShow[index] = !newShow[index]
    setShow(newShow)
  }

  return (
    <div className="about_container">
      <div className="container">
        <div className="left_about_section">
          <span>About us</span>
          <h1>
            We are a team of super artists ut interdum nunc, vel pretium ligula.
          </h1>
          <p>
            Vestibulum sapien nisl, auctor vel feugiat et, pellentesque vitae
            arcu. Phasellus accumsan quis dui non tempus. Aenean venenatis
            malesuada quam quis posuere.
          </p>
          <button>Read more</button>
        </div>
        <div className="right_about_section">
          <img src={aboutImage} alt="" />
        </div>
      </div>

      <div className="platform_container">
        <span>popular platforms</span>
        <h1>
          We develop games for the most phasellus ut interdum nunc, vel pretium
          ligula nam tincidunt enim ut ligula vehicula non.
        </h1>
        <div className="acordion">
          {acordion.map((acc,index) => {
            return (
              <div
                style={{ borderBottom: "1px solid grey" }}
                key={acc.id}
              >
                <div className="accordion_container" onClick={() => handleAccordion(index)}>
                  <h1>{acc.name}</h1>
                  <span >{show[index] ? 'v' : '^'}</span>
                </div>
                {show[index] && <p>{acc.desciption}</p>}
              </div>
            );
          })}
        </div>
      </div>
      <Projects/>
    </div>
  );
};

export default About;
