import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import components
import CallToAction from '../components/sections/CallToAction';

// Import images
import heroImage1 from '../assets/images/hero-1.jpg';
import heroImage2 from '../assets/images/hero-2.jpg';
import heroImage3 from '../assets/images/hero-3.jpg';
import aboutImage from '../assets/images/about.jpg';
import service1 from '../assets/images/service-1.jpg';
import service2 from '../assets/images/service-2.jpg';
import service3 from '../assets/images/service-3.jpg';
import project1 from '../assets/images/project-1.jpg';
import project2 from '../assets/images/project-2.jpg';
import project3 from '../assets/images/project-3.jpg';
import project4 from '../assets/images/project-4.jpg';
import team1 from '../assets/images/team-1.jpg';
import team2 from '../assets/images/team-2.jpg';
import team3 from '../assets/images/team-3.jpg';
import team4 from '../assets/images/team-4.jpg';
import testimonial1 from '../assets/images/testimonial-1.jpg';
import testimonial2 from '../assets/images/testimonial-2.jpg';
import blog1 from '../assets/images/blog-1.jpg';
import blog2 from '../assets/images/blog-2.jpg';
import blog3 from '../assets/images/blog-3.jpg';

const Home = () => {
  useEffect(() => {
    // Initialize AOS animation
    AOS.init({
      duration: 1000,
      once: true
    });

    // Initialize hero slider
    new Swiper('.hero-slider', {
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    });

    // Initialize testimonial slider
    new Swiper('.testimonial-slider', {
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      slidesPerView: 1,
      spaceBetween: 30,
      breakpoints: {
        768: {
          slidesPerView: 2
        },
        992: {
          slidesPerView: 3
        }
      }
    });
  }, []);

  return (
    <main>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-slider swiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide" style={{ backgroundImage: `url(${heroImage1})` }}>
              <div className="container">
                <div className="row">
                  <div className="col-lg-8">
                    <div className="hero-content" data-aos="fade-up">
                      <h1>We Build Your Dream</h1>
                      <p>We are professional construction company with 25 years of experience.</p>
                      <div className="hero-btn">
                        <Link to="/about" className="btn btn-primary">Learn More</Link>
                        <Link to="/contact" className="btn btn-outline">Contact Us</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide" style={{ backgroundImage: `url(${heroImage2})` }}>
              <div className="container">
                <div className="row">
                  <div className="col-lg-8">
                    <div className="hero-content" data-aos="fade-up">
                      <h1>Quality Construction Services</h1>
                      <p>We provide the best construction services for residential and commercial projects.</p>
                      <div className="hero-btn">
                        <Link to="/services" className="btn btn-primary">Our Services</Link>
                        <Link to="/contact" className="btn btn-outline">Get A Quote</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide" style={{ backgroundImage: `url(${heroImage3})` }}>
              <div className="container">
                <div className="row">
                  <div className="col-lg-8">
                    <div className="hero-content" data-aos="fade-up">
                      <h1>Expert Construction Team</h1>
                      <p>Our experienced team is dedicated to delivering excellence in every project.</p>
                      <div className="hero-btn">
                        <Link to="/projects" className="btn btn-primary">Our Projects</Link>
                        <Link to="/contact" className="btn btn-outline">Contact Us</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-pagination"></div>
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section section-padding">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6" data-aos="fade-right">
              <div className="about-img">
                <img src={aboutImage} alt="About Us" className="img-fluid" />
                <div className="experience">
                  <h2>25</h2>
                  <span>Years of Experience</span>
                </div>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-left">
              <div className="about-content">
                <div className="section-heading">
                  <span className="subtitle">About Us</span>
                  <h2>We Are The Best Construction Company</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis,
                    pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
                <div className="about-features">
                  <div className="feature-item">
                    <div className="feature-icon">
                      <i className="fas fa-trophy"></i>
                    </div>
                    <div className="feature-text">
                      <h4>Award Winning</h4>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                  </div>
                  <div className="feature-item">
                    <div className="feature-icon">
                      <i className="fas fa-users"></i>
                    </div>
                    <div className="feature-text">
                      <h4>Expert Team</h4>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                  </div>
                  <div className="feature-item">
                    <div className="feature-icon">
                      <i className="fas fa-check-circle"></i>
                    </div>
                    <div className="feature-text">
                      <h4>Quality Work</h4>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                  </div>
                </div>
                <div className="about-btn">
                  <Link to="/about" className="btn btn-primary">Learn More</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section section-padding bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="section-heading text-center" data-aos="fade-up">
                <span className="subtitle">Our Services</span>
                <h2>We Provide Best Construction Services</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis,
                  pulvinar dapibus leo.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div className="service-item">
                <div className="service-img">
                  <img src={service1} alt="General Construction" className="img-fluid" />
                </div>
                <div className="service-content">
                  <div className="service-icon">
                    <i className="fas fa-building"></i>
                  </div>
                  <h3>General Construction</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
                  </p>
                  <Link to="/services" className="read-more">
                    Read More <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
              <div className="service-item">
                <div className="service-img">
                  <img src={service2} alt="Property Maintenance" className="img-fluid" />
                </div>
                <div className="service-content">
                  <div className="service-icon">
                    <i className="fas fa-tools"></i>
                  </div>
                  <h3>Property Maintenance</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
                  </p>
                  <Link to="/services" className="read-more">
                    Read More <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
              <div className="service-item">
                <div className="service-img">
                  <img src={service3} alt="Architectural Design" className="img-fluid" />
                </div>
                <div className="service-content">
                  <div className="service-icon">
                    <i className="fas fa-drafting-compass"></i>
                  </div>
                  <h3>Architectural Design</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
                  </p>
                  <Link to="/services" className="read-more">
                    Read More <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="services-btn text-center" data-aos="fade-up" data-aos-delay="400">
                <Link to="/services" className="btn btn-primary">All Services</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Section */}
      <section className="projects-section section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="section-heading text-center" data-aos="fade-up">
                <span className="subtitle">Our Projects</span>
                <h2>Our Latest Construction Projects</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis,
                  pulvinar dapibus leo.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div className="project-item">
                <div className="project-img">
                  <img src={project1} alt="Commercial Building" className="img-fluid" />
                </div>
                <div className="project-content">
                  <span>Commercial</span>
                  <h3>Modern Office Building</h3>
                  <Link to="/projects" className="read-more">
                    View Details <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6" data-aos="fade-up" data-aos-delay="200">
              <div className="project-item">
                <div className="project-img">
                  <img src={project2} alt="Residential Building" className="img-fluid" />
                </div>
                <div className="project-content">
                  <span>Residential</span>
                  <h3>Luxury Apartment Complex</h3>
                  <Link to="/projects" className="read-more">
                    View Details <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6" data-aos="fade-up" data-aos-delay="300">
              <div className="project-item">
                <div className="project-img">
                  <img src={project3} alt="Industrial Building" className="img-fluid" />
                </div>
                <div className="project-content">
                  <span>Industrial</span>
                  <h3>Manufacturing Plant</h3>
                  <Link to="/projects" className="read-more">
                    View Details <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6" data-aos="fade-up" data-aos-delay="400">
              <div className="project-item">
                <div className="project-img">
                  <img src={project4} alt="Infrastructure" className="img-fluid" />
                </div>
                <div className="project-content">
                  <span>Infrastructure</span>
                  <h3>Highway Bridge Construction</h3>
                  <Link to="/projects" className="read-more">
                    View Details <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="projects-btn text-center" data-aos="fade-up" data-aos-delay="500">
                <Link to="/projects" className="btn btn-primary">View All Projects</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section section-padding bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="section-heading text-center" data-aos="fade-up">
                <span className="subtitle">Our Team</span>
                <h2>Meet Our Expert Team Members</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis,
                  pulvinar dapibus leo.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div className="team-item">
                <div className="team-img">
                  <img src={team1} alt="Team Member" className="img-fluid" />
                  <div className="team-social">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                </div>
                <div className="team-content">
                  <h3>John Smith</h3>
                  <span>CEO & Founder</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="200">
              <div className="team-item">
                <div className="team-img">
                  <img src={team2} alt="Team Member" className="img-fluid" />
                  <div className="team-social">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                </div>
                <div className="team-content">
                  <h3>Sarah Johnson</h3>
                  <span>Project Manager</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="300">
              <div className="team-item">
                <div className="team-img">
                  <img src={team3} alt="Team Member" className="img-fluid" />
                  <div className="team-social">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                </div>
                <div className="team-content">
                  <h3>Michael Brown</h3>
                  <span>Civil Engineer</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="400">
              <div className="team-item">
                <div className="team-img">
                  <img src={team4} alt="Team Member" className="img-fluid" />
                  <div className="team-social">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                </div>
                <div className="team-content">
                  <h3>Emily Davis</h3>
                  <span>Architect</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="testimonial-section section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="section-heading text-center" data-aos="fade-up">
                <span className="subtitle">Testimonials</span>
                <h2>What Our Clients Say</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis,
                  pulvinar dapibus leo.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="testimonial-slider swiper" data-aos="fade-up">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="testimonial-item">
                      <div className="testimonial-icon">
                        <i className="fas fa-quote-left"></i>
                      </div>
                      <div className="testimonial-text">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper
                          mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                      </div>
                      <div className="testimonial-author">
                        <div className="author-img">
                          <img src={testimonial1} alt="Testimonial Author" className="img-fluid" />
                        </div>
                        <div className="author-info">
                          <h4>Robert Wilson</h4>
                          <span>Property Developer</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="testimonial-item">
                      <div className="testimonial-icon">
                        <i className="fas fa-quote-left"></i>
                      </div>
                      <div className="testimonial-text">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper
                          mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                      </div>
                      <div className="testimonial-author">
                        <div className="author-img">
                          <img src={testimonial2} alt="Testimonial Author" className="img-fluid" />
                        </div>
                        <div className="author-info">
                          <h4>Jennifer Clark</h4>
                          <span>Business Owner</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="testimonial-item">
                      <div className="testimonial-icon">
                        <i className="fas fa-quote-left"></i>
                      </div>
                      <div className="testimonial-text">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper
                          mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                      </div>
                      <div className="testimonial-author">
                        <div className="author-img">
                          <img src={testimonial1} alt="Testimonial Author" className="img-fluid" />
                        </div>
                        <div className="author-info">
                          <h4>David Thompson</h4>
                          <span>Real Estate Agent</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-pagination"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="blog-section section-padding bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="section-heading text-center" data-aos="fade-up">
                <span className="subtitle">Our Blog</span>
                <h2>Latest News & Articles</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis,
                  pulvinar dapibus leo.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div className="blog-item">
                <div className="blog-img">
                  <img src={blog1} alt="Blog" className="img-fluid" />
                  <div className="blog-date">
                    <span>15</span>
                    <span>Jan</span>
                  </div>
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <span><i className="fas fa-user"></i> Admin</span>
                    <span><i className="fas fa-comments"></i> 3 Comments</span>
                  </div>
                  <h3>
                    <Link to="/blog">The Importance of Quality Materials in Construction</Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
                  </p>
                  <Link to="/blog" className="read-more">
                    Read More <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
              <div className="blog-item">
                <div className="blog-img">
                  <img src={blog2} alt="Blog" className="img-fluid" />
                  <div className="blog-date">
                    <span>20</span>
                    <span>Jan</span>
                  </div>
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <span><i className="fas fa-user"></i> Admin</span>
                    <span><i className="fas fa-comments"></i> 5 Comments</span>
                  </div>
                  <h3>
                    <Link to="/blog">Top 10 Safety Tips for Construction Projects</Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
                  </p>
                  <Link to="/blog" className="read-more">
                    Read More <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
              <div className="blog-item">
                <div className="blog-img">
                  <img src={blog3} alt="Blog" className="img-fluid" />
                  <div className="blog-date">
                    <span>25</span>
                    <span>Jan</span>
                  </div>
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <span><i className="fas fa-user"></i> Admin</span>
                    <span><i className="fas fa-comments"></i> 2 Comments</span>
                  </div>
                  <h3>
                    <Link to="/blog">Sustainable Construction: Building for the Future</Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
                  </p>
                  <Link to="/blog" className="read-more">
                    Read More <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="blog-btn text-center" data-aos="fade-up" data-aos-delay="400">
                <Link to="/blog" className="btn btn-primary">View All Posts</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CallToAction />
    </main>
  );
};

export default Home;