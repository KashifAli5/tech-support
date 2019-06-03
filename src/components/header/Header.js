import React from 'react';

// components
import Navbar from './Navbar';
import SearchBar from './SearchBar';

const Header = () => {
	return (
		<div>
			<div className="header_section_main">
				<Navbar /> 
				<div className="header_image row">
					
					<div className="header-section-left-side col-lg-6 col-md-6">
						<div className="header-left-side-section mt-5">
							<h1 className="header-section-heading text-center">
								Tech Suport
							</h1>
							<br />
							<br /> 
							<br /> 
							<h3 className="text-center">
								Tomorrow is for the Taking
							</h3>
							
	            			<SearchBar />

						</div>
						
					</div> 
					<div className="header-section-right-side col-lg-6 col-md-6">
						
					</div> 
					
				</div>
			
			</div>

		
			<hr />
		</div>
	)
}



export default Header;