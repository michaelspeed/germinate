const Header = () => {
  return (
    <nav className="main-nav dark transparent stick-fixed">
      <div className="full-wrapper relative clearfix">

        <div className="nav-logo-wrap local-scroll">
          <a href="intro.html" className="logo">
            <img src="logo.jpg" alt="Company logo" />
          </a>
        </div>
        <div className="mobile-nav" role="button" tabIndex={0}>
          <i className="fa fa-bars"></i>
          <span className="sr-only">Menu</span>
        </div>


        <div className="inner-nav desktop-nav">
          <ul className="clearlist">


            <li>
              <a href="#" className="mn-has-sub active">Home</a>
            </li>



            <li>
              <a href="#about" className="mn-has-sub">About</a>
            </li>



            <li>
              <a href="#services" className="mn-has-sub">Services</a>
            </li>



            <li>
              <a href="#work" className="mn-has-sub">Work</a>
            </li>



            <li>
              <a href="#contact" className="mn-has-sub">Contacts</a>
            </li>


          </ul>
        </div>



      </div>
    </nav>
  )
}

export default Header;
