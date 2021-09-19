import LightWave from "../Waves/LightWave";
import { NavHashLink } from "react-router-hash-link";
import { useEffect } from "react";
import Aos from "aos";
import "./About.css";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section id="about" className="about">
      <div data-aos="fade-right" className="about__text">
        <h2 className="about__heading">About Me</h2>
        <p className="about__body">
          Hello! My name is Suryaprakash and I am a second-year Computer Science
          Student attending the{" "}
          <span className="about__specialText">Annamalai University.</span>{" "}
          Currently, I am very interested in{" "}
          <span className="about__specialText">Pentesting</span>, trying to
          Secure the webapps. I am also extremely interested in{" "}
          <span className="about__specialText">Cloud Engineering</span>,
          Handle Cloud Platform, like GCP,AZURE,AWS.
        </p>
        <br />
        <p className="about__body">
          You can reach out to me on my{" "}
          <NavHashLink className="about__specialText" smooth to="#contact">
            contact
          </NavHashLink>{" "}
          page
        </p>
      </div>
      <img
        className="about__headshot"
        src="/images/500.png"
        alt="Brand Logo"
        width="300"
        height="300"
      />
      <LightWave />
    </section>
  );
}

export default About;
