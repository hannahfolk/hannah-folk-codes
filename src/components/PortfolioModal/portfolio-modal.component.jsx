import React from "react";
import { Modal } from "react-bootstrap";

const PortfolioModal = (props) => {
  const { onHide, data } = props;
  const { title, image, deployedUrl, githubUrl, description } = data;
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="modal-inside"
    >
      <span onClick={onHide} className="modal-close">
        <i className="fas fa-times fa-3x close-icon"></i>
      </span>
      <div className="col-md-12">
        <div className="col-md-10 mx-auto">
          <div className="modal-tab">
            <span
              className="iconify slider-iconfiy"
              data-icon="emojione:red-circle"
              data-inline="false"
              style={{ marginLeft: "5px" }}
            ></span>
            &nbsp;
            <span
              className="iconify slider-iconfiy"
              data-icon="twemoji:yellow-circle"
              data-inline="false"
            ></span>
            &nbsp;
            <span
              className="iconify slider-iconfiy"
              data-icon="twemoji:green-circle"
              data-inline="false"
            ></span>
          </div>
          {deployedUrl ? (
            <a
              href={deployedUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="link-href"
            >
              <img src={image} alt={title} className="modal-image" />
            </a>
          ) : (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="link-href"
            >
              <img src={image} alt={title} className="modal-image" />
            </a>
          )}
        </div>
        <div className="col-md-10 mx-auto">
          <h3 style={{ padding: "5px 5px 0 5px", marginTop: "10px" }}>
            {title}
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="link-href"
            >
              <i className="fab fa-github" style={{ marginLeft: "10px" }}></i>
            </a>
            {deployedUrl ? (
              <a
                href={deployedUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="link-href"
              >
                <i
                  className="fas fa-external-link-alt"
                  style={{ marginLeft: "10px" }}
                ></i>
              </a>
            ) : (
              ""
            )}
          </h3>
          <p className="modal-description">{description}</p>
        </div>
      </div>
    </Modal>
  );
};

export default PortfolioModal;
