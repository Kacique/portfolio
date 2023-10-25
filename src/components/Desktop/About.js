import AboutMe from "../../Assets/about-pic.jpg";
import Arrow from "../../Assets/arrow.png";
import Experience from "../../Assets/experience.png";

const About = () => {
  return (
    <section id="about">
      <p class="section__text__p1">Get To Know More</p>
      <h1 class="title">About Me</h1>
      <div class="section-container">
        <div class="section__pic-container">
          <img src={AboutMe} alt="Profile picture" class="about-pic" />
        </div>
        <div class="about-details-container">
          <div class="about-containers">
            <div class="details-container">
              <img src={Experience} alt="Experience icon" class="icon" />
              <h3>Experience</h3>
              <p>
                2+ years <br />
                Mobile Development
              </p>
            </div>
          </div>
          <div class="text-container">
            <p>
              I am a mobile app developer with experience building both web and
              mobile applications. Currently, I'm working as a freelancer. I'm
              familiar with a variety of programming languages, including Swift,
              SwiftUI, JavaScript, HTML, CSS, React, Wordpress, Node, and
              MongoDB.
            </p>
          </div>
        </div>
      </div>
      <img
        src={Arrow}
        alt="Arrow icon"
        className="icon arrow"
        onClick={() => (window.location.href = "./#experience")}
      />
    </section>
  );
};

export default About;
