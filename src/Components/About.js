import React from "react";
import myImage from '../Images/saroj.jpg';


function About() {
  return (
    <div className="about-profile-container">
      <div className="left-profile">
        <div className="profile-image">
          <img src={myImage} className="shadow-xl hover:shadow-2xl" alt="not  rendered" />
        </div>

        <div className="flex relative top-2 left-20">
        <a href="https://github.com/Saroj-Mali">
          <img
            className="github w-16 "
            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
            alt="github"
          />
        </a>
        <a href="https://www.linkedin.com/in/saroj-kumar-b20bb3281/">
          <img
            className="w-12 relative m-1  w-12 top-[4px]"
            src="https://static-00.iconduck.com/assets.00/linkedin-icon-1024x1024-net2o24e.png"
          />
        </a>
        <img
          className="w-[55px] h-[55px] m-1  relative -bottom-[2px] "
          src="https://img.freepik.com/premium-vector/round-instagram-logo-isolated-white-background_469489-898.jpg"
          alt="instagram"
        />
        </div>
        
        
        
      </div>
      <div className="right-profile relative -left-16">
        <h1 className="font-bold text-3xl">About <span className="font-bold text-green-900">Me</span></h1>
        <h3 className="font-bold text-xl text-green-900">Front-end <span className="font-bold text-green-900">Developer</span></h3>
        <h5 className="font-semibold w-[439px]">
          Hii... My name is saroj kumar, pursuing master in computer application
          from lovely professional university(LPU),I have the knowledge of
          technologies such as C, C++, Java, HTMl, CSS, Tailwind-CSS, JavaScript
          and ReactJs and currently I am learning the Back-end Technologies with
          the Nodejs.
        </h5>
        <button className="p-2 border-2 border-green-900 hover:border-green-900 hover:text-green-900 font-bold bg-green-900 hover:bg-white text-white rounded-xl shadow-lg hover:shadow-2xl duration-500">
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
