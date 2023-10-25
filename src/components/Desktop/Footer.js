import { Link } from "react-router-dom";

import Email from "../../Assets/email.png";
import LinkedIn from "../../Assets/linkedin.png";

const Footer = () => {
  return (
    <section id="contact">
      <p class="section__text__p1">Get in Touch</p>
      <h1 class="title">Contact Me</h1>
      <div class="contact-info-upper-container">
        <div class="contact-info-container">
          <img
            src={Email}
            alt="Email icon"
            class="icon contact-icon email-icon"
          />
          <p>
            <a href="mailto:wbrandev@gmail.com">wbrandev@gmail.com</a>
          </p>
        </div>
        <div class="contact-info-container">
          <img src={LinkedIn} alt="LinkedIn icon" class="icon contact-icon" />
          <p>
            <a
              href="https://www.linkedin.com/in/william-brand-developer/"
              target="_blank"
            >
              LinkedIn
            </a>
          </p>
        </div>
      </div>
      <footer>
        <nav>
          <div class="nav-links-container">
            <ul class="nav-links">
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#experience">Experience</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <Link to="contact">Contact</Link>
              </li>
            </ul>
          </div>
        </nav>
        <p>Copyright &#169; 2023 William Brand. All Rights Reserved.</p>
      </footer>
    </section>
  );
};

export default Footer;
