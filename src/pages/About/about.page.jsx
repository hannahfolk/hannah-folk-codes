import React from "react";
import { Icon } from "@iconify/react";
import nextjsIcon from "@iconify-icons/logos/nextjs-icon";
import graphqlIcon from "@iconify-icons/logos/graphql";
import mongodbIcon from "@iconify-icons/logos/mongodb-icon";

const About = () => {
  return (
    <section id="about">
      <div className="col-md-12" data-aos="fade-up">
        <h1 style={{ color: "black" }}>
          <span>About Me</span>
        </h1>
        <div className="row center mx-auto mb-5">
          <div className="col-md-8 center">
            <div className="col-md-10">
              <div className="card">
                <div className="card-header" aria-hidden="true">
                  <span
                    className="iconify"
                    data-icon="emojione:red-circle"
                    data-inline="false"
                  ></span>
                  &nbsp;
                  <span
                    className="iconify"
                    data-icon="twemoji:yellow-circle"
                    data-inline="false"
                  ></span>
                  &nbsp;
                  <span
                    className="iconify"
                    data-icon="twemoji:green-circle"
                    data-inline="false"
                  ></span>
                </div>
                <div
                  className="card-body font-trebuchet text-justify ml-3 mr-3"
                  style={{
                    height: "auto",
                    fontSize: "132%",
                    lineHeight: "200%",
                  }}
                >
                  <br />
                  <span className="wave">👋 Hello there! :)</span>
                  <br />
                  <br />
                  I'm Hannah Folk, a full stack web developer at Fashionphile
                  based in Los Angeles, CA. I graduated from UC San Diego with a
                  degree in Mathematics, and this fall I'll be heading to
                  Georgia Tech to pursue a Master's in Computer Science.
                  <br />
                  <br />
                  I love building seamless user experiences and working across
                  the entire stack. My favorite technologies to work with are
                  NextJS, GraphQL, and MongoDB.
                  <br />
                  <br />
                  When I'm not coding, I train wushu (Chinese martial arts),
                  play games with friends, and sing my heart out to a myriad of
                  Disney songs.
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-5 center">
            <div className="polaroid">
              <span style={{ cursor: "auto" }}>
                <img
                  src="./images/new-york.jpeg"
                  alt="New York"
                />

                <Icon
                  icon={nextjsIcon}
                  style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                  aria-label="NextJS"
                  role="img"
                />
                <Icon
                  icon={graphqlIcon}
                  style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                  aria-label="GraphQL"
                  role="img"
                />
                <Icon
                  icon={mongodbIcon}
                  style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                  aria-label="MongoDB"
                  role="img"
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
