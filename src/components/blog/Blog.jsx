import React, { useState } from "react";
import Modal from "react-modal";

// import ModalOneBlogContent from "./modal/ModalOneBlogContent";

// Modal.setAppElement("#root");

const Blog = () => {
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

  return (
    <>
     {/* Blog 1 Starts */}
     <div className="col-12 col-md-6 col-lg-6 col-xl-4 mb-30">
        <article className="post-container" onClick={toggleModalOne}>
          <div className="post-thumb">
            <div className="d-block position-relative overflow-hidden">
              <img
                src="img/blog/immigration_story_poster.jpg"
                className="img-fluid"
                alt="Blog Post"
              />
            </div>
          </div>
          {/* End .thumb */}
          <a target="_blank"
            rel="noreferrer"
            href="https://blogs.hinddeep.appstasy.in/light-at-the-end-of-a-maddening-tunnel-5c568fdbe7c8">
            <div className="post-content">
              <div className="entry-header">
                <h3>My Immigration Story</h3>
              </div>
              {/* <div className="entry-content open-sans-font">
              <p>
                How I landed up in Canada...
              </p>
            </div> */}
            </div>
          </a>
          {/* End .post-content */}
        </article>

        {/* Start ModalOneBlogContent */}
        {/* <Modal
          isOpen={isOpen}
          onRequestClose={toggleModalOne}
          contentLabel="My dialog"
          className="custom-modal dark"
          overlayClassName="custom-overlay dark"
          closeTimeoutMS={500}
        >
          <div>
            <button className="close-modal" onClick={toggleModalOne}>
              <img src="/img/cancel.svg" alt="close icon" />
            </button> */}
        {/* End close icon */}

        {/* <div className="box_inner blog-post">
              <ModalOneBlogContent />
            </div>
          </div>
        </Modal> */}
        {/* End  ModalOneBlogContent */}
      </div>
      {/*  Blog 1 Ends */}

      {/* Blog 2 Starts */}
      <div className="col-12 col-md-6 col-lg-6 col-xl-4 mb-30">
        <article className="post-container" onClick={toggleModalTwo}>
          <div className="post-thumb">
            <div className="d-block position-relative overflow-hidden">
              <img
                src="img/blog/IELTS_poster.jpg"
                className="img-fluid"
                alt="Blog Post"
              />
            </div>
          </div>
          {/* End .thumb */}
          <a target="_blank"
            rel="noreferrer"
            href="https://blogs.hinddeep.appstasy.in/acing-the-ielts-reading-section-8b4448bf4681">
            <div className="post-content">
              <div className="entry-header">
                <h3>Acing the Reading Section</h3>
              </div>
              {/* <div className="entry-content open-sans-font">
              <p>
                How I landed up in Canada...
              </p>
            </div> */}
            </div>
          </a>
          {/* End .post-content */}
        </article>

        {/* Start ModalOneBlogContent */}
        {/* <Modal
          isOpen={isOpen}
          onRequestClose={toggleModalOne}
          contentLabel="My dialog"
          className="custom-modal dark"
          overlayClassName="custom-overlay dark"
          closeTimeoutMS={500}
        >
          <div>
            <button className="close-modal" onClick={toggleModalOne}>
              <img src="/img/cancel.svg" alt="close icon" />
            </button> */}
        {/* End close icon */}

        {/* <div className="box_inner blog-post">
              <ModalOneBlogContent />
            </div>
          </div>
        </Modal> */}
        {/* End  ModalOneBlogContent */}
      </div>
      {/*  Blog 2 Ends */}

      {/* Blog 3 Starts */}
      <div className="col-12 col-md-6 col-lg-6 col-xl-4 mb-30">
        <article className="post-container" onClick={toggleModalThree}>
          <div className="post-thumb">
            <div className="d-block position-relative overflow-hidden">
              <img
                src="img/blog/cheat_sheet_poster.jpg"
                className="img-fluid"
                alt="Blog Post"
              />
            </div>
          </div>
          {/* End .thumb */}
          <a target="_blank"
            rel="noreferrer"
            href="https://blogs.hinddeep.appstasy.in/international-students-cheat-sheet-to-thrive-in-canada-9b75308ac892">
            <div className="post-content">
              <div className="entry-header">
                <h3>Thriving in Canada</h3>
              </div>
              {/* <div className="entry-content open-sans-font">
              <p>
                How I landed up in Canada...
              </p>
            </div> */}
            </div>
          </a>
          {/* End .post-content */}
        </article>

        {/* Start ModalOneBlogContent */}
        {/* <Modal
          isOpen={isOpen}
          onRequestClose={toggleModalOne}
          contentLabel="My dialog"
          className="custom-modal dark"
          overlayClassName="custom-overlay dark"
          closeTimeoutMS={500}
        >
          <div>
            <button className="close-modal" onClick={toggleModalOne}>
              <img src="/img/cancel.svg" alt="close icon" />
            </button> */}
        {/* End close icon */}

        {/* <div className="box_inner blog-post">
              <ModalOneBlogContent />
            </div>
          </div>
        </Modal> */}
        {/* End  ModalOneBlogContent */}
      </div>
      {/*  Blog 3 Ends */}

      {/* Blog 4 Starts */}
      <div className="col-12 col-md-6 col-lg-6 col-xl-4 mb-30">
        <article className="post-container" onClick={toggleModalFour}>
          <div className="post-thumb">
            <div className="d-block position-relative overflow-hidden">
              <img
                src="img/blog/job_poster.jpg"
                className="img-fluid"
                alt="Blog Post"
              />
            </div>
          </div>
          {/* End .thumb */}
          <a target="_blank"
            rel="noreferrer"
            href="https://blogs.hinddeep.appstasy.in/job-poster-or-an-imposter-8fc0b980fb63">
            <div className="post-content">
              <div className="entry-header">
                <h3>Job poster or an imposter??</h3>
              </div>
              {/* <div className="entry-content open-sans-font">
              <p>
                How I landed up in Canada...
              </p>
            </div> */}
            </div>
          </a>
          {/* End .post-content */}
        </article>

        {/* Start ModalOneBlogContent */}
        {/* <Modal
          isOpen={isOpen}
          onRequestClose={toggleModalOne}
          contentLabel="My dialog"
          className="custom-modal dark"
          overlayClassName="custom-overlay dark"
          closeTimeoutMS={500}
        >
          <div>
            <button className="close-modal" onClick={toggleModalOne}>
              <img src="/img/cancel.svg" alt="close icon" />
            </button> */}
        {/* End close icon */}

        {/* <div className="box_inner blog-post">
              <ModalOneBlogContent />
            </div>
          </div>
        </Modal> */}
        {/* End  ModalOneBlogContent */}
      </div>
      {/*  Blog 4 Ends */}

      {/* Blog 5 Starts */}
      <div className="col-12 col-md-6 col-lg-6 col-xl-4 mb-30">
        <article className="post-container" onClick={toggleModalFive}>
          <div className="post-thumb">
            <div className="d-block position-relative overflow-hidden">
              <img
                src="img/blog/mac.webp"
                className="img-fluid"
                alt="Blog Post"
              />
            </div>
          </div>
          {/* End .thumb */}
          <a target="_blank"
            rel="noreferrer"
            href="https://blogs.hinddeep.appstasy.in/fixing-the-dreaded-battery-drain-issue-on-a-sleeping-mac-6e153e464b13">
            <div className="post-content">
              <div className="entry-header">
                <h3>Conserve battery on a mac</h3>
              </div>
              {/* <div className="entry-content open-sans-font">
              <p>
                How I landed up in Canada...
              </p>
            </div> */}
            </div>
          </a>
          {/* End .post-content */}
        </article>

        {/* Start ModalOneBlogContent */}
        {/* <Modal
          isOpen={isOpen}
          onRequestClose={toggleModalOne}
          contentLabel="My dialog"
          className="custom-modal dark"
          overlayClassName="custom-overlay dark"
          closeTimeoutMS={500}
        >
          <div>
            <button className="close-modal" onClick={toggleModalOne}>
              <img src="/img/cancel.svg" alt="close icon" />
            </button> */}
        {/* End close icon */}

        {/* <div className="box_inner blog-post">
              <ModalOneBlogContent />
            </div>
          </div>
        </Modal> */}
        {/* End  ModalOneBlogContent */}
      </div>
      {/*  Blog 5 Ends */}

      {/* Blog 6 Starts */}
      <div className="col-12 col-md-6 col-lg-6 col-xl-4 mb-30">
        <article className="post-container" onClick={toggleModalSix}>
          <div className="post-thumb">
            <div className="d-block position-relative overflow-hidden">
              <img
                src="img/blog/studentvisa_poster.jpg"
                className="img-fluid"
                alt="Blog Post"
              />
            </div>
          </div>
          {/* End .thumb */}
          <a target="_blank"
            rel="noreferrer"
            href="https://blogs.hinddeep.appstasy.in/canadian-student-visa-sop-698baba4e72a">
            <div className="post-content">
              <div className="entry-header">
                <h3>Canadian Student Visa SOP</h3>
              </div>
              {/* <div className="entry-content open-sans-font">
              <p>
                How I landed up in Canada...
              </p>
            </div> */}
            </div>
          </a>
          {/* End .post-content */}
        </article>

        {/* Start ModalOneBlogContent */}
        {/* <Modal
          isOpen={isOpen}
          onRequestClose={toggleModalOne}
          contentLabel="My dialog"
          className="custom-modal dark"
          overlayClassName="custom-overlay dark"
          closeTimeoutMS={500}
        >
          <div>
            <button className="close-modal" onClick={toggleModalOne}>
              <img src="/img/cancel.svg" alt="close icon" />
            </button> */}
        {/* End close icon */}

        {/* <div className="box_inner blog-post">
              <ModalOneBlogContent />
            </div>
          </div>
        </Modal> */}
        {/* End  ModalOneBlogContent */}
      </div>
      {/*  Blog 6 Ends */}

      {/* Blog 7 Starts */}
      <div className="col-12 col-md-6 col-lg-6 col-xl-4 mb-30">
        <article className="post-container" onClick={toggleModalSeven}>
          <div className="post-thumb">
            <div className="d-block position-relative overflow-hidden">
              <img
                src="img/blog/sop.jpg"
                className="img-fluid"
                alt="Blog Post"
              />
            </div>
          </div>
          {/* End .thumb */}
          <a target="_blank"
            rel="noreferrer"
            href="https://blogs.hinddeep.appstasy.in/sop-masters-degree-39fbb62244d3">
            <div className="post-content">
              <div className="entry-header">
                <h3>SOP - Master's degree</h3>
              </div>
              {/* <div className="entry-content open-sans-font">
              <p>
                How I landed up in Canada...
              </p>
            </div> */}
            </div>
          </a>
          {/* End .post-content */}
        </article>

        {/* Start ModalOneBlogContent */}
        {/* <Modal
          isOpen={isOpen}
          onRequestClose={toggleModalOne}
          contentLabel="My dialog"
          className="custom-modal dark"
          overlayClassName="custom-overlay dark"
          closeTimeoutMS={500}
        >
          <div>
            <button className="close-modal" onClick={toggleModalOne}>
              <img src="/img/cancel.svg" alt="close icon" />
            </button> */}
        {/* End close icon */}

        {/* <div className="box_inner blog-post">
              <ModalOneBlogContent />
            </div>
          </div>
        </Modal> */}
        {/* End  ModalOneBlogContent */}
      </div>
      {/*  Blog 7 Ends */}

      {/* Blog 8 Starts */}
      <div className="col-12 col-md-6 col-lg-6 col-xl-4 mb-30">
        <article className="post-container" onClick={toggleModalEight}>
          <div className="post-thumb">
            <div className="d-block position-relative overflow-hidden">
              <img
                src="img/blog/sop.jpg"
                className="img-fluid"
                alt="Blog Post"
              />
            </div>
          </div>
          {/* End .thumb */}
          <a target="_blank"
            rel="noreferrer"
            href="https://blogs.hinddeep.appstasy.in/a-failure-story-sop-bachelors-degree-276c0974615e">
            <div className="post-content">
              <div className="entry-header">
                <h3>A failure story</h3>
              </div>
              {/* <div className="entry-content open-sans-font">
              <p>
                How I landed up in Canada...
              </p>
            </div> */}
            </div>
          </a>
          {/* End .post-content */}
        </article>

        {/* Start ModalOneBlogContent */}
        {/* <Modal
          isOpen={isOpen}
          onRequestClose={toggleModalOne}
          contentLabel="My dialog"
          className="custom-modal dark"
          overlayClassName="custom-overlay dark"
          closeTimeoutMS={500}
        >
          <div>
            <button className="close-modal" onClick={toggleModalOne}>
              <img src="/img/cancel.svg" alt="close icon" />
            </button> */}
        {/* End close icon */}

        {/* <div className="box_inner blog-post">
              <ModalOneBlogContent />
            </div>
          </div>
        </Modal> */}
        {/* End  ModalOneBlogContent */}
      </div>
      {/*  Blog 8 Ends */}

      {/* Blog 9 Starts */}
      <div className="col-12 col-md-6 col-lg-6 col-xl-4 mb-30">
        <article className="post-container" onClick={toggleModalNine}>
          <div className="post-thumb">
            <div className="d-block position-relative overflow-hidden">
              <img
                src="img/blog/immigration_story_poster.jpg"
                className="img-fluid"
                alt="Blog Post"
              />
            </div>
          </div>
          {/* End .thumb */}
          <a target="_blank"
            rel="noreferrer"
            href="https://blogs.hinddeep.appstasy.in/international-students-guide-to-obtaining-canadian-visitor-visas-for-their-family-c528c4ab3524">
            <div className="post-content">
              <div className="entry-header">
                <h3>Canadian visitor visa</h3>
              </div>
              {/* <div className="entry-content open-sans-font">
              <p>
                How I landed up in Canada...
              </p>
            </div> */}
            </div>
          </a>
          {/* End .post-content */}
        </article>

        {/* Start ModalOneBlogContent */}
        {/* <Modal
          isOpen={isOpen}
          onRequestClose={toggleModalOne}
          contentLabel="My dialog"
          className="custom-modal dark"
          overlayClassName="custom-overlay dark"
          closeTimeoutMS={500}
        >
          <div>
            <button className="close-modal" onClick={toggleModalOne}>
              <img src="/img/cancel.svg" alt="close icon" />
            </button> */}
        {/* End close icon */}

        {/* <div className="box_inner blog-post">
              <ModalOneBlogContent />
            </div>
          </div>
        </Modal> */}
        {/* End  ModalOneBlogContent */}
      </div>
      {/*  Blog 9 Ends */}

      {/* Blog 10 Starts */}
      <div className="col-12 col-md-6 col-lg-6 col-xl-4 mb-30">
        <article className="post-container" onClick={toggleModalTen}>
          <div className="post-thumb">
            <div className="d-block position-relative overflow-hidden">
              <img
                src="img/blog/immigration_story_poster.jpg"
                className="img-fluid"
                alt="Blog Post"
              />
            </div>
          </div>
          {/* End .thumb */}
          <a target="_blank"
            rel="noreferrer"
            href="https://blogs.hinddeep.appstasy.in/usa-visitor-visa-what-why-where-when-and-how-1d293c668432">
            <div className="post-content">
              <div className="entry-header">
                <h3>USA Visitor Visa</h3>
              </div>
              {/* <div className="entry-content open-sans-font">
              <p>
                How I landed up in Canada...
              </p>
            </div> */}
            </div>
          </a>
          {/* End .post-content */}
        </article>

        {/* Start ModalOneBlogContent */}
        {/* <Modal
          isOpen={isOpen}
          onRequestClose={toggleModalOne}
          contentLabel="My dialog"
          className="custom-modal dark"
          overlayClassName="custom-overlay dark"
          closeTimeoutMS={500}
        >
          <div>
            <button className="close-modal" onClick={toggleModalOne}>
              <img src="/img/cancel.svg" alt="close icon" />
            </button> */}
        {/* End close icon */}

        {/* <div className="box_inner blog-post">
              <ModalOneBlogContent />
            </div>
          </div>
        </Modal> */}
        {/* End  ModalOneBlogContent */}
      </div>
      {/*  Blog 10 Ends */}

      {/* Blog 11 Starts */}
      <div className="col-12 col-md-6 col-lg-6 col-xl-4 mb-30">
        <article className="post-container" onClick={toggleModalEleven}>
          <div className="post-thumb">
            <div className="d-block position-relative overflow-hidden">
              <img
                src="img/blog/french.webp"
                className="img-fluid"
                alt="Blog Post"
              />
            </div>
          </div>
          {/* End .thumb */}
          <a target="_blank"
            rel="noreferrer"
            href="https://blogs.hinddeep.appstasy.in/the-expeditions-of-a-polyglot-340e4b4da6a5?sk=12392ea9f418233bd10b6f3e43c4362d">
            <div className="post-content">
              <div className="entry-header">
                <h3>The expeditions of a polyglot</h3>
              </div>
              {/* <div className="entry-content open-sans-font">
              <p>
                How I landed up in Canada...
              </p>
            </div> */}
            </div>
          </a>
          {/* End .post-content */}
        </article>

        {/* Start ModalOneBlogContent */}
        {/* <Modal
          isOpen={isOpen}
          onRequestClose={toggleModalOne}
          contentLabel="My dialog"
          className="custom-modal dark"
          overlayClassName="custom-overlay dark"
          closeTimeoutMS={500}
        >
          <div>
            <button className="close-modal" onClick={toggleModalOne}>
              <img src="/img/cancel.svg" alt="close icon" />
            </button> */}
        {/* End close icon */}

        {/* <div className="box_inner blog-post">
              <ModalOneBlogContent />
            </div>
          </div>
        </Modal> */}
        {/* End  ModalOneBlogContent */}
      </div>
      {/*  Blog 11 Ends */}

      {/* Blog 12 Starts */}
      <div className="col-12 col-md-6 col-lg-6 col-xl-4 mb-30">
        <article className="post-container" onClick={toggleModalTwelve}>
          <div className="post-thumb">
            <div className="d-block position-relative overflow-hidden">
              <img
                src="img/blog/french.webp"
                className="img-fluid"
                alt="Blog Post"
              />
            </div>
          </div>
          {/* End .thumb */}
          <a target="_blank"
            rel="noreferrer"
            href="https://blogs.hinddeep.appstasy.in/les-expéditions-dun-polyglotte-a9f2a1356857?sk=50c9f9b68e9c34c52b85655b7b764f47">
            <div className="post-content">
              <div className="entry-header">
                <h3>Les expéditions d’un polyglotte</h3>
              </div>
              {/* <div className="entry-content open-sans-font">
              <p>
                How I landed up in Canada...
              </p>
            </div> */}
            </div>
          </a>
          {/* End .post-content */}
        </article>

        {/* Start ModalOneBlogContent */}
        {/* <Modal
          isOpen={isOpen}
          onRequestClose={toggleModalOne}
          contentLabel="My dialog"
          className="custom-modal dark"
          overlayClassName="custom-overlay dark"
          closeTimeoutMS={500}
        >
          <div>
            <button className="close-modal" onClick={toggleModalOne}>
              <img src="/img/cancel.svg" alt="close icon" />
            </button> */}
        {/* End close icon */}

        {/* <div className="box_inner blog-post">
              <ModalOneBlogContent />
            </div>
          </div>
        </Modal> */}
        {/* End  ModalOneBlogContent */}
      </div>
      {/*  Blog 12 Ends */}

      {/* Blog 13 Starts */}
      <div className="col-12 col-md-6 col-lg-6 col-xl-4 mb-30">
        <article className="post-container" onClick={toggleModalThirteen}>
          <div className="post-thumb">
            <div className="d-block position-relative overflow-hidden">
              <img
                src="img/blog/ericsson.webp"
                className="img-fluid"
                alt="Blog Post"
              />
            </div>
          </div>
          {/* End .thumb */}
          <a target="_blank"
            rel="noreferrer"
            href="https://blogs.hinddeep.appstasy.in/an-unforgettable-day-at-ericsson-montreal-23a67e383e79">
            <div className="post-content">
              <div className="entry-header">
                <h3>An unforgettable day at Ericsson, Montreal</h3>
              </div>
              {/* <div className="entry-content open-sans-font">
              <p>
                How I landed up in Canada...
              </p>
            </div> */}
            </div>
          </a>
          {/* End .post-content */}
        </article>

        {/* Start ModalOneBlogContent */}
        {/* <Modal
          isOpen={isOpen}
          onRequestClose={toggleModalOne}
          contentLabel="My dialog"
          className="custom-modal dark"
          overlayClassName="custom-overlay dark"
          closeTimeoutMS={500}
        >
          <div>
            <button className="close-modal" onClick={toggleModalOne}>
              <img src="/img/cancel.svg" alt="close icon" />
            </button> */}
        {/* End close icon */}

        {/* <div className="box_inner blog-post">
              <ModalOneBlogContent />
            </div>
          </div>
        </Modal> */}
        {/* End  ModalOneBlogContent */}
      </div>
      {/*  Blog 13 Ends */}

      {/* Blog 14 Starts */}
      <div className="col-12 col-md-6 col-lg-6 col-xl-4 mb-30">
        <article className="post-container" onClick={toggleModalFourteen}>
          <div className="post-thumb">
            <div className="d-block position-relative overflow-hidden">
              <img
                src="img/blog/delfb2.webp"
                className="img-fluid"
                alt="Blog Post"
              />
            </div>
          </div>
          {/* End .thumb */}
          <a target="_blank"
            rel="noreferrer"
            href="https://blogs.hinddeep.appstasy.in/un-maître-du-français-en-devenir-f08952548d52">
            <div className="post-content">
              <div className="entry-header">
                <h3>Un maître du français en devenir</h3>
              </div>
              {/* <div className="entry-content open-sans-font">
              <p>
                How I landed up in Canada...
              </p>
            </div> */}
            </div>
          </a>
          {/* End .post-content */}
        </article>

        {/* Start ModalOneBlogContent */}
        {/* <Modal
          isOpen={isOpen}
          onRequestClose={toggleModalOne}
          contentLabel="My dialog"
          className="custom-modal dark"
          overlayClassName="custom-overlay dark"
          closeTimeoutMS={500}
        >
          <div>
            <button className="close-modal" onClick={toggleModalOne}>
              <img src="/img/cancel.svg" alt="close icon" />
            </button> */}
        {/* End close icon */}

        {/* <div className="box_inner blog-post">
              <ModalOneBlogContent />
            </div>
          </div>
        </Modal> */}
        {/* End  ModalOneBlogContent */}
      </div>
      {/*  Blog 14 Ends */}
    </>
  );
};



export default Blog;
