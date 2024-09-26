import React from "react";
import { FormattedMessage } from 'react-intl'

const ModalSixteenContent = () => {
  return (
    <div className="slideshow">
       <figure>
        {/* Project Details Starts */}
        <figcaption>
          <h3>Native file picker</h3>
          <div className="row open-sans-font">
          <div className="col-12 col-sm-12 mb-2">
              <i className="fa fa-external-link pr-2"></i>
              <span className="project-label"><FormattedMessage
                description="modalOneItem2"
                id="Modalone.item2"
                defaultMessage="Link"
              /> </span>:{" "}
              <span className="ft-wt-600 uppercase">
                <a
                  href="https://github.com/hinddeep/capacitor-file-selector"
                  target="_blank"
                  rel="noreferrer"
                >
                 https://github.com/hinddeep/capacitor-file-selector
                </a>
              </span>
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

            <div className="col-12 col-sm-12 mb-2">
              <i className="fa fa-external-link pr-2"></i>
              <span className="project-label"><FormattedMessage
                description="modalOneItem2"
                id="Modalone.item2"
                defaultMessage="Link"
              /> </span>:{" "}
              <span className="ft-wt-600 uppercase">
                <a
                  href="https://medium.com/@hinddeep.purohit007/picking-files-in-capacitor-apps-a82c67384496"
                  target="_blank"
                  rel="noreferrer"
                >
                 https://medium.com/@hinddeep.purohit007/picking-files-in-capacitor-apps-a82c67384496
                </a>
              </span>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}
        </figcaption>
        {/* Project Details Ends */}

        {/*  Main Project Content Starts */}
        {/* <img src="img/projects/project-1.jpg" alt="Portolio" /> */}
        <img src="img/projects/file_picker.jpg" alt="File Picker" />
       {/* <div className="position-relative" style={{ paddingBottom: '56.25%', height: 0 }}>
           <iframe title="Tutorials" src="https://hinddeep.github.io/ionicCapacitorDarkMode"
            referrerPolicy="strict-origin-when-cross-origin" webkitallowfullscreen="true" mozallowfullscreen="true"
            allowFullScreen className="position-absolute" style={{ top: 0, left: 0, width: '100%', height: '100%' }}
          >
          </iframe> 
        </div>*/}
        {/* Main Project Content Ends */}
      </figure>
    </div>
    //  End .slideshow
  );
};

export default ModalSixteenContent;
