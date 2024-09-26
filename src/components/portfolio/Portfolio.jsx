import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Modal from "react-modal";
import ModalOneContent from "./modal/ModalOneContent";
import ModalTwoContent from "./modal/ModalTwoContent";
import ModalThreeContent from "./modal/ModalThreeContent";
import ModalFourContent from "./modal/ModalFourContent";
import ModalFiveContent from "./modal/ModalFiveContent";
import ModalSixContent from "./modal/ModalSixContent";
import ModalSevenContent from "./modal/ModalSevenContent";
import ModalEightContent from "./modal/ModalEightContent";
import ModalNineContent from "./modal/ModalNineContent";
import ModalTenContent from "./modal/ModalTenContent";
import ModalElevenContent from "./modal/ModalElevenContent";
import ModalTwelveContent from "./modal/ModalTwelveContent";
import ModalThirteenContent from "./modal/ModalThirteenContent";
import ModalFourteenContent from "./modal/ModalFourteenContent";
import ModalFifteenContent from "./modal/ModalFifteenContent";
import ModalSixteenContent from "./modal/ModalSixteenContent";
import ModalSeventeenContent from "./modal/ModalSeventeenContent";
import ModalEighteenContent from "./modal/ModalEighteenContent";
import ModalNineteenContent from "./modal/ModalNineteenContent";
import ModalTwentyContent from "./modal/ModalTwentyContent";
import ModalTwentyThreeContent from "./modal/ModalTwentyThreeContent";
import ModalTwentyFourContent from "./modal/ModalTwentyFourContent";
import { FormattedMessage } from 'react-intl'

