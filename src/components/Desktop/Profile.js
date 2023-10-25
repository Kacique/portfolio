import ProfilePic from "../../Assets/me.jpeg";
import linkedin from "../../Assets/linkedin.png";
import github from "../../Assets/github.png";

const Profile = () => {
  return (
    <>
      <section id="profile">
        <div class="section__pic-container">
          <img src={ProfilePic} />
        </div>
        <div class="section__text">
          <p class="section__text__p1">Hello, I'm</p>
          <h1 class="title">William Brand</h1>
          <p class="section__text__p2">Software Developer</p>
          <div id="socials-container">
            <a
              href="https://www.linkedin.com/in/william-brand-developer/"
              target="_blank"
            >
              <img src={linkedin} alt="My Linkedin profile" class="icon" />
            </a>

            <a href="https://github.com/Kacique" target="_blank">
              <img src={github} alt="My Github profile" class="icon" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
