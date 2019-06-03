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
							<div className="header-section-heading text-center display-3">
								Tech Suport
							</div>
							<br />
							<br /> 
							<br /> 
							<div className="text-center h3">
								Tomorrow is for the Taking
							</div>
							
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