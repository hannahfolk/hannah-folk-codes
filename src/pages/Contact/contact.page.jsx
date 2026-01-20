import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Contact = () => {
  const [status, setStatus] = useState("");

  const submitForm = (event) => {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        setStatus("SUCCESS");
      } else {
        setStatus("ERROR");
      }
    };
    xhr.send(data);
  };

  return (
    <section id="contact">
      <div className="col-md-12" data-aos="fade-up">
        <h1 style={{ color: "black" }}>
          <span>Contact</span>
        </h1>
        <div className="row center mx-auto mb-5">
          <div className="col-md-8 center" data-aos="fade-up" data-aos-delay="200">
            <Form
              id="contact-form"
              onSubmit={submitForm}
              action="https://formspree.io/f/mjvpdbyw"
              method="POST"
            >
              <Form.Group controlId="name-group">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  name="name"
                  type="text"
                  placeholder="e.g. John Smith"
                  required
                  aria-required="true"
                />
              </Form.Group>
              <Form.Group controlId="email-group">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  name="email"
                  type="email"
                  placeholder="johnsmith@example.com"
                  required
                  aria-required="true"
                />
              </Form.Group>
              <Form.Group controlId="message-group">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  name="message"
                  as="textarea"
                  rows={5}
                  required
                  aria-required="true"
                />
              </Form.Group>
              <Button
                id="contact-form-button"
                type="submit"
                variant="outline-light"
              >
                Submit
              </Button>
              <div id="formspree-div">
                Powered by{" "}
                <a
                  href="https://formspree.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Formspree
                </a>
              </div>
              <div aria-live="polite" role="status">
                {status === "SUCCESS" && <p>Thanks! Your message has been sent.</p>}
                {status === "ERROR" && <p>Oops! There was an error. Please try again.</p>}
              </div>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
