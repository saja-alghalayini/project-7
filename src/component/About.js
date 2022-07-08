import React from 'react';
import './css/about.css';
import './css/aboutSimplegrid.css';


function About() {
    return (
        <>
            {/* {/* Preloader Start  */} *
   
    {/* <link rel="shortcut icon" href="logo.png"></link> */}
  <header>
     {/* Header Start */}
     <div className="header-area header-transparrent">
           <div className="headder-top header-sticky">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-3 col-md-2">
                            {/* Logo */}
                            <div className="logo">
                                <a href="index.html"><img src="assets/img/logo/logo.png" height= "100px" alt="" /></a>
                            </div>  
                        </div>
                        <div className="col-lg-9 col-md-9">
                            <div className="menu-wrapper">
                                {/* Main-menu */}
                                <div className="main-menu">
                                    <nav className="d-none d-lg-block">
                                        <ul id="navigation">
                                            <li><a href="./index.html">Home</a></li>
                                            <li><a href="./job_listing.html">Find a Jobs </a></li>
                                            <li><a href="./about.html">About</a></li>
                                            <li><a href="#">Page</a>
                                                <ul className="submenu">
                                                    <li><a href="blog.html">Blog</a></li>
                                                    <li><a href="single-blog.html">Blog Details</a></li>
                                                    <li><a href="elements.html">Elements</a></li>
                                                    <li><a href="job_details.html">job Details</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="contact.html">Contact</a></li>
                                        </ul>
                                    </nav>
                                </div>          
                                {/* Header-btn */}
                                <div className="header-btn d-none f-right d-lg-block">
                                    <a href="#" className="btn head-btn1">Register</a>
                                    <a href="#" className="btn head-btn2">Login</a>
                                </div>
                            </div>
                        </div>
                        {/* Mobile Menu */}
                        <div className="col-12">
                            <div className="mobile_menu d-block d-lg-none"></div>
                        </div>
                    </div>
                </div>
           </div>
       </div>
        {/* Header End */}
  </header>










  
  <main>







   
  <>
  {/* Services Section */}
  <div className="wrap services-wrap" id="services">
    <section className="grid grid-pad services">
      <h2 style={{ color: "#010b1d" }}>Our Services</h2>
      <div className="col-1-4 service-box service-1">
        <div className="content">
          <div className="service-icon">
            <i
              className="fa-solid fa-globe"
              style={{ fontSize: 80, color: "#fb246a" }}
            />
          </div>
          <div className="service-entry">
            <h3 style={{ color: "#010b1d" }}>All Around The World</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              feugiat tellus eget libero pretium, sollicitudin feugiat libero.
            </p>
          </div>
        </div>
      </div>
      <div className="col-1-4 service-box service-2">
        <div className="content">
          <div className="service-icon">
            <i
              className="fa fa-tachometer"
              style={{ fontSize: 80, color: "#fb246a" }}
            />
          </div>
          <div className="service-entry">
            <h3 style={{ color: "#010b1d" }}>Higher employment rate</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              feugiat tellus eget libero pretium, sollicitudin feugiat libero.
            </p>
          </div>
        </div>
      </div>
      <div className="col-1-4 service-box service-3">
        <div className="content">
          <div className="service-icon">
            <i
              className="fa-solid fa-user-shield"
              style={{ fontSize: 80, color: "#fb246a" }}
            />
          </div>
          <div className="service-entry">
            <h3 style={{ color: "#010b1d" }}>High Security Level</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              feugiat tellus eget libero pretium, sollicitudin feugiat libero.
            </p>
          </div>
        </div>
      </div>
      <div className="col-1-4 service-box service-4">
        <div className="content">
          <div className="service-icon">
            <i
              className="fa fa-diamond"
              style={{ fontSize: 80, color: "#fb246a" }}
            />
          </div>
          <div className="service-entry">
            <h3 style={{ color: "#010b1d" }}>Endless Possibilities </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              feugiat tellus eget libero pretium, sollicitudin feugiat libero.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
  {/* End Services Section */}
  {/* Quotes Section */}
  <div className="wrap services-wrap">
    <section className="grid grid-pad">
      <div className="col-1-1 service-box cl-client-carousel-container">
        <div className="content">
          <div className="cl-client-carousel">
            <div className="item client-carousel-item">
              {/* Start of item */}
              <div className="quotes-icon">
                <i className="icon-quotes-left" />
              </div>
              <p>
                The7 is an extraordinary, awesome Theme, I would recommend this
                Theme to anyone for their next project. Go ahead and download it
                now!
              </p>
              <h4>-David Bell</h4>
            </div>
            {/* End of item */}
            <div className="item client-carousel-item">
              {/* Start of item */}
              <div className="quotes-icon">
                <i className="icon-quotes-left" />
              </div>
              <p>
                The good times are for those who take action. The7 is a simple
                and easy to use template for creative people. Download this
                theme and give it a try!
              </p>
              <h4>-Eve Stinger</h4>
            </div>
            {/* End of item */}
            <div className="item client-carousel-item">
              {/* Start of item */}
              <div className="quotes-icon">
                <i className="icon-quotes-left" />
              </div>
              <p>
                Awesome theme! Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Accusamus incidunt possimus eveniet aperiam,
                minus deleniti iure ipsa praesentium amet, labore voluptatum
                fugit earum, porro non sequi sint soluta reprehenderit ad?
              </p>
              <h4>-Will Peters</h4>
            </div>
            {/* End of item */}
          </div>
        </div>
      </div>
    </section>
  </div>
  {/* End Quotes Section */}
  {/* Team Section */}
  <div className="wrap team-wrap grey" id="team">
    <div className="grid grid-pad">
      <div className="content">
        <h2 style={{ color: "#010b1d" }}>Meet Our Team</h2>
        <div className="col-1-4">
          <div className="content staff-content">
            <div className="recent-work staff-img">
              <div className="img-wrap staff-img">
                <img
                  src="images/team/Saja.png"
                  alt="Saja G."
                  style={{ height: 335 }}
                />
                <div className="team-social">
                  <a className="sl-fb" href="#">
                    <i className="fa-brands fa-facebook" />
                  </a>
                  <a className="sl-tw" href="#">
                    <i className="fa-brands fa-github" />
                  </a>
                  <a className="sl-gp" href="#">
                    <i className="fa-brands fa-google" />
                  </a>
                  <a className="sl-ln" href="#">
                    <i className="fa-brands fa-linkedin" />
                  </a>
                </div>
              </div>
              <div className="work-info staff-info">
                <h5>Saja Al Ghalayini</h5>
                <span>Product Owner</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-1-4">
          <div className="content staff-content">
            <div className="recent-work staff-img">
              <div className="img-wrap staff-img">
                <img
                  src="images/team/Tamara.png"
                  alt="Tamara S."
                  style={{ height: 335 }}
                />
                <div className="team-social">
                  <a className="sl-fb" href="#">
                    <i className="fa-brands fa-facebook" />
                  </a>
                  <a className="sl-tw" href="#">
                    <i className="fa-brands fa-github" />
                  </a>
                  <a className="sl-gp" href="#">
                    <i className="fa-brands fa-google" />
                  </a>
                  <a className="sl-ln" href="#">
                    <i className="fa-brands fa-linkedin" />
                  </a>
                </div>
              </div>
              <div className="work-info staff-info">
                <h5>Tamara Shbatat</h5>
                <span>Scrum Master</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-1-4">
          <div className="content staff-content">
            <div className="recent-work staff-img">
              <div className="img-wrap staff-img">
                <img
                  src="images/team/Bahaa.jpeg"
                  alt="Bahaa A."
                  style={{ height: 335 }}
                />
                <div className="team-social">
                  <a className="sl-fb" href="#">
                    <i className="fa-brands fa-facebook" />
                  </a>
                  <a className="sl-tw" href="#">
                    <i className="fa-brands fa-github" />
                  </a>
                  <a className="sl-gp" href="#">
                    <i className="fa-brands fa-google" />
                  </a>
                  <a className="sl-ln" href="#">
                    <i className="fa-brands fa-linkedin" />
                  </a>
                </div>
              </div>
              <div className="work-info staff-info">
                <h5>Bahaa Aldeen</h5>
                <span>Developer</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-1-4">
          <div className="content staff-content">
            <div className="recent-work staff-img">
              <div className="img-wrap staff-img">
                <img
                  src="images/team/Raghad.jpeg"
                  alt="Raghad K."
                  style={{ height: 335 }}
                />
                <div className="team-social">
                  <a className="sl-fb" href="#">
                    <i className="fa-brands fa-facebook" />
                  </a>
                  <a className="sl-tw" href="#">
                    <i className="fa-brands fa-github" />
                  </a>
                  <a className="sl-gp" href="#">
                    <i className="fa-brands fa-google" />
                  </a>
                  <a className="sl-ln" href="#">
                    <i className="fa-brands fa-linkedin" />
                  </a>
                </div>
              </div>
              <div className="work-info staff-info">
                <h5>Raghad ALKarasneh</h5>
                <span>Developer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* End Team Section */}
  {/* Clients Logos Section */}
  <div className="wrap">
    <div className="grid grid-pad">
      <div className="col-1-1">
        <div className="content">
          {/* Start of Carousel Container */}
          <div className="cl-logo-carousel col-sm-12">
            <div className="item">
              {/* Start of item */}
              <a href="#">
                <figure>
                  <img src="images/clients/Care.png" alt="" />
                </figure>
              </a>
            </div>
            {/* End of item */}
            <div className="item">
              {/* Start of item */}
              <a href="#">
                <figure>
                  <img src="images/clients/Shoofni.png" alt="" />
                </figure>
              </a>
            </div>
            {/* End of item */}
            <div className="item">
              {/* Start of item */}
              <a href="#">
                <figure>
                  <img src="images/clients/Orange.png" alt="" />
                </figure>
              </a>
            </div>
            {/* End of item */}
            <div className="item">
              {/* Start of item */}
              <a href="#">
                <figure>
                  <img src="images/clients/Care.png" alt="" />
                </figure>
              </a>
            </div>
            {/* End of item */}
            <div className="item">
              {/* Start of item */}
              <a href="#">
                <figure>
                  <img src="images/clients/Shoofni.png" alt="" />
                </figure>
              </a>
            </div>
            {/* End of item */}
            <div className="item">
              {/* Start of item */}
              <a href="#">
                <figure>
                  <img src="images/clients/Orange.png" alt="" />
                </figure>
              </a>
            </div>
            {/* End of item */}
            <div className="item">
              {/* Start of item */}
              <a href="#">
                <figure>
                  <img src="images/clients/Care.png" alt="" />
                </figure>
              </a>
            </div>
            {/* End of item */}
            <div className="item">
              {/* Start of item */}
              <a href="#">
                <figure>
                  <img src="images/clients/Shoofni.png" alt="" />
                </figure>
              </a>
            </div>
            {/* End of item */}
          </div>
          {/* End of Carousel Container */}
        </div>
      </div>
    </div>
  </div>
  {/* End Clients Logos Section */}
</>




    
  </main>






  <footer>
    {/* Footer Start*/}
    <div className="footer-area footer-bg footer-padding">
      <div className="container">
        <div className="row d-flex justify-content-between">
          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
            <div className="single-footer-caption mb-50">
              <div className="single-footer-caption mb-30">
                <div className="footer-tittle">
                  <h4>About Us</h4>
                  <div className="footer-pera">
                    <p>
                      Heaven frucvitful doesn't cover lesser dvsays appear
                      creeping seasons so behold.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-5">
            <div className="single-footer-caption mb-50">
              <div className="footer-tittle">
                <h4>Contact Info</h4>
                <ul>
                  <li>
                    <p>Address :Your address goes here, your demo address.</p>
                  </li>
                  <li>
                    <a href="#">Phone : +8880 44338899</a>
                  </li>
                  <li>
                    <a href="#">Email : info@colorlib.com</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-5">
            <div className="single-footer-caption mb-50">
              <div className="footer-tittle">
                <h4>Important Link</h4>
                <ul>
                  <li>
                    <a href="#"> View Project</a>
                  </li>
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                  <li>
                    <a href="#">Testimonial</a>
                  </li>
                  <li>
                    <a href="#">Proparties</a>
                  </li>
                  <li>
                    <a href="#">Support</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-5">
            <div className="single-footer-caption mb-50">
              <div className="footer-tittle">
                <h4>Newsletter</h4>
                <div className="footer-pera footer-pera2">
                  <p>
                    Heaven fruitful doesn't over lesser in days. Appear
                    creeping.
                  </p>
                </div>
                {/* Form */}
                <div className="footer-form">
                  <div id="mc_embed_signup">
                    <form
                      target="_blank"
                      action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&id=92a4423d01"
                      method="get"
                      className="subscribe_form relative mail_part"
                    >
                      <input
                        type="email"
                        name="email"
                        id="newsletter-form-email"
                        placeholder="Email Address"
                        className="placeholder hide-on-focus"
                        onfocus="this.placeholder = ''"
                        onblur="this.placeholder = ' Email Address '"
                      />
                      <div className="form-icon">
                        <button
                          type="submit"
                          name="submit"
                          id="newsletter-submit"
                          className="email_icon newsletter-submit button-contactForm"
                        >
                          <img src="assets/img/icon/form.png" alt="" />
                        </button>
                      </div>
                      <div className="mt-10 info" />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="row footer-wejed justify-content-between">
          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
            {/* logo */}
            <div className="footer-logo mb-20">
              <a href="index.html">
                <img src="assets/img/logo/logo2_footer.png" alt="" />
              </a>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-5">
            <div className="footer-tittle-bottom">
              <span>5000+</span>
              <p>Talented Hunter</p>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-5">
            <div className="footer-tittle-bottom">
              <span>451</span>
              <p>Talented Hunter</p>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-5">
            {/* Footer Bottom Tittle */}
            <div className="footer-tittle-bottom">
              <span>568</span>
              <p>Talented Hunter</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* footer-bottom area */}
    <div className="footer-bottom-area footer-bg">
      <div className="container">
        <div className="footer-border">
          <div className="row d-flex justify-content-between align-items-center">
            <div className="col-xl-10 col-lg-10 ">
              <div className="footer-copy-right">
                <p>
                  {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                  Copyright © All rights reserved | This template is made with{" "}
                  <i className="fa fa-heart" aria-hidden="true" /> by{" "}
                  <a href="https://colorlib.com" target="_blank">
                    Colorlib
                  </a>
                  {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                </p>
              </div>
            </div>
            <div className="col-xl-2 col-lg-2">
              <div className="footer-social f-right">
                <a href="#">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="#">
                  <i className="fab fa-twitter" />
                </a>
                <a href="#">
                  <i className="fas fa-globe" />
                </a>
                <a href="#">
                  <i className="fab fa-behance" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Footer End*/}
  </footer>

</>

        
        

    );
}

export default About;