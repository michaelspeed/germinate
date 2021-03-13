import { Suspense } from "react"
import { Link, BlitzPage, useMutation } from "blitz"
import Layout from "app/core/layouts/Layout"

const Home: BlitzPage = () => {
  return (
    <div >
      <section className="home-section bg-dark-alfa-90 parallax-2"
               data-background="img/bg.jpg" id="home">
        <div className="js-height-full">


          <div className="home-content container">
            <div className="home-text">

              <h1 className="hs-line-8 font-alt mb-50 mb-xs-30">Unique experience with</h1>
              <h2 className="hs-line-11 font-alt mb-50 mb-xs-30"> Germinate Group </h2>

              <div className="local-scroll">
                <a href="#about" className="btn btn-mod btn-w btn-medium btn-round hidden-xs">See More</a>
                <a href="#contact" className="btn btn-mod btn-w btn-medium btn-round hidden-xs" style={{marginLeft: 10}}>Contact US</a>
                <span className="hidden-xs">&nbsp;</span>
              </div>

            </div>
          </div>



          <div className="local-scroll">
            <a href="#about" className="scroll-down"><i className="fa fa-angle-down scroll-down-icon"></i><span
              className="sr-only">Scroll to the next section</span></a>
          </div>


        </div>
      </section>

      <section className="page-section" id="about">
        <div className="container relative">

          <h2 className="section-title font-alt align-left mb-70 mb-sm-40">
            About Germinate Group

            <a href="#" className="section-more right">More about us <i className="fa fa-angle-right"></i></a>

          </h2>

          <div className="section-text">
            <div className="row">

              <div className="col-md-6 col-sm-6 mb-sm-50 mb-xs-30">
                Germinate group is dedicated to facilitating a gateway to the fashion world, from creation to consumer and also promoting the culture and tradition of Assam. It offers solutions that seamlessly connect and associate fashion's key constituents and corporate brands using priceless resources, influence and expertise.
              </div>

              <div className="col-md-6 col-sm-6 mb-sm-50 mb-xs-30">
                Within the fashion industry Germinate group represents the top models, leading designers, renowned photographers, makeup artist, choreographers and the most influential event directors, art directors and stylists of Assam and expanding to entire Northeast India. In the contempory era, Germinate group produces the leading fashion events and corporate events around the state of Assam and represents many of the industry's top organizations and federations and works with various local and national governments, creating regional and international fashion platforms.
              </div>

            </div>
          </div>

        </div>
      </section>


      <hr className="mt-0 mb-0 " />


      <section className="page-section" id="services">
        <div className="container relative">

          <h2 className="section-title font-alt mb-70 mb-sm-40">
            Services
          </h2>


          <ul className="nav nav-tabs tpl-alt-tabs font-alt pt-30 pt-sm-0 pb-30 pb-sm-0">
            <li className="active">
              <a href="#service-branding" data-toggle="tab">

                <div className="alt-tabs-icon">
                  <span className="icon-strategy"></span>
                </div>

                EVENT MANAGEMENT
              </a>
            </li>
          </ul>


          <div className="tab-content tpl-tabs-cont">


            <div className="tab-pane fade in active" id="service-branding">

              <div className="section-text">
                <div className="row">
                  <div className="col-md-12 mb-md-40 mb-xs-30">
                    <blockquote className="mb-0">
                      <p>
                        Our mission is to help our clients develop a clear vision of what they wish to achieve, and to create and execute a complete solution that brings their vision into reality using proven strategies, innovative ideas, limitless resources, and professional expertise in the event management and function planning industry. We empower event professionals, by simplifying guest management complexity and by connecting people to successful events.
                      </p>
                    </blockquote>
                  </div>
                </div>
              </div>

            </div>


            <div className="tab-pane fade" id="service-web-design">

              <div className="section-text">
                <div className="row">
                  <div className="col-md-4 mb-md-40 mb-xs-30">
                    <blockquote className="mb-0">
                      <p>
                        It&nbsp;doesn&rsquo;t matter how many times&nbsp;I have to&nbsp;click, as&nbsp;long
                        as&nbsp;each click is&nbsp;a&nbsp;mindless, unambiguous choice.
                      </p>
                      <footer>
                        Steve Krug
                      </footer>
                    </blockquote>
                  </div>
                  <div className="col-md-4 col-sm-6 mb-sm-50 mb-xs-30">
                    Cras mi tortor, laoreet id ornare et, accumsan non magna. Maecenas vulputate accumsan velit.
                    Curabitur a nulla ex. Nam a tincidunt ante. Vitae gravida turpis. Vestibulum varius
                    nulla non nulla scelerisque tristique.
                  </div>
                  <div className="col-md-4 col-sm-6 mb-sm-50 mb-xs-30">
                    Mauris id viverra augue, eu porttitor diam. Praesent faucibus est a interdum elementum.
                    Nam varius at ipsum id dignissim. Nam a tincidunt ante lorem. Pellentesque suscipit ante
                    at ullamcorper pulvinar neque porttitor.
                  </div>
                </div>
              </div>

            </div>


            <div className="tab-pane fade" id="service-graphic">

              <div className="section-text">
                <div className="row">
                  <div className="col-md-4 mb-md-40 mb-xs-30">
                    <blockquote className="mb-0">
                      <p>
                        Never fall in&nbsp;love with an&nbsp;idea. They&rsquo;re whores. If&nbsp;the one you&rsquo;re
                        with isn&rsquo;t doing the job, there&rsquo;s always another.
                      </p>
                      <footer>
                        Chip Kidd
                      </footer>
                    </blockquote>
                  </div>
                  <div className="col-md-4 col-sm-6 mb-sm-50 mb-xs-30">
                    Lorem ipsum dolor sit semper amet, consectetur adipiscing elit. In maximus ligula metus pellentesque
                    mattis. Donec vel ultricies purus. Nam dictum sem, ipsum aliquam . Praesent sed nisi eleifend,
                    fermentum orci amet, iaculis libero.
                  </div>
                  <div className="col-md-4 col-sm-6 mb-sm-50 mb-xs-30">

                    Pellentesque suscipit ante at ullamcorper pulvinar neque porttitor. Integer lectus. Etiam sit amet
                    fringilla lacus. Maecenas volutpat, diam enim sagittis quam, id porta quam. Sed id&nbsp;dolor
                    consectetur fermentum volutpat nibh, accumsan purus.
                  </div>
                </div>
              </div>

            </div>


            <div className="tab-pane fade" id="service-development">

              <div className="section-text">
                <div className="row">
                  <div className="col-md-4 mb-md-40 mb-xs-30">
                    <blockquote className="mb-0">
                      <p>
                        All that is&nbsp;valuable in&nbsp;human society depends upon the opportunity for development
                        accorded the individual.
                      </p>
                      <footer>
                        Albert Einstein
                      </footer>
                    </blockquote>
                  </div>
                  <div className="col-md-4 col-sm-6 mb-sm-50 mb-xs-30">
                    Fusce hendrerit vitae nunc id gravida. Donec euismod quis ante at mattis. Mauris dictum ante sit
                    amet enim interdum semper. Vestibulum odio justo, faucibus et dictum eu, malesuada nec neque.
                    Maecenas volutpat, diam enim sagittis.
                  </div>
                  <div className="col-md-4 col-sm-6 mb-sm-50 mb-xs-30">
                    Pellentesque suscipit ante at ullamcorper pulvinar neque porttitor. Sed id dolor consectetur
                    fermentum
                    volutpat nibh, accumsan purus. Lorem ipsum dolor sit semper amet, consectetur adipiscing elit.
                    Inmed maximus ligula metus pellentesque.
                  </div>
                </div>
              </div>

            </div>


            <div className="tab-pane fade" id="service-photography">

              <div className="section-text">
                <div className="row">
                  <div className="col-md-4 mb-md-40 mb-xs-30">
                    <blockquote className="mb-0">
                      <p>
                        Photography is&nbsp;the simplest thing in&nbsp;the world, but it&nbsp;is&nbsp;incredibly
                        complicated to&nbsp;make it&nbsp;really work.
                      </p>
                      <footer>
                        Martin Parr
                      </footer>
                    </blockquote>
                  </div>
                  <div className="col-md-4 col-sm-6 mb-sm-50 mb-xs-30">
                    Donec vel ultricies purus. Nam dictum sem, ipsum aliquam . Etiam sit amet fringilla lacus.
                    Pellentesque suscipit ante at ullamcorper pulvinar neque porttitor. Integer lectus.
                    Praesent sed nisi eleifend, fermentum orci amet, iaculis libero.
                  </div>
                  <div className="col-md-4 col-sm-6 mb-sm-50 mb-xs-30">
                    Maecenas volutpat, diam enim sagittis quam, id porta quam. Sed id dolor consectetur fermentum
                    volutpat nibh, accumsan purus. Lorem ipsum dolor sit semper amet, consectetur adipiscing elit.
                    In maximus ligula metus pellentesque mattis.
                  </div>
                </div>
              </div>

            </div>


          </div>


          <div className="align-center">
            <a href="pages-services-1.html" className="section-more font-alt">View all services <i
              className="fa fa-angle-right"></i></a>
          </div>

        </div>
      </section>


      <section className="page-section pt-0 pb-0 banner-section bg-dark-alfa-90"
               data-background="img/bg.jpg" id="work">
        <div className="container relative">

          <div className="row">

            <div className="col-sm-6">

              <div className="mt-140 mt-lg-80 mb-140 mb-lg-80">
                <div className="banner-content">
                  <h3 className="banner-heading font-alt">What We Do?</h3>
                  <div className="banner-decription">
                    WE HANDLE VARIOUS PROJECTS LIKE:
                    - FASHION EVENT
                    -	PHOTOGRAPHY
                    -	SHORT FILMS
                    -	CORPORATE EVENTS,
                    -	INSTITUTIONAL EVENT
                    -	PRODUCT LAUNCHING
                    -	MUSIC FEST
                    -	DJ NIGHTS
                    -	ADVERTISEMENTS
                    -	CALENDER SHOOT
                    -	MAGAZINE SHOOTS
                    -	WEB SHOOTS ETC.
                  </div>
                  <div className="local-scroll">
                    <a href="pages-contact-1.html" className="btn btn-mod btn-w btn-medium btn-round">Lets talk</a>
                  </div>
                </div>
              </div>

            </div>

            <div className="col-sm-6 banner-image wow fadeInUp">
              <img src="img/9.jpeg" alt="" />
            </div>

          </div>

        </div>
      </section>

      <hr className="mt-0 mb-0" />


      <section className="page-section pb-0" id="portfolio">
        <div className="relative">

          <h2 className="section-title font-alt mb-70 mb-sm-40">
            Some of our works
          </h2>


          <ul className="works-grid work-grid-3 work-grid-gut clearfix font-alt hover-white hide-titles" id="work-grid">


            <li className="work-item">
              <a href="portfolio-single-1.html" className="work-ext-link">
                <div className="work-img">
                  <img className="work-img" src="img/2.jpg" alt="Work" style={{height: 438, objectFit: "contain"}}/>
                </div>
                <div className="work-intro">
                  <h3 className="work-title">Fashion Show</h3>
                  {/*<div className="work-descr">
                    External Page
                  </div>*/}
                </div>
              </a>
            </li>


            <li className="work-item">
              <a href="portfolio-single-1.html" className="work-ext-link">
                <div className="work-img">
                  <img className="work-img" src="img/3.jpg" alt="Work" style={{height: 438, objectFit: "contain"}}/>
                </div>
                <div className="work-intro">
                  <h3 className="work-title">Fashion Show</h3>
                  {/*<div className="work-descr">
                    External Page
                  </div>*/}
                </div>
              </a>
            </li>


            <li className="work-item">
              <a href="#" className="work-ext-link">
                <div className="work-img">
                  <img className="work-img" src="img/4.jpg" alt="Work" style={{height: 438, objectFit: "contain"}} />
                </div>
                <div className="work-intro">
                  <h3 className="work-title">Fashion Show</h3>
                  {/*<div className="work-descr">
                    External Page
                  </div>*/}
                </div>
              </a>
            </li>


          </ul>


        </div>
      </section>



      <section className="page-section" id='why'>
        <div className="container relative">

          <h2 className="section-title font-alt mb-70 mb-sm-40">
            Why Choose Us?
          </h2>


          <div className="row multi-columns-row alt-features-grid">


            <div className="col-sm-6 col-md-4 col-lg-4">
              <div className="alt-features-item align-center">
                <div className="alt-features-icon">
                  <span className="icon-flag"></span>
                </div>
                <h3 className="alt-features-title font-alt">INNOVATION</h3>
                <div className="alt-features-descr align-left">
                  We turn creative and innovative thinking into reality.
                </div>
              </div>
            </div>


            <div className="col-sm-6 col-md-4 col-lg-4">
              <div className="alt-features-item align-center">
                <div className="alt-features-icon">
                  <span className="icon-clock"></span>
                </div>
                <h3 className="alt-features-title font-alt">EXCELLENCE</h3>
                <div className="alt-features-descr align-left">
                  We strive for excellence in everything we do and are passionate about delivering quality results. We do what we love and we love what we do.
                </div>
              </div>
            </div>


            <div className="col-sm-6 col-md-4 col-lg-4">
              <div className="alt-features-item align-center">
                <div className="alt-features-icon">
                  <span className="icon-hotairballoon"></span>
                </div>
                <h3 className="alt-features-title font-alt">SPEED</h3>
                <div className="alt-features-descr align-left">
                  We work fast to succeed and we make it happen.
                </div>
              </div>
            </div>


            <div className="col-sm-6 col-md-4 col-lg-4">
              <div className="alt-features-item align-center">
                <div className="alt-features-icon">
                  <span className="icon-heart"></span>
                </div>
                <h3 className="alt-features-title font-alt">INTEGRITY</h3>
                <div className="alt-features-descr align-left">
                  We act with highest ethics, both as individuals and as an organization.
                </div>
              </div>
            </div>


            <div className="col-sm-6 col-md-4 col-lg-4">
              <div className="alt-features-item align-center">
                <div className="alt-features-icon">
                  <span className="icon-linegraph"></span>
                </div>
                <h3 className="alt-features-title font-alt">LOYALITY</h3>
                <div className="alt-features-descr align-left">
                  We achieve our goals through mutual commitment.
                </div>
              </div>
            </div>


            <div className="col-sm-6 col-md-4 col-lg-4">
              <div className="alt-features-item align-center">
                <div className="alt-features-icon">
                  <span className="icon-chat"></span>
                </div>
                <h3 className="alt-features-title font-alt">PEOPLE</h3>
                <div className="alt-features-descr align-left">
                  We value talent, unlock individual potential and reward achievement
                </div>
              </div>
            </div>


          </div>


        </div>
      </section>



      <section className="small-section bg-white">
        <div className="container relative">

          <form className="form align-center" id="mailchimp">
            <div className="row">
              <div className="col-md-8 col-md-offset-2">

                <div className="newsletter-label font-alt">
                  Stay informed with our newsletter
                </div>

                <div className="mb-20">
                  <input placeholder="Enter Your Email"
                         className="newsletter-field form-control input-md round mb-xs-10" type="email"
                         pattern=".{5,100}" required aria-required="true"/>

                    <button type="submit" aria-controls="subscribe-result"
                            className="btn btn-mod btn-medium btn-round mb-xs-10">
                      Subscribe
                    </button>
                </div>

                <div className="form-tip">
                  <i className="fa fa-info-circle"></i> Please trust us, we will never send you spam
                </div>

                <div id="subscribe-result" role="region" aria-live="polite" aria-atomic="true"></div>

              </div>
            </div>
          </form>

        </div>
      </section>


      <section className="page-section bg-white" id="contact">
        <div className="container relative">

          <h2 className="section-title font-alt mb-70 mb-sm-40">
            Find Us
          </h2>

          <div className="row">

            <div className="col-md-8 col-md-offset-2">
              <div className="row">


                <div className="col-sm-6 col-lg-4 pt-20 pb-20 pb-xs-0">
                  <div className="contact-item">
                    <div className="ci-icon">
                      <i className="fa fa-phone"></i>
                    </div>
                    <div className="ci-title font-alt">
                      Call Us
                    </div>
                    <div className="ci-text">
                      +91 813-383-1958
                    </div>
                  </div>
                </div>


                <div className="col-sm-6 col-lg-4 pt-20 pb-20 pb-xs-0">
                  <div className="contact-item">
                    <div className="ci-icon">
                      <i className="fa fa-map-marker"></i>
                    </div>
                    <div className="ci-title font-alt">
                      Address
                    </div>
                    <div className="ci-text">
                      Syndicate orchid apartment
                      Aster block,6th floor house no A04,
                      Khagen mahanta path, guwahati
                    </div>
                  </div>
                </div>


                <div className="col-sm-6 col-lg-4 pt-20 pb-20 pb-xs-0">
                  <div className="contact-item">
                    <div className="ci-icon">
                      <i className="fa fa-envelope"></i>
                    </div>
                    <div className="ci-title font-alt">
                      Email
                    </div>
                    <div className="ci-text">
                      <a href="mailto:germinateofficial@gmail.com">germinateofficial@gmail.com</a>
                    </div>
                  </div>
                </div>


              </div>
            </div>

          </div>

        </div>
      </section>


      <section className="small-section bg-dark">
        <div className="container relative">

          <div className="align-center">
            <h3 className="banner-heading font-alt">Want to discuss your new project?</h3>
            <div>
              <a href="" className="btn btn-mod btn-w btn-medium btn-round">Lets tallk</a>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}

Home.suppressFirstRenderFlicker = true
Home.getLayout = (page) => <Layout title="Home">{page}</Layout>

export default Home
