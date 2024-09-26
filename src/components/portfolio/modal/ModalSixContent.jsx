import React from "react";
import { FormattedMessage } from 'react-intl'

const ModalSixContent = () => {
  return (
    <div className="slideshow">
      <figure>
        {/* Project Details Starts */}
        <figcaption>
          <h3>Oracle Certified Professional</h3>
          <div className="row open-sans-font">
            <div className="col-12 col-sm-12 mb-2">
              <i className="fa fa-file-text-o pr-2"></i>
              <span className="project-label"> <FormattedMessage
                description="modalFiveItem1"
                id="Modalfive.item1"
                defaultMessage="Concentration: "
              /></span>:{" "}
              <span className="ft-wt-600 uppercase">Java SE 8</span>
            </div>
            {/* End .col */}

            {/* <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-user-o pr-2"></i>
              <span className="project-label">Client </span>:{" "}
              <span className="ft-wt-600 uppercase">Envato</span>
            </div> */}
            {/* End .col */}

            {/* <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-code pr-2"></i>
              <span className="project-label">Langages </span>:{" "}
              <span className="ft-wt-600 uppercase">HTML, CSS, Javascript</span>
            </div> */}
            {/* End .col */}

            {/* <div className="col-12 col-sm-12 mb-2">
              <i className="fa fa-external-link pr-2"></i>
              <span className="project-label"><FormattedMessage
                description="modalOneItem2"
                id="Modalone.item2"
                defaultMessage="Verify At:"
              /> </span>:{" "}
              <span className="ft-wt-600 uppercase">
                <a
                  href="https://www.certmetrics.com/comptia/public/verification.aspx/"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://www.certmetrics.com/comptia/public/verification.aspx/
                </a>
              </span>
            </div> */}
            {/* End .col */}
          </div>
          {/* End .row */}
        </figcaption>
        {/* Project Details Ends */}

        {/*  Main Project Content Starts */}
        <img src="img/projects/OCP.jpg" alt="Portolio" />
        {/* <div className="position-relative" style={{ paddingBottom: '56.25%', height: 0 }}>
                  <iframe title="Paper Presentation" src="https://www.youtube.com/embed/B6Pz5kr8Fbo" 
                  referrerPolicy="strict-origin-when-cross-origin" webkitallowfullscreen="true" mozallowfullscreen="true" 
                  allowFullScreen className="position-absolute" style={{top: 0, left: 0, width: '100%', height: '100%'}}>
                  </iframe> 
                </div>*/}
        {/* Main Project Content Ends */}
      </figure>
    </div>
    //  End .slideshow
  );
};

export default ModalSixContent;
