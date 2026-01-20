import React, { useState, useEffect } from "react";
import Typical from "react-typical";
import Switch from "react-switch";

const Home = (props) => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      document.body.setAttribute("data-theme", savedTheme);
      setIsDarkMode(savedTheme === "dark");
    }
  }, []);

  const onThemeSwitchChange = (checked) => {
    const newTheme = checked ? "dark" : "light";
    document.body.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    setIsDarkMode(checked);
  };

  return (
    <header
      id="home"
      style={{ height: window.innerHeight - 75, display: "block" }}
    >
      <div className="row aligner" style={{ height: "100%" }}>
        <div className="col-md-12">
          <div>
            <span
              className="iconify header-icon"
              data-icon="la:laptop-code"
              data-inline="false"
            ></span>
            <br />
            <h1 className="mb-0">Hannah Folk</h1>
            <div className="title-container">
              <Typical
                className="title-styles"
                steps={[
                  "Full Stack Developer",
                  2000,
                  "Software Engineer",
                  2000,
                  "Georgia Tech MSCS '30",
                  2000,
                ]}
                loop={Infinity}
              />
            </div>
            <div style={{ marginTop: "20px" }}>
              <Switch
              checked={isDarkMode}
              onChange={onThemeSwitchChange}
              offColor="#5e89b0"
              onColor="#353535"
              className="react-switch mx-auto"
              width={90}
              height={40}
              aria-label="Toggle dark/light theme"
              uncheckedIcon={
                <span
                  className="iconify"
                  data-icon="twemoji:owl"
                  data-inline="false"
                  style={{
                    display: "block",
                    height: "100%",
                    fontSize: 25,
                    textAlign: "end",
                    marginLeft: "20px",
                    color: "#353239",
                  }}
                ></span>
              }
              checkedIcon={
                <span
                  className="iconify"
                  data-icon="noto-v1:sun-with-face"
                  data-inline="false"
                  style={{
                    display: "block",
                    height: "100%",
                    fontSize: 25,
                    textAlign: "end",
                    marginLeft: "10px",
                    color: "#353239",
                  }}
                ></span>
              }
              id="icon-switch"
            />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Home;
