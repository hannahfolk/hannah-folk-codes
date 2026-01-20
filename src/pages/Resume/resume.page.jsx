import React from "react";

import Timeline from "../../components/Timeline";

const Resume = () => {
  return (
    <section id="resume" className="pb-5">
      <div className="col-md-12 mx-auto" data-aos="fade-up">
        <div className="col-md-12">
          <h1 className="section-title" style={{ color: "black" }}>
            <span className="text-black" style={{ textAlign: "center" }}>
              Resume
            </span>
          </h1>
        </div>
      </div>
      <div className="col-md-8 mx-auto" data-aos="fade-up" data-aos-delay="200">
        <Timeline />
      </div>
    </section>
  );
};

export default Resume;
