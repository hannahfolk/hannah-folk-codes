import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Badge from "react-bootstrap/Badge";

const Timeline = () => {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        position="right"
        iconStyle={{
          background: "#3c4d5a",
          color: "#fff",
          textAlign: "center",
        }}
        icon={
          <img
            className="vertical-timeline-element-icon"
            src="./images/gt-omscs.jpg"
            alt="Georgia Tech"
          />
        }
      >
        <div style={{ textAlign: "left", marginBottom: "4px" }}>
          Coming up starting August 2026
        </div>
        <h3
          className="vertical-timeline-element-title"
          style={{ textAlign: "left" }}
        >
          Online Master's in Computer Science
        </h3>
        <h4
          className="vertical-timeline-element-subtitle"
          style={{ textAlign: "left" }}
        >
          Georgia Tech
        </h4>
        <p>Specialization in Human-Computer Interaction</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        position="left"
        iconStyle={{
          background: "#3c4d5a",
          color: "#fff",
          textAlign: "center",
        }}
        icon={
          <img
            className="vertical-timeline-element-icon"
            src="./images/fashionphile.png"
            alt="Fashionphile"
          />
        }
      >
        <div style={{ textAlign: "left", marginBottom: "4px" }}>
          August 2023 - Present
        </div>
        <h3
          className="vertical-timeline-element-title"
          style={{ textAlign: "left" }}
        >
          Software Engineer
        </h3>
        <h4
          className="vertical-timeline-element-subtitle"
          style={{ textAlign: "left" }}
        >
          Fashionphile
        </h4>
        <p>
          Building and maintaining e-commerce features for the leading
          pre-owned luxury goods marketplace at{" "}
          <a
            href="https://fashionphile.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            fashionphile.com
          </a>
          .
        </p>
        <div style={{ textAlign: "left", marginTop: "15px" }}>
          <Badge pill className="main-badge mr-2 mb-2">
            TypeScript
          </Badge>
          <Badge pill className="main-badge mr-2 mb-2">
            Shopify Liquid
          </Badge>
          <Badge pill className="main-badge mr-2 mb-2">
            NextJS
          </Badge>
          <Badge pill className="main-badge mr-2 mb-2">
            Algolia
          </Badge>
          <Badge pill className="main-badge mr-2 mb-2">
            GraphQL
          </Badge>
        </div>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        position="right"
        iconStyle={{
          background: "#3c4d5a",
          color: "#fff",
          textAlign: "center",
        }}
        icon={
          <img
            className="vertical-timeline-element-icon"
            src="./images/vuori.png"
            alt="Vuori"
          />
        }
      >
        <div style={{ textAlign: "left", marginBottom: "4px" }}>
          January 2022 - August 2023
        </div>
        <h3
          className="vertical-timeline-element-title"
          style={{ textAlign: "left" }}
        >
          Frontend Engineer
        </h3>
        <h4
          className="vertical-timeline-element-subtitle"
          style={{ textAlign: "left" }}
        >
          Vuori Clothing
        </h4>
        <p>
          Worked on the frontend team building and improving features for{" "}
          <a
            href="https://vuoriclothing.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            vuoriclothing.com
          </a>
          , growing as an engineer while working with React, Shopify, and AWS.
        </p>
        <div style={{ textAlign: "left", marginTop: "15px" }}>
          <Badge pill className="main-badge mr-2 mb-2">
            React
          </Badge>
          <Badge pill className="main-badge mr-2 mb-2">
            Shopify
          </Badge>
          <Badge pill className="main-badge mr-2 mb-2">
            AWS
          </Badge>
          <Badge pill className="main-badge mr-2 mb-2">
            Algolia
          </Badge>
        </div>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        position="left"
        iconStyle={{
          background: "#3c4d5a",
          color: "#fff",
          textAlign: "center",
        }}
        icon={
          <img
            className="vertical-timeline-element-icon"
            src="./images/hearful.png"
            alt="Heareful"
          />
        }
      >
        <div style={{ textAlign: "left", marginBottom: "4px" }}>
          February 2021 - August 2023
        </div>
        <h3
          className="vertical-timeline-element-title"
          style={{ textAlign: "left" }}
        >
          Full Stack Engineer
        </h3>
        <h4
          className="vertical-timeline-element-subtitle"
          style={{ textAlign: "left" }}
        >
          Hearful Hub
        </h4>
        <p>
          Grew and learned a lot at my first full-time job as an engineer,
          coding out Scrapy spiders using Python, and enhancing my React skills
          by building out user interfaces for our clients to interact with the
          data we scraped.
        </p>
        <div style={{ textAlign: "left", marginTop: "15px" }}>
          <Badge pill className="main-badge mr-2 mb-2">
            Python
          </Badge>
          <Badge pill className="main-badge mr-2 mb-2">
            MongoDB
          </Badge>
          <Badge pill className="main-badge mr-2 mb-2">
            React
          </Badge>
          <Badge pill className="main-badge mr-2 mb-2">
            AWS Serverless
          </Badge>
          <Badge pill className="main-badge mr-2 mb-2">
            AWS Amplify
          </Badge>
        </div>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        position="right"
        iconStyle={{
          background: "#3c4d5a",
          color: "#fff",
          textAlign: "center",
        }}
        icon={
          <img
            className="vertical-timeline-element-icon"
            src="./images/curative.png"
            alt="Curative"
          />
        }
      >
        <div style={{ textAlign: "left", marginBottom: "4px" }}>
          November 2021 - March 2022
        </div>
        <h3
          className="vertical-timeline-element-title"
          style={{ textAlign: "left" }}
        >
          Contract Frontend Engineer
        </h3>
        <h4
          className="vertical-timeline-element-subtitle"
          style={{ textAlign: "left" }}
        >
          Curative
        </h4>
        <p>
          Redesigned portions of{" "}
          <a
            href="https://curative.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            curative.com
          </a>{" "}
          as needed and aided in their migration to Contentful.
        </p>
        <div style={{ textAlign: "left", marginTop: "15px" }}>
          <Badge pill className="main-badge mr-2 mb-2">
            React
          </Badge>
          <Badge pill className="main-badge mr-2 mb-2">
            Contentful
          </Badge>
          <Badge pill className="main-badge mr-2 mb-2">
            Styled Components
          </Badge>
        </div>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        position="left"
        iconStyle={{
          background: "#3c4d5a",
          color: "#fff",
          textAlign: "center",
        }}
        icon={
          <img
            className="vertical-timeline-element-icon"
            src="./images/trilogy.png"
            alt="Trilogy Education"
          />
        }
      >
        <div style={{ textAlign: "left", marginBottom: "4px" }}>
          March 2020 - May 2022
        </div>
        <h3
          className="vertical-timeline-element-title"
          style={{ textAlign: "left" }}
        >
          Senior Tutor
        </h3>
        <h4
          className="vertical-timeline-element-subtitle"
          style={{ textAlign: "left" }}
        >
          Trilogy Education
        </h4>
        <p>
          Tutored students in full stack web development, solidifying concepts
          and discovering new things while working with students from a variety
          of skill levels and backgrounds.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        position="right"
        iconStyle={{
          background: "#3c4d5a",
          color: "#fff",
          textAlign: "center",
        }}
        icon={
          <img
            className="vertical-timeline-element-icon"
            src="./images/teefury-bird.jpg"
            alt="Teefury Bird"
          />
        }
      >
        <div style={{ textAlign: "left", marginBottom: "4px" }}>
          May 2020 - October 2020
        </div>
        <h3
          className="vertical-timeline-element-title"
          style={{ textAlign: "left" }}
        >
          Software Developer Intern
        </h3>
        <h4
          className="vertical-timeline-element-subtitle"
          style={{ textAlign: "left" }}
        >
          Teefury
        </h4>
        <p>
          Added features to Teefury's{" "}
          <a href="http://artists.teefury.com" target="_blank" rel="noopener noreferrer">Artist Dashboard</a>, working
          in React, MySQL, and Express.
        </p>
        <div style={{ textAlign: "left", marginTop: "15px" }}>
          <Badge pill className="main-badge mr-2 mb-2">
            React
          </Badge>
          <Badge pill className="main-badge mr-2 mb-2">
            MySQL
          </Badge>
          <Badge pill className="main-badge mr-2 mb-2">
            Express
          </Badge>
        </div>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        position="left"
        iconStyle={{
          background: "#3c4d5a",
          color: "#fff",
          textAlign: "center",
        }}
        icon={
          <img
            className="vertical-timeline-element-icon"
            src="./images/ucla-extension.png"
            alt="UCLA Extension"
          />
        }
      >
        <div style={{ textAlign: "left", marginBottom: "4px" }}>
          September 2019 - March 2020
        </div>
        <h3
          className="vertical-timeline-element-title"
          style={{ textAlign: "left" }}
        >
          Full Stack Web Development Bootcamp
        </h3>
        <h4
          className="vertical-timeline-element-subtitle"
          style={{ textAlign: "left" }}
        >
          UCLA Extension
        </h4>
        <p>24-week intensive program</p>
        <div style={{ textAlign: "left", marginTop: "15px" }}>
          <Badge pill className="main-badge mr-2 mb-2">
            HTML
          </Badge>
          <Badge pill className="main-badge mr-2 mb-2">
            CSS
          </Badge>
          <Badge pill className="main-badge mr-2 mb-2">
            Bootstrap
          </Badge>
          <Badge pill className="main-badge mr-2 mb-2">
            Javascript
          </Badge>
          <Badge pill className="main-badge mr-2 mb-2">
            jQuery
          </Badge>
          <Badge pill className="main-badge mr-2 mb-2">
            RESTful APIs
          </Badge>
          <Badge pill className="main-badge mr-2 mb-2">
            Node
          </Badge>
          <Badge pill className="main-badge mr-2 mb-2">
            Express
          </Badge>
          <Badge pill className="main-badge mr-2 mb-2">
            MySQL
          </Badge>
          <Badge pill className="main-badge mr-2 mb-2">
            MongoDB
          </Badge>
          <Badge pill className="main-badge mr-2 mb-2">
            React
          </Badge>
        </div>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        position="right"
        iconStyle={{
          background: "#3c4d5a",
          color: "#fff",
          textAlign: "center",
        }}
        icon={
          <img
            className="vertical-timeline-element-icon"
            src="./images/wb-logo.png"
            alt="Warner Bros"
          />
        }
      >
        <div style={{ textAlign: "left", marginBottom: "4px" }}>
          June 2019 - May 2019
        </div>
        <h3
          className="vertical-timeline-element-title"
          style={{ textAlign: "left" }}
        >
          Studio Tour Guide
        </h3>
        <h4
          className="vertical-timeline-element-subtitle"
          style={{ textAlign: "left" }}
        >
          Warner Bros. Studios
        </h4>
        <p>
          Led studio tours for groups of 14, visiting filming locations for
          movies, TV shows, and commercials while sharing the history of the
          studio. Developed strong public speaking and interpersonal skills.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        position="left"
        iconStyle={{
          background: "#3c4d5a",
          color: "#fff",
          textAlign: "center",
        }}
        icon={
          <img
            className="vertical-timeline-element-icon"
            src="./images/grad-photo.jpg"
            alt="Graduation"
          />
        }
      >
        <div style={{ textAlign: "left", marginBottom: "4px" }}>June 2019</div>

        <h3
          className="vertical-timeline-element-title"
          style={{ textAlign: "left" }}
        >
          Graduation!
        </h3>
        <h4
          className="vertical-timeline-element-subtitle"
          style={{ textAlign: "left" }}
        >
          UC San Diego
        </h4>
        <p>
          BS in Math/Economics <br /> BA in Theatre
        </p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
};

export default Timeline;
