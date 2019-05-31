import React from 'react';
import navbar_profile_image from "../../images/profile_dummy_img_one.png";


const Navbar = () => {
	return (
		<div className="navbar_main_section">
			{/* Navbar */}
			<nav className="mb-1 navbar navbar-expand-lg navbar-dark secondary-color lighten-1">
			  <a className="navbar-brand" href="#">Navbar</a>
			  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-555"
			    aria-controls="navbarSupportedContent-555" aria-expanded="false" aria-label="Toggle navigation">
			    <span className="navbar-toggler-icon"></span>
			  </button>
			  <div className="collapse navbar-collapse" id="navbarSupportedContent-555">
			    <ul className="navbar-nav mr-auto">
			      <li className="nav-item active">
			        <a className="nav-link" href="#">Home
			          <span className="sr-only">(current)</span>
			        </a>
			      </li>
			      <li className="nav-item">
			        <a className="nav-link" href="#">Pricing</a>
			      </li>
			      <li className="nav-item">
			        <a className="nav-link" href="#">About Us</a>
			      </li>
			      <li className="nav-item">
			        <a className="nav-link" href="#">Contact Us</a>
			      </li>
			      <li className="nav-item dropdown">
			        <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink-555" data-toggle="dropdown"
			          aria-haspopup="true" aria-expanded="false">Features
			        </a>
			        <div className="dropdown-menu dropdown-secondary" aria-labelledby="navbarDropdownMenuLink-555">
			          <a className="dropdown-item" href="#">Features One</a>
			          <a className="dropdown-item" href="#">Features Two</a>
			          <a className="dropdown-item" href="#">Features Three</a>
			          <a className="dropdown-item" href="#">Features Four</a>
			        </div>
			      </li>
			    </ul>
			    <ul className="navbar-nav ml-auto nav-flex-icons">
			      <li className="nav-item">
			        <a className="nav-link waves-effect waves-light">Profile &nbsp;
			          <i className="fa fa-envelope"></i>
			        </a>
			      </li>
			      <li className="nav-item avatar dropdown">
			        <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink-55" data-toggle="dropdown"
			          aria-haspopup="true" aria-expanded="false">
			          <img src={navbar_profile_image} className="profile_nav_img rounded-circle z-depth-0"
			            alt="avatar image" />
			        </a>
			        <div className="dropdown-menu dropdown-menu-lg-right dropdown-secondary"
			          aria-labelledby="navbarDropdownMenuLink-55">
			          <a className="dropdown-item" href="#">Action</a>
			          <a className="dropdown-item" href="#">Another action</a>
			          <a className="dropdown-item" href="#">Something else here</a>
			        </div>
			      </li>
			    </ul>
			  </div>
			</nav>
			{/* Navbar */}
		</div>
	)	
}



export default Navbar;