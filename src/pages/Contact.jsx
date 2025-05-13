import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import "../styles/contact.css";

const Contact = () => {
  const [formData, setFormData] = useState( {
    name: "",
    email: "",
    subject: "",
    message: "",
  } );

  const handleChange = ( e ) => {
    setFormData( {
      ...formData,
      [e.target.name]: e.target.value,
    } );
  };

  const handleSubmit = ( e ) => {
    e.preventDefault();
    console.log( formData );
    // Here you would typically send the form data to your backend
    alert( "Thank you for your message! We will get back to you soon." );
    setFormData( {
      name: "",
      email: "",
      subject: "",
      message: "",
    } );
  };

  return (
    <Helmet title="Contact">
      <CommonSection title="Contact Us" />
      <section>
        <Container>
          <Row>
            <Col lg="7" md="7">
              <h6 className="fw-bold mb-4">Get In Touch</h6>
              <form onSubmit={handleSubmit}>
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="Your Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form__group">
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="Subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form__group">
                  <textarea
                    rows={5}
                    type="text"
                    placeholder="Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button type="submit" className="addTOCart__btn">
                  Send Message
                </button>
              </form>
            </Col>

            <Col lg="5" md="5">
              <div className="contact__info">
                <h6 className="fw-bold">Contact Information</h6>
                <p className="section__subtitle">
                  Fill up the form and our team will get back to you within 24 hours
                </p>
                <div className="d-flex align-items-center gap-2">
                  <h6 className="fs-6 mb-0">
                    <i className="ri-map-pin-line"></i>
                  </h6>
                  <p className="section__subtitle">
                    No 25, Adeyemi road Ikeja Lagos state
                  </p>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <h6 className="fs-6 mb-0">
                    <i className="ri-phone-line"></i>
                  </h6>
                  <p className="section__subtitle">09035855616</p>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <h6 className="fs-6 mb-0">
                    <i className="ri-mail-line"></i>
                  </h6>
                  <p className="section__subtitle">enietanjamie@gmail.com</p>
                </div>

                <h6 className="fw-bold mt-4">Follow Us</h6>
                <div className="d-flex align-items-center gap-4 mt-3">
                  <a href="https://www.facebook.com/jimmy.enietan.3/" className="social__link-icon">
                    <i className="ri-facebook-line"></i>
                  </a>
                  <a href="https://github.com/Jim-devENG" className="social__link-icon">
                    <i className="ri-github-line"></i>
                  </a>
                  <a href="https://www.instagram.com/officialjimmyeni/" className="social__link-icon">
                    <i className="ri-instagram-line"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/enietan-james/" className="social__link-icon">
                    <i className="ri-linkedin-line"></i>
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Contact;