const Portfolio = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);
  const [isOpen7, setIsOpen7] = useState(false);
  const [isOpen8, setIsOpen8] = useState(false);
  const [isOpen9, setIsOpen9] = useState(false);
  const [isOpen10, setIsOpen10] = useState(false);
  const [isOpen11, setIsOpen11] = useState(false);
  const [isOpen12, setIsOpen12] = useState(false);
  const [isOpen13, setIsOpen13] = useState(false);
  const [isOpen14, setIsOpen14] = useState(false);
  const [isOpen15, setIsOpen15] = useState(false);
  const [isOpen16, setIsOpen16] = useState(false);
  const [isOpen17, setIsOpen17] = useState(false);
  const [isOpen18, setIsOpen18] = useState(false);
  const [isOpen19, setIsOpen19] = useState(false);
  const [isOpen20, setIsOpen20] = useState(false);
  const [isOpen23, setIsOpen23] = useState(false);
  const [isOpen24, setIsOpen24] = useState(false);

  function toggleModalOne() {
    setIsOpen(!isOpen);
  }
  function toggleModalTwo() {
    setIsOpen2(!isOpen2);
  }
  function toggleModalThree() {
    setIsOpen3(!isOpen3);
  }
  function toggleModalFour() {
    setIsOpen4(!isOpen4);
  }
  function toggleModalFive() {
    setIsOpen5(!isOpen5);
  }
  function toggleModalSix() {
    setIsOpen6(!isOpen6);
  }
  function toggleModalSeven() {
    setIsOpen7(!isOpen7);
  }
  function toggleModalEight() {
    setIsOpen8(!isOpen8);
  }
  function toggleModalNine() {
    setIsOpen9(!isOpen9);
  }
  function toggleModalTen() {
    setIsOpen10(!isOpen10);
  }
  function toggleModalEleven() {
    setIsOpen11(!isOpen11);
  }
  function toggleModalTwelve() {
    setIsOpen12(!isOpen12);
  }
  function toggleModalThirteen() {
    setIsOpen13(!isOpen13);
  }
  function toggleModalFourteen() {
    setIsOpen14(!isOpen14);
  }
  function toggleModalFifteen() {
    setIsOpen15(!isOpen15);
  }
  function toggleModalSixteen() {
    setIsOpen16(!isOpen16);
  }
  function toggleModalSeventeen() {
    setIsOpen17(!isOpen17);
  }
  function toggleModalEighteen() {
    setIsOpen18(!isOpen18);
  }
  function toggleModalNineteen() {
    setIsOpen19(!isOpen19);
  }
  function toggleModalTwenty() {
    setIsOpen20(!isOpen20);
  }
  function toggleModalTwentyThree() {
    setIsOpen23(!isOpen23);
  }
  function toggleModalTwentyFour() {
    setIsOpen24(!isOpen24);
  }

  const getClassNames = () => {
    let classNames = 'custom-modal'; // Base class

    const darkTheme = document.getElementById('darktheme').classList.contains('visible');
    console.log(darkTheme);
    // Check if the display is 'block' or 'none'

    if (darkTheme) {
      classNames += ' dark';
      classNames += ' yellow';

    } else {
      classNames += ' green';
    }

    return classNames;
  };

  return (
    <Tabs>
      <TabList className="portfolio-tab-list">
        <Tab><FormattedMessage
          description="portfolioItem1"
          id="Address.portfolioItem1"
          defaultMessage="Research"
        /> </Tab>
        <Tab><FormattedMessage
          description="portfolioItem2"
          id="Address.portfolioItem2"
          defaultMessage="Mobile Apps"
        /></Tab>
        <Tab><FormattedMessage
          description="portfolioItem3"
          id="Address.portfolioItem3"
          defaultMessage="Certificates"
        /></Tab>
        <Tab><FormattedMessage
          description="portfolioItem4"
          id="Address.portfolioItem4"
          defaultMessage="YouTube"
        /></Tab>
        <Tab><FormattedMessage
          description="portfolioItem5"
          id="Address.portfolioItem5"
          defaultMessage="GitHub"
        /></Tab>
        {/* <Tab>LOGO</Tab>
        <Tab>VIDEO</Tab>
        <Tab>GRAPHIC DESIGN</Tab>
        <Tab>MOCKUP</Tab> */}
      </TabList>

      <div className="portfolio-tab-content">
        <TabPanel>
          <ul className="row grid justify-content-center">
            <li
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="0"
            >
              <figure onClick={toggleModalOne}>
                <img src="img/projects/ICT4SD_2020.png" alt="Portolio" />
                <div className=" hover-content-wrapper">
                  <span className="content-title">ICT4SD 2020</span>
                </div>
              </figure>

              {/* Start ModalOneContent */}
              <Modal
                isOpen={isOpen}
                onRequestClose={toggleModalOne}
                contentLabel="ICT4SD 2020"
                // className="custom-modal dark"
                className={getClassNames()}
                overlayClassName="custom-overlay"
                closeTimeoutMS={500}
              >
                <div>
                  <button className="close-modal" onClick={toggleModalOne}>
                    <img src="/img/cancel.svg" alt="close icon" />
                  </button>
                  {/* End close icon */}

                  <div className="box_inner portfolio">
                    <ModalOneContent />
                  </div>
                </div>
              </Modal>
              {/* End  ModalOneContent */}
            </li>
            {/* <!-- Portfolio Item Ends --> */}

            {/* <!-- Portfolio Item Starts --> */}
            <li
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="100"
            >
              <figure onClick={toggleModalTwentyThree}>
                <img src="img/projects/5g.jpg" alt="Portolio" />
                <div className=" hover-content-wrapper">
                  <span className="content-title"> 5GFiver </span>
                </div>
              </figure>

              {/* Start ModalTwentyOneContent */}
              <Modal
                isOpen={isOpen23}
                onRequestClose={toggleModalTwentyThree}
                contentLabel="My dialog"
                // className="custom-modal dark"
                className={getClassNames()}
                overlayClassName="custom-overlay"
                closeTimeoutMS={500}
              >
                <div>
                  <button className="close-modal" onClick={toggleModalTwentyThree}>
                    <img src="/img/cancel.svg" alt="close icon" />
                  </button>
                  {/* End close icon */}

                  <div className="box_inner portfolio">
                    <ModalTwentyThreeContent />
                  </div>
                </div>
              </Modal>
              {/* End  ModalTwoContent */}
            </li>
            {/* <!-- Portfolio Item Ends --> */}

            {/* <!-- Portfolio Item Starts --> */}
            <li
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="100"
            >
              <figure onClick={toggleModalTwentyFour}>
                <img src="img/projects/5g.jpg" alt="Portolio" />
                <div className=" hover-content-wrapper">
                  <span className="content-title"> Chainpatrol </span>
                </div>
              </figure>

              {/* Start ModalTwoContent */}
              <Modal
                isOpen={isOpen24}
                onRequestClose={toggleModalTwentyFour}
                contentLabel="My dialog"
                // className="custom-modal dark"
                className={getClassNames()}
                overlayClassName="custom-overlay"
                closeTimeoutMS={500}
              >
                <div>
                  <button className="close-modal" onClick={toggleModalTwentyFour}>
                    <img src="/img/cancel.svg" alt="close icon" />
                  </button>
                  {/* End close icon */}

                  <div className="box_inner portfolio">
                    <ModalTwentyFourContent />
                  </div>
                </div>
              </Modal>
              {/* End  ModalTwoContent */}
            </li>
            {/* <!-- Portfolio Item Ends --> */}
          </ul>
        </TabPanel>
        {/* End All Project */}

        <TabPanel>
          <ul className="row grid justify-content-center">
            <li
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="0"
            >
              <figure onClick={toggleModalThree}>
                <img src="img/projects/hotfocus.jpg" alt="Portolio" />
                <div className=" hover-content-wrapper">
                  <span className="content-title">Hotfocus</span>
                </div>
              </figure>

              {/* Start ModalOneContent */}
              <Modal
                isOpen={isOpen3}
                onRequestClose={toggleModalThree}
                contentLabel="Hotfocus"
                // className="custom-modal dark"
                className={getClassNames()}
                overlayClassName="custom-overlay"
                closeTimeoutMS={500}
              >
                <div>
                  <button className="close-modal" onClick={toggleModalThree}>
                    <img src="/img/cancel.svg" alt="close icon" />
                  </button>
                  {/* End close icon */}

                  <div className="box_inner portfolio">
                    <ModalThreeContent />
                  </div>
                </div>
              </Modal>
              {/* End  ModalThreeContent */}
            </li>
          </ul>
        </TabPanel>

        <TabPanel>
          <ul className="row grid justify-content-center">
            <li
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="0"
            >
              <figure onClick={toggleModalTwo}>
                <img src="img/projects/aplus_poster.jpg" alt="Portolio" />
                <div className=" hover-content-wrapper">
                  <span className="content-title">CompTIA A+</span>
                </div>
              </figure>

              {/* Start ModalOneContent */}
              <Modal
                isOpen={isOpen2}
                onRequestClose={toggleModalTwo}
                contentLabel="CompTIA A+"
                // className="custom-modal dark"
                className={getClassNames()}
                overlayClassName="custom-overlay"
                closeTimeoutMS={500}
              >
                <div>
                  <button className="close-modal" onClick={toggleModalTwo}>
                    <img src="/img/cancel.svg" alt="close icon" />
                  </button>
                  {/* End close icon */}

                  <div className="box_inner portfolio">
                    <ModalTwoContent />
                  </div>
                </div>
              </Modal>
              {/* End  ModalTwoContent */}
            </li>

            <li
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="0"
            >
              <figure onClick={toggleModalFour}>
                <img src="img/projects/networkplus_poster.jpg" alt="Portolio" />
                <div className=" hover-content-wrapper">
                  <span className="content-title">CompTIA Network+</span>
                </div>
              </figure>

              {/* Start ModalFourContent */}
              <Modal
                isOpen={isOpen4}
                onRequestClose={toggleModalFour}
                contentLabel="CompTIA Network+"
                // className="custom-modal dark"
                className={getClassNames()}
                overlayClassName="custom-overlay"
                closeTimeoutMS={500}
              >
                <div>
                  <button className="close-modal" onClick={toggleModalFour}>
                    <img src="/img/cancel.svg" alt="close icon" />
                  </button>
                  {/* End close icon */}

                  <div className="box_inner portfolio">
                    <ModalFourContent />
                  </div>
                </div>
              </Modal>
              {/* End  ModalFourContent */}
            </li>

            <li
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="0"
            >
              <figure onClick={toggleModalFive}>
                <img src="img/projects/OCA_poster.jpg" alt="Portolio" />
                <div className=" hover-content-wrapper">
                  <span className="content-title">Oracle Certified Associate</span>
                </div>
              </figure>

              {/* Start ModalFiveContent */}
              <Modal
                isOpen={isOpen5}
                onRequestClose={toggleModalFive}
                contentLabel="OCA"
                // className="custom-modal dark"
                className={getClassNames()}
                overlayClassName="custom-overlay"
                closeTimeoutMS={500}
              >
                <div>
                  <button className="close-modal" onClick={toggleModalFive}>
                    <img src="/img/cancel.svg" alt="close icon" />
                  </button>
                  {/* End close icon */}

                  <div className="box_inner portfolio">
                    <ModalFiveContent />
                  </div>
                </div>
              </Modal>
              {/* End  ModalFiveContent */}
            </li>

            <li
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="0"
            >
              <figure onClick={toggleModalSix}>
                <img src="img/projects/OCP_poster.jpg" alt="Portolio" />
                <div className=" hover-content-wrapper">
                  <span className="content-title">Oracle Certified Professional</span>
                </div>
              </figure>

              {/* Start ModalOneContent */}
              <Modal
                isOpen={isOpen6}
                onRequestClose={toggleModalSix}
                contentLabel="OCP"
                // className="custom-modal dark"
                className={getClassNames()}
                overlayClassName="custom-overlay"
                closeTimeoutMS={500}
              >
                <div>
                  <button className="close-modal" onClick={toggleModalSix}>
                    <img src="/img/cancel.svg" alt="close icon" />
                  </button>
                  {/* End close icon */}

                  <div className="box_inner portfolio">
                    <ModalSixContent />
                  </div>
                </div>
              </Modal>
              {/* End  ModalTwoContent */}
            </li>

            <li
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="0"
            >
              <figure onClick={toggleModalSeven}>
                <img src="img/projects/CPP_poster.jpg" alt="Portolio" />
                <div className=" hover-content-wrapper">
                  <span className="content-title">C++</span>
                </div>
              </figure>

              {/* Start ModalOneContent */}
              <Modal
                isOpen={isOpen7}
                onRequestClose={toggleModalSeven}
                contentLabel="C++"
                // className="custom-modal dark"
                className={getClassNames()}
                overlayClassName="custom-overlay"
                closeTimeoutMS={500}
              >
                <div>
                  <button className="close-modal" onClick={toggleModalSeven}>
                    <img src="/img/cancel.svg" alt="close icon" />
                  </button>
                  {/* End close icon */}

                  <div className="box_inner portfolio">
                    <ModalSevenContent />
                  </div>
                </div>
              </Modal>
              {/* End  ModalTwoContent */}
            </li>

            <li
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="0"
            >
              <figure onClick={toggleModalEight}>
                <img src="img/projects/CodeVita_poster.jpg" alt="Portolio" />
                <div className=" hover-content-wrapper">
                  <span className="content-title">CodeVita</span>
                </div>
              </figure>

              {/* Start ModalOneContent */}
              <Modal
                isOpen={isOpen8}
                onRequestClose={toggleModalEight}
                contentLabel="CodeVita"
                // className="custom-modal dark"
                className={getClassNames()}
                overlayClassName="custom-overlay"
                closeTimeoutMS={500}
              >
                <div>
                  <button className="close-modal" onClick={toggleModalEight}>
                    <img src="/img/cancel.svg" alt="close icon" />
                  </button>
                  {/* End close icon */}

                  <div className="box_inner portfolio">
                    <ModalEightContent />
                  </div>
                </div>
              </Modal>
              {/* End  ModalTwoContent */}
            </li>

            <li
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="0"
            >
              <figure onClick={toggleModalNine}>
                <img src="img/projects/SOTY_poster.jpg" alt="Portolio" />
                <div className=" hover-content-wrapper">
                  <span className="content-title">Student of the Year</span>
                </div>
              </figure>

              {/* Start ModalOneContent */}
              <Modal
                isOpen={isOpen9}
                onRequestClose={toggleModalNine}
                contentLabel="Student of the Year"
                // className="custom-modal dark"
                className={getClassNames()}
                overlayClassName="custom-overlay"
                closeTimeoutMS={500}
              >
                <div>
                  <button className="close-modal" onClick={toggleModalNine}>
                    <img src="/img/cancel.svg" alt="close icon" />
                  </button>
                  {/* End close icon */}

                  <div className="box_inner portfolio">
                    <ModalNineContent />
                  </div>
                </div>
              </Modal>
              {/* End  ModalNineContent */}
            </li>

            <li
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="0"
            >
              <figure onClick={toggleModalTen}>
                <img src="img/projects/IELTS_poster.jpg" alt="Portolio" />
                <div className=" hover-content-wrapper">
                  <span className="content-title">IELTS - 8.5 - C2</span>
                </div>
              </figure>

              {/* Start ModalOneContent */}
              <Modal
                isOpen={isOpen10}
                onRequestClose={toggleModalTen}
                contentLabel="IELTS"
                // className="custom-modal dark"
                className={getClassNames()}
                overlayClassName="custom-overlay"
                closeTimeoutMS={500}
              >
                <div>
                  <button className="close-modal" onClick={toggleModalTen}>
                    <img src="/img/cancel.svg" alt="close icon" />
                  </button>
                  {/* End close icon */}

                  <div className="box_inner portfolio">
                    <ModalTenContent />
                  </div>
                </div>
              </Modal>
              {/* End  ModalNineContent */}
            </li>

            <li
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="0"
            >
              <figure onClick={toggleModalEighteen}>
                <img src="img/projects/ets.jpg" alt="Portolio" />
                <div className=" hover-content-wrapper">
                  <span className="content-title">GRE - 326</span>
                </div>
              </figure>

              {/* Start ModalOneContent */}
              <Modal
                isOpen={isOpen18}
                onRequestClose={toggleModalEighteen}
                contentLabel="GRE"
                // className="custom-modal dark"
                className={getClassNames()}
                overlayClassName="custom-overlay"
                closeTimeoutMS={500}
              >
                <div>
                  <button className="close-modal" onClick={toggleModalEighteen}>
                    <img src="/img/cancel.svg" alt="close icon" />
                  </button>
                  {/* End close icon */}

                  <div className="box_inner portfolio">
                    <ModalEighteenContent />
                  </div>
                </div>
              </Modal>
              {/* End  ModalNineContent */}
            </li>

            <li
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="0"
            >
              <figure onClick={toggleModalNineteen}>
                <img src="img/projects/ets.jpg" alt="Portolio" />
                <div className=" hover-content-wrapper">
                  <span className="content-title">TOEFL - 110 - C2</span>
                </div>
              </figure>

              {/* Start ModalOneContent */}
              <Modal
                isOpen={isOpen19}
                onRequestClose={toggleModalNineteen}
                contentLabel="TOEFL"
                // className="custom-modal dark"
                className={getClassNames()}
                overlayClassName="custom-overlay"
                closeTimeoutMS={500}
              >
                <div>
                  <button className="close-modal" onClick={toggleModalNineteen}>
                    <img src="/img/cancel.svg" alt="close icon" />
                  </button>
                  {/* End close icon */}

                  <div className="box_inner portfolio">
                    <ModalNineteenContent />
                  </div>
                </div>
              </Modal>
              {/* End  ModalNineContent */}
            </li>
          </ul>
        </TabPanel>

        <TabPanel>
          <ul className="row grid justify-content-center">
            <li
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="0"
            >
              <figure onClick={toggleModalEleven}>
                <img src="img/projects/IELTS_reading_poster.png" alt="Portolio" />
                <div className=" hover-content-wrapper">
                  <span className="content-title">IELTS Reading Tutorials</span>
                </div>
              </figure>

              {/* Start ModalOneContent */}
              <Modal
                isOpen={isOpen11}
                onRequestClose={toggleModalEleven}
                contentLabel="ICT4SD 2020"
                // className="custom-modal dark"
                className={getClassNames()}
                overlayClassName="custom-overlay"
                closeTimeoutMS={500}
              >
                <div>
                  <button className="close-modal" onClick={toggleModalEleven}>
                    <img src="/img/cancel.svg" alt="close icon" />
                  </button>
                  {/* End close icon */}

                  <div className="box_inner portfolio">
                    <ModalElevenContent />
                  </div>
                </div>
              </Modal>
              {/* End  ModalOneContent */}
            </li>

            <li
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="0"
            >
              <figure onClick={toggleModalTwelve}>
                <img src="img/projects/elevator_pitch_poster.png" alt="Portolio" />
                <div className=" hover-content-wrapper">
                  <span className="content-title">Elevator Pitch</span>
                </div>
              </figure>

              {/* Start ModalOneContent */}
              <Modal
                isOpen={isOpen12}
                onRequestClose={toggleModalTwelve}
                contentLabel="Elevator Pitch"
                // className="custom-modal dark"
                className={getClassNames()}
                overlayClassName="custom-overlay"
                closeTimeoutMS={500}
              >
                <div>
                  <button className="close-modal" onClick={toggleModalTwelve}>
                    <img src="/img/cancel.svg" alt="close icon" />
                  </button>
                  {/* End close icon */}

                  <div className="box_inner portfolio">
                    <ModalTwelveContent />
                  </div>
                </div>
              </Modal>
              {/* End  ModalOneContent */}
            </li>

            <li
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="0"
            >
              <figure onClick={toggleModalThirteen}>
                <img src="img/projects/alumni_testimonial_poster.png" alt="Portolio" />
                <div className=" hover-content-wrapper">
                  <span className="content-title">Alumni Testimonial</span>
                </div>
              </figure>

              {/* Start ModalOneContent */}
              <Modal
                isOpen={isOpen13}
                onRequestClose={toggleModalThirteen}
                contentLabel="Alumni Testimonial"
                // className="custom-modal dark"
                className={getClassNames()}
                overlayClassName="custom-overlay"
                closeTimeoutMS={500}
              >
                <div>
                  <button className="close-modal" onClick={toggleModalThirteen}>
                    <img src="/img/cancel.svg" alt="close icon" />
                  </button>
                  {/* End close icon */}

                  <div className="box_inner portfolio">
                    <ModalThirteenContent />
                  </div>
                </div>
              </Modal>
              {/* End  ModalOneContent */}
            </li>
            {/* <!-- Portfolio Item Ends --> */}
          </ul>
        </TabPanel>

        <TabPanel>
          <ul className="row grid justify-content-center">
            <li
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="0"
            >
              <figure onClick={toggleModalFourteen}>
                <img src="img/projects/ionic_poster.png" alt="Portolio" />
                <div className=" hover-content-wrapper">
                  <span className="content-title">Capacitor Plugin</span>
                </div>
              </figure>

              {/* Start ModalOneContent */}
              <Modal
                isOpen={isOpen14}
                onRequestClose={toggleModalFourteen}
                contentLabel="Capacitor Plugin"
                // className="custom-modal dark"
                className={getClassNames()}
                overlayClassName="custom-overlay"
                closeTimeoutMS={500}
              >
                <div>
                  <button className="close-modal" onClick={toggleModalFourteen}>
                    <img src="/img/cancel.svg" alt="close icon" />
                  </button>
                  {/* End close icon */}

                  <div className="box_inner portfolio">
                    <ModalFourteenContent />
                  </div>
                </div>
              </Modal>
              {/* End  ModalOneContent */}
            </li>

            <li
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="0"
            >
              <figure onClick={toggleModalFifteen}>
                <img src="img/projects/ionic_poster.png" alt="Portolio" />
                <div className=" hover-content-wrapper">
                  <span className="content-title">Capacitor Plugin</span>
                </div>
              </figure>

              {/* Start ModalOneContent */}
              <Modal
                isOpen={isOpen15}
                onRequestClose={toggleModalFifteen}
                contentLabel="Capacitor Plugin"
                // className="custom-modal dark"
                className={getClassNames()}
                overlayClassName="custom-overlay"
                closeTimeoutMS={500}
              >
                <div>
                  <button className="close-modal" onClick={toggleModalFifteen}>
                    <img src="/img/cancel.svg" alt="close icon" />
                  </button>
                  {/* End close icon */}

                  <div className="box_inner portfolio">
                    <ModalFifteenContent />
                  </div>
                </div>
              </Modal>
              {/* End  ModalOneContent */}
            </li>

            <li
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="0"
            >
              <figure onClick={toggleModalSixteen}>
                <img src="img/projects/ionic_poster.png" alt="Portolio" />
                <div className=" hover-content-wrapper">
                  <span className="content-title">Capacitor Plugin</span>
                </div>
              </figure>

              {/* Start ModalOneContent */}
              <Modal
                isOpen={isOpen16}
                onRequestClose={toggleModalSixteen}
                contentLabel="Capacitor Plugin"
                // className="custom-modal dark"
                className={getClassNames()}
                overlayClassName="custom-overlay"
                closeTimeoutMS={500}
              >
                <div>
                  <button className="close-modal" onClick={toggleModalSixteen}>
                    <img src="/img/cancel.svg" alt="close icon" />
                  </button>
                  {/* End close icon */}

                  <div className="box_inner portfolio">
                    <ModalSixteenContent />
                  </div>
                </div>
              </Modal>
              {/* End  ModalOneContent */}
            </li>

            <li
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="0"
            >
              <figure onClick={toggleModalSeventeen}>
                <img src="img/projects/codechef_poster.jpg" alt="Portolio" />
                <div className=" hover-content-wrapper">
                  <span className="content-title">Codechef Solutions</span>
                </div>
              </figure>

              {/* Start ModalOneContent */}
              <Modal
                isOpen={isOpen17}
                onRequestClose={toggleModalSeventeen}
                contentLabel="Codechef Solutions"
                // className="custom-modal dark"
                className={getClassNames()}
                overlayClassName="custom-overlay"
                closeTimeoutMS={500}
              >
                <div>
                  <button className="close-modal" onClick={toggleModalSeventeen}>
                    <img src="/img/cancel.svg" alt="close icon" />
                  </button>
                  {/* End close icon */}

                  <div className="box_inner portfolio">
                    <ModalSeventeenContent />
                  </div>
                </div>
              </Modal>
              {/* End  ModalOneContent */}
            </li>

            <li
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="0"
            >
              <figure onClick={toggleModalTwenty}>
                <img src="img/projects/rsa_poster.jpg" alt="Portolio" />
                <div className=" hover-content-wrapper">
                  <span className="content-title">Optimised RSA Algorithm</span>
                </div>
              </figure>

              {/* Start ModalOneContent */}
              <Modal
                isOpen={isOpen20}
                onRequestClose={toggleModalTwenty}
                contentLabel="Optimised RSA Algorithm"
                // className="custom-modal dark"
                className={getClassNames()}
                overlayClassName="custom-overlay"
                closeTimeoutMS={500}
              >
                <div>
                  <button className="close-modal" onClick={toggleModalTwenty}>
                    <img src="/img/cancel.svg" alt="close icon" />
                  </button>
                  {/* End close icon */}

                  <div className="box_inner portfolio">
                    <ModalTwentyContent />
                  </div>
                </div>
              </Modal>
              {/* End  ModalOneContent */}
            </li>
            {/* <!-- Portfolio Item Ends --> */}
          </ul>
        </TabPanel>
      </div>
    </Tabs>
  );
};

export default Portfolio;
