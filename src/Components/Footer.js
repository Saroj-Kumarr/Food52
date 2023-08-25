// Footer component for footer section
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      <div className="social-mediaa">
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
      Created By :<i className="fa-solid fa-heart"></i>
      <a
        href="https://github.com/Saroj-Mali"
        target="_blank"
        title="Saroj-Mali"
      >
        Saroj-Mali
      </a>
      <i className="fa-solid fa-copyright"></i>
      {year}
      <strong>
        Eco-<span>Food</span>
      </strong>
    </div>
  );
};

export default Footer;
