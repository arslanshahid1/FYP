import React,{useEffect} from 'react';

function Navbar() {
  const [scrolled,setScrolled]=React.useState(false);

  const handleScroll=() => {
    const offset=window.scrollY;
    if(offset > 150 ){
      setScrolled(true);
    }
    else{
      setScrolled(false);
    }
  }
  useEffect(() => {
    window.addEventListener('scroll',handleScroll)
  })

  let x=['navbar'];
  if(scrolled){
    x.push('scrolled');
  }
    return (


      <div className={x.join(" ")}>
          <div className="container">
        <nav className="navbar navbar-expand-lg">
  <a className="navbar-brand" href="#">Bridal</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <a className="nav-link" href="#">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Services</a>
      </li>
      <li className="nav-item">
        <a className="nav-link " href="#">Menu</a>
      </li>
      <li className="nav-item">
        <a className="nav-link " href="#">Packages</a>
      </li>
      <li className="nav-item">
        <a className="nav-link " href="#">Contact Us</a>
      </li>
    </ul>
      <button className="btn btn-outline-dark my-2 my-sm-0" type="submit">Book Now</button>
  </div>
</nav>

      </div>
     </div>
    )
}

export default Navbar
