import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="col-md-12">
        <div className="social-links">
          <span className="m-4">
            <a
              href="https://www.linkedin.com/in/hannahfolk"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
            >
              <i className="fab fa-linkedin" aria-hidden="true"></i>
            </a>
          </span>
          <span className="m-4">
            <a
              href="https://www.github.com/hannahfolk"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
            >
              <i className="fab fa-github" aria-hidden="true"></i>
            </a>
          </span>
          <span className="m-4">
            <a
              href="https://www.twitter.com/hannahfolk"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter Profile"
            >
              <i className="fab fa-twitter" aria-hidden="true"></i>
            </a>
          </span>
        </div>

        <div className="copyright py-4 text-center">
          <div className="container">
            <small>Copyright &copy; Hannah Folk</small>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
