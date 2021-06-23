import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container-fluid">
      <header id="header" className="fixed-top">
        <div className="container d-flex">
          <div className="logo mr-auto">
            <h1 className="text-light">
              <a href="index.html">
                <span>Logo</span>
              </a>
            </h1>
          </div>

          <nav className="nav-menu d-none d-lg-block">
            <ul>
              <li className="active">
                <a href="#header">Home</a>
              </li>
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#team">Team</a>
              </li>
              <li className="drop-down">
                <Link to="/portal">Portal</Link>
                <ul>
                  <li>
                    <Link to="/students">Student Database</Link>
                  </li>
                  <li>
                    <Link to="/teachers">Staff Database</Link>
                  </li>
                  <li>
                    <Link to="/students/add">Register New Student</Link>
                  </li>
                  <li>
                    <Link to="/teachers/add">Register New Staff</Link>
                  </li>
                  <li>
                    <Link to="/students">Search Student</Link>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#contact">Contact Us</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <section id="hero">
        <div className="hero-container" data-aos="fade-up">
          <h1>NAME OF SCHOOL</h1>
          <h2>
            Motto: Lorem ipsum dolor sit amet consectetur adipisicing elit
          </h2>
          <a href="#about" className="btn-get-started scrollto">
            <i className="bx bx-chevrons-down"></i>
          </a>
        </div>
      </section>

      <main id="main">
        <section id="about" className="about">
          <div className="container">
            <div className="row no-gutters">
              <div
                className="content col-xl-5 d-flex align-items-stretch"
                data-aos="fade-up"
              >
                <div className="content">
                  <h3>Mission Statement</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Duis aute irure dolor in reprehenderit
                  </p>
                  <a href="google.com" className="about-btn">
                    About us <i className="bx bx-chevron-right"></i>
                  </a>
                </div>
              </div>
              <div className="col-xl-7 d-flex align-items-stretch">
                <div className="icon-boxes d-flex flex-column justify-content-center">
                  <div className="row">
                    <div
                      className="col-md-6 icon-box"
                      data-aos="fade-up"
                      data-aos-delay="100"
                    >
                      <i className="icofont-document-folder"></i>
                      <h4>Curriculum</h4>
                      <p>
                        Consequuntur sunt aut quasi enim aliquam quae harum
                        pariatur laboris nisi ut aliquip
                      </p>
                    </div>
                    <div
                      className="col-md-6 icon-box"
                      data-aos="fade-up"
                      data-aos-delay="200"
                    >
                      <i className="bx bx-cube-alt"></i>
                      <h4>Extra curricular Activities</h4>
                      <p>
                        Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt
                      </p>
                    </div>
                    <div
                      className="col-md-6 icon-box"
                      data-aos="fade-up"
                      data-aos-delay="300"
                    >
                      <i className="bx bx-images"></i>
                      <h4>Standard Laboratories</h4>
                      <p>
                        Aut suscipit aut cum nemo deleniti aut omnis. Doloribus
                        ut maiores omnis facere
                      </p>
                    </div>
                    <div
                      className="col-md-6 icon-box"
                      data-aos="fade-up"
                      data-aos-delay="400"
                    >
                      <i className="bx bx-shield"></i>
                      <h4>Sports Facilities</h4>
                      <p>
                        Expedita veritatis consequuntur nihil tempore laudantium
                        vitae denat pacta
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="counts" className="counts  section-bg">
          <div className="container">
            <div className="row no-gutters">
              <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
                <div className="count-box">
                  <i className="icofont-simple-smile"></i>
                  <span data-toggle="counter-up">1,232</span>
                  <p>
                    <strong>Happy Students</strong> consequuntur quae
                  </p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
                <div className="count-box">
                  <i className="bx bx-receipt"></i>
                  <span data-toggle="counter-up">221</span>
                  <p>
                    <strong>Certified Graduates</strong> adipisci atque cum quia
                    aut
                  </p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
                <div className="count-box">
                  <i className="icofont-live-support"></i>
                  <span data-toggle="counter-up">24</span>
                  <p>
                    <strong>hours Support/Feedback</strong> aut commodi quaerat
                  </p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
                <div className="count-box">
                  <i className="icofont-users-alt-5"></i>
                  <span data-toggle="counter-up">75</span>
                  <p>
                    <strong>Qualified Staffs</strong> rerum asperiores dolor
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="team" className="team">
          <div className="container">
            <div
              className="section-title"
              data-aos="fade-in"
              data-aos-delay="100"
            >
              <h2>Team</h2>
              <p>
                Magnam dolores commodi suscipit. Necessitatibus eius consequatur
                ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
                quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
                Quia fugiat sit in iste officiis commodi quidem hic quas.
              </p>
            </div>

            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="member" data-aos="fade-up">
                  <div className="pic">
                    <img
                      src="assets/img/team/team-1.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="member-info">
                    <h4>caroline Eze</h4>
                    <span>Founder</span>
                    <div className="social">
                      <a href="google.com">
                        <i className="icofont-twitter"></i>
                      </a>
                      <a href="google.com">
                        <i className="icofont-facebook"></i>
                      </a>
                      <a href="google.com">
                        <i className="icofont-instagram"></i>
                      </a>
                      <a href="google.com">
                        <i className="icofont-linkedin"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="member" data-aos="fade-up" data-aos-delay="150">
                  <div className="pic">
                    <img
                      src="assets/img/team/team-2.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="member-info">
                    <h4>Sarah John</h4>
                    <span>Principal</span>
                    <div className="social">
                      <a href="google.com">
                        <i className="icofont-twitter"></i>
                      </a>
                      <a href="google.com">
                        <i className="icofont-facebook"></i>
                      </a>
                      <a href="google.com">
                        <i className="icofont-instagram"></i>
                      </a>
                      <a href="google.com">
                        <i className="icofont-linkedin"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="member" data-aos="fade-up" data-aos-delay="300">
                  <div className="pic">
                    <img
                      src="assets/img/team/team-3.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="member-info">
                    <h4>Juliane Fredrich</h4>
                    <span>Head of Studies</span>
                    <div className="social">
                      <a href="google.com">
                        <i className="icofont-twitter"></i>
                      </a>
                      <a href="google.com">
                        <i className="icofont-facebook"></i>
                      </a>
                      <a href="google.com">
                        <i className="icofont-instagram"></i>
                      </a>
                      <a href="google.com">
                        <i className="icofont-linkedin"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact section-bg">
          <div className="container">
            <div
              className="section-title"
              data-aos="fade-in"
              data-aos-delay="100"
            >
              <h2>Contact</h2>
              <p>
                Magnam dolores commodi suscipit. Necessitatibus eius consequatur
                ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
                quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
                Quia fugiat sit in iste officiis commodi quidem hic quas.
              </p>
            </div>

            <div className="row" data-aos="fade-up" data-aos-delay="100">
              <div className="col-lg-6">
                <div className="info-box mb-4">
                  <i className="bx bx-map"></i>
                  <h3>Our Address</h3>
                  <p>108 Adam Street, lagos, Nigeria</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="info-box  mb-4">
                  <i className="bx bx-envelope"></i>
                  <h3>Email Us</h3>
                  <p>contact@example.com</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="info-box  mb-4">
                  <i className="bx bx-phone-call"></i>
                  <h3>Call Us</h3>
                  <p>+234 8089 55488 55</p>
                </div>
              </div>
            </div>

            <div className="row" data-aos="fade-up" data-aos-delay="200">
              <div className="col-lg-12">
                <form>
                  <div className="form-row">
                    <div className="col-md-6 form-group">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        id="name"
                        placeholder="Your Name"
                        data-rule="minlen:4"
                        data-msg="Please enter at least 4 chars"
                      />
                      <div className="validate"></div>
                    </div>
                    <div className="col-md-6 form-group">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        placeholder="Your Email"
                        data-rule="email"
                        data-msg="Please enter a valid email"
                      />
                      <div className="validate"></div>
                    </div>
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      id="subject"
                      placeholder="Subject"
                      data-rule="minlen:4"
                      data-msg="Please enter at least 8 chars of subject"
                    />
                    <div className="validate"></div>
                  </div>
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      name="message"
                      rows="5"
                      data-rule="required"
                      data-msg="Please write something for us"
                      placeholder="Message"
                    ></textarea>
                    <div className="validate"></div>
                  </div>
                  <div className="mb-3">
                    <div className="loading">Loading</div>
                    <div className="error-message"></div>
                  </div>
                  <div className="text-center">
                    <div className="sentsuccess" style={{ display: "none" }}>
                      Your message has been sent. Thank you!
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        document.getElementsByClassName(
                          "sentsuccess"
                        ).style.display = "block";
                      }}
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div
                className="col-lg-6 col-md-6 footer-links"
                data-aos="fade-up"
                data-aos-delay="150"
              >
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="google.com">Home</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="google.com">About us</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>
                    <a href="google.com">Terms of service</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>
                    <a href="google.com">Privacy policy</a>
                  </li>
                </ul>
              </div>

              <div
                className="col-lg-6 col-md-6 footer-newsletter"
                data-aos="fade-up"
                data-aos-delay="350"
              >
                <h4>Our Newsletter</h4>
                <p>
                  Tamen quem nulla quae legam multos aute sint culpa legam
                  noster magna
                </p>
                <form action="" method="post">
                  <input type="email" name="email" />
                  <input type="submit" value="Subscribe" />
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="copyright">
            &copy; Copyright{" "}
            <strong>
              <span>NovaNet</span>
            </strong>
            . All Rights Reserved
          </div>
        </div>
      </footer>

      <a href="google.com" className="back-to-top">
        <i className="icofont-simple-up"></i>
      </a>
    </div>
  );
}

export default Home;
