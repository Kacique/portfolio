import Project1 from "../../Assets/project-1.png";
import Project2 from "../../Assets/project-2.png";
import Project3 from "../../Assets/project-3.png";
import Arrow from "../../Assets/arrow.png";

const Projects = () => {
  return (
    <section id="projects">
      <p class="section__text__p1">Browse My Recent</p>
      <h1 class="title">Projects</h1>
      <div class="experience-details-container">
        <div class="about-containers">
          <div class="details-container color-container">
            <div class="article-container">
              <img src={Project1} alt="Project 1" class="project-img" />
            </div>
            <h2 class="experience-sub-title project-title">Project One</h2>
            <div class="btn-container">
              <button
                class="btn btn-color-2 project-btn"
                onclick="location.href='https://github.com/'"
              >
                Github
              </button>
              <button
                class="btn btn-color-2 project-btn"
                onclick="location.href='https://github.com/'"
              >
                Live Demo
              </button>
            </div>
          </div>
          <div class="details-container color-container">
            <div class="article-container">
              <img src={Project2} alt="Project 2" class="project-img" />
            </div>
            <h2 class="experience-sub-title project-title">Project Two</h2>
            <div class="btn-container">
              <button
                class="btn btn-color-2 project-btn"
                onclick="location.href='https://github.com/'"
              >
                Github
              </button>
              <button
                class="btn btn-color-2 project-btn"
                onclick="location.href='https://github.com/'"
              >
                Live Demo
              </button>
            </div>
          </div>
          <div class="details-container color-container">
            <div class="article-container">
              <img src={Project3} alt="Project 3" class="project-img" />
            </div>
            <h2 class="experience-sub-title project-title">Project Three</h2>
            <div class="btn-container">
              <button
                class="btn btn-color-2 project-btn"
                onclick="location.href='https://github.com/'"
              >
                Github
              </button>
              <button
                class="btn btn-color-2 project-btn"
                onclick="location.href='https://github.com/'"
              >
                Live Demo
              </button>
            </div>
          </div>
        </div>
      </div>
      <img
        src={Arrow}
        alt="Arrow icon"
        className="icon arrow"
        onClick={() => (window.location.href = "./#contact")}
      />
    </section>
  );
};

export default Projects;
