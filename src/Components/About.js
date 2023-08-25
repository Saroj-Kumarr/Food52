import React from "react";
import myImage from '../Images/saroj.jpg';


function About() {
  return (
    <div className="about-profile-container">
      <div className="left-profile">
        <div className="profile-image">
          <img src={myImage} alt="not  rendered" />
        </div>
        <div>
          <div className="social-media">
            <a href="https://github.com/Saroj-Mali">
              <img
                className="github"
                src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                alt="github"
              />
            </a>
            <a href="https://www.linkedin.com/in/saroj-kumar-b20bb3281/">
              <img
                className="linkedin"
                src="https://static-00.iconduck.com/assets.00/linkedin-icon-1024x1024-net2o24e.png"
              />
            </a>
            <img
              className="insta"
              src="https://img.freepik.com/premium-vector/round-instagram-logo-isolated-white-background_469489-898.jpg"
              alt="instagram"
            />
          </div>
        </div>
      </div>
      <div className="right-profile">
        <h1>About Me</h1>
        <h3>Front-end <span>Developer</span></h3>
        <h5>
          Hii... My name is saroj kumar, pursuing master in computer application
          from lovely professional university(LPU),I have the knowledge of
          technologies such as C, C++, Java, HTMl, CSS, Tailwind-CSS, JavaScript
          and ReactJs and currently I am learning the Back-end Technologies with
          the Nodejs.
        </h5>
        <button className="btn">
          <a
            href="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?q=10&h=200"
            download
          >
            Download CV
          </a>
        </button>
      </div>
    </div>
  );
}

export default About;
