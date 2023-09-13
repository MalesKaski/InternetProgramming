import './App.css';
import { Helmet } from "react-helmet"

function App() {

  return (
    <>
      <Helmet>
        <script src="script/script.js"></script>
      </Helmet>
    <div>
      <header class="header">
        <a href="#" class="logo">QSoftware</a>

        <div class="btn" id="language-icon">pl</div>
        <div class="bx bx-moon" id="darkMode-icon"></div>

        <div class="bx bx-menu" id="menu-icon"></div>

        <nav class="navbar">
            <a href="#home" class="active">Home</a>
            <a href="#about">About</a>
            <a href="#education">Education</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>

            <span class="active-nav"></span>
        </nav>
      </header>

      <section class="home" id="home">
          <div class="home-content">
              <h1>Hi, I'm <span>Kamil Maleszko</span></h1>
              <div class="text-animate">
                  <h3>QA Engineer</h3>
              </div>
              <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </p>

              <div class="btn-box">
                  <a href="#" class="btn">Hire me</a>
                  <a href="#" class="btn">Let's Talk</a>
              </div>
          </div>
              
          <div class="home-sci">
              <a href="#" class=""><i class='bx bxl-facebook' ></i></a>
              <a href="#" class=""><i class='bx bxl-linkedin' ></i></a>
              <a href="#" class=""><i class='bx bxs-envelope' ></i></a>
              <a href="#" class=""><i class='bx bx-mobile-alt' ></i></a>
          </div>

          <div class="home-imgHover"></div>
      </section>
        
      <section class="about" id="about">
          <h2 class="heading">About <span>Me</span></h2>

          <div class="about-img">
              <img src="img/Portret.jpg" alt=""/>
              <span class="circle-spin"></span>
          </div>

          <div class="about-content">
              <h3>QA Engineer</h3>
              <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>

              <div class="btn-box btns">
                  <a href="#" class="btn">Read More</a>
              </div>
          </div>
      </section>
          
      <section class="education" id="education">
          <h2 class="heading">My <span>Journey</span></h2>

          <div class="education-row">
              <div class="education-column">
                  <h3 class="title">Education</h3>

                  <div class="education-box">
                      <div class="education-content">
                          <div class="content">
                              <div class="year"><i class='bx bx-calendar' ></i>2016-2018</div>
                              <h3>Master Degree</h3>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                          </div>
                      </div>
                      <div class="education-content">
                          <div class="content">
                              <div class="year"><i class='bx bx-calendar' ></i>2018-2020</div>
                              <h3>Master Degree</h3>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                          </div>
                      </div>
                      <div class="education-content">
                          <div class="content">
                              <div class="year"><i class='bx bx-calendar' ></i>2019-now</div>
                              <h3>Master Degree</h3>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                          </div>
                      </div>
                  </div>
                  
              </div>

              <div class="education-column">
                  <h3 class="title">Experience</h3>

                  <div class="education-box">
                      <div class="education-content">
                          <div class="content">
                              <div class="year"><i class='bx bx-calendar' ></i>2016-2018</div>
                              <h3>Master Degree</h3>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                          </div>
                      </div>
                      <div class="education-content">
                          <div class="content">
                              <div class="year"><i class='bx bx-calendar' ></i>2018-2020</div>
                              <h3>Master Degree</h3>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                          </div>
                      </div>
                      <div class="education-content">
                          <div class="content">
                              <div class="year"><i class='bx bx-calendar' ></i>2019-now</div>
                              <h3>Master Degree</h3>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
        
      <section class="skills" id="skills">
          <h2 class="heading">My<span>Skills</span></h2>

          <div class="skills-row">
              <div class="skills-column">
                  <h3 class="title">Coding Skills</h3>

                  <div class="skills-box">
                      <div class="skills-content">
                          <div class="progress">
                              <h3>Master Degree<span>10%</span></h3>
                              <div class="bar"><span></span></div>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                          </div>
                          <div class="progress">
                              <h3>Master Degree<span>20%</span></h3>
                              <div class="bar"><span></span></div>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                          </div>
                          <div class="progress">
                              <h3>Master Degree<span>30%</span></h3>
                              <div class="bar"><span></span></div>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                          </div>
                      </div>
                  </div>
              </div>

              <div class="skills-column">
                  <h3 class="title">Professional Skills</h3>

                  <div class="skills-box">
                      <div class="skills-content">
                          <div class="progress">
                              <h3>Master Degree<span>30%</span></h3>
                              <div class="bar"><span></span></div>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                          </div>
                          <div class="progress">
                              <h3>Master Degree<span>60%</span></h3>
                              <div class="bar"><span></span></div>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                          </div>
                          <div class="progress">
                              <h3>Master Degree<span>90%</span></h3>
                              <div class="bar"><span></span></div>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
        
      <section class="contact" id="contact">
          <h2 class="heading">Contact <span>Me!</span></h2>

          <form action="#">
              <div class="input-box">
                  <div class="input-field">
                      <input type="text" placeholder="Full Name" required/>
                      <span class="focus"></span>
                  </div>

                  <div class="input-field">
                      <input type="text" placeholder="Email Address" required/>
                      <span class="focus"></span>
                  </div>
              </div>

              <div class="input-box">
                  <div class="input-field">
                      <input type="text" placeholder="Mobile Number" required/>
                      <span class="focus"></span>
                  </div>

                  <div class="input-field">
                      <input type="text" placeholder="Email Subject" required/>
                      <span class="focus"></span>
                  </div>
              </div>

              <div class="textarea-field">
                  <textarea name="" id="" cols="30" rows="10" placeholder="Your Message" required></textarea>
                  <span class="focus"></span>
              </div>

              <div class="btn-box btns">
                  <button type="submit" class="btn">Submit</button>
              </div>
          </form>
      </section>
          
      <footer class="footer">
          <div class="footer-text">
              <p>Copyright &copy; 2023 by QSoftware | All Rights Reserved.</p>
          </div>

          <div class="footer-iconTop">
              <a href="#"><i class='bx bxs-download' ></i></a>
          </div>
      </footer>
    </div>
    </>
  );
}

export default App;