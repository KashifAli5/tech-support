import React from 'react';

// Components
import FooterCopyRight from './footerCopyright';
import SearchBar from '../header/SearchBar';

const Footer = () => {
	return (
		<div className="footer_section_main pt-5">
			<div className="row text-center footer_menu_main">
				<div className="col-lg-4 col-md-4">
					<ul>
						<li> About Us </li>
						<li> Help </li>
						<li> Privacy Policy </li>
						<li> terms and conditions </li>
					</ul>
				</div>
				<div className="col-lg-4 col-md-4">
					<ul>
						<li> Home </li>
						<li> Pricing </li>
						<li> Contact Us </li>
						<li> Features </li>
					</ul>
				</div>
				<div className="col-lg-4 col-md-4">
					<SearchBar />
				</div>
			</div>
			<FooterCopyRight />
		</div>
	)
}


export default Footer;