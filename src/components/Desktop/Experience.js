import ReactNative from "../../Assets/react-native-logo.png";
import JavaScript from "../../Assets/javascript-logo.png";
import SwiftUI from "../../Assets/swiftui-logo.png";
import Swift from "../../Assets/swift-logo.png";
import Wordpress from "../../Assets/wordpress-icon.png";
import Arrow from "../../Assets/arrow.png";

const Experience = () => {
  return (
    <section id="experience">
      <p class="section__text__p1">Explore My</p>
      <h1 class="title">Experience</h1>
      <div class="experience-details-container">
        <div class="about-containers">
          <div class="details-container">
            <h2 class="experience-sub-title">Mobile / Web Development</h2>
            <div class="article-container">
              <article>
                <img src={Swift} alt="Experience icon" class="icon" />
                <div>
                  <h3>Swift</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img src={SwiftUI} alt="Experience icon" class="icon" />
                <div>
                  <h3>SwiftUI</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img src={ReactNative} alt="Experience icon" class="icon" />
                <div>
                  <h3>React Native</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img src={JavaScript} alt="Experience icon" class="icon" />
                <div>
                  <h3>JavaScript</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <img src={Wordpress} alt="Experience icon" class="icon" />
                <div>
                  <h3>Wordpress</h3>
                  <p>Experienced</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
      <img
        src={Arrow}
        alt="Arrow icon"
        className="icon arrow"
        onClick={() => (window.location.href = "./#projects")}
      />
    </section>
  );
};

export default Experience;
