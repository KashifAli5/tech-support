import React from 'react';


const Features = () => {
	return (
		<div className="feature-section-main">
			<div className="row features-first-section">
				<div className="col-lg-6 col-md-6 feature-first-left">
					<div className="text-center mt-5">
						<div className="display-3"><abbr title="We Provide Smart Solutions"> Smart Solutions </abbr></div>
						<br />
						<div className="h3"> The standard Lorem Ipsum passage, since the 1500s</div>
						<br />
						<br />

						<p className="lead"> 
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
							sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
							Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
							ut aliquip ex ea commodo consequat.
						</p> 
					</div>
				</div>
				<div className="col-lg-6 col-md-6 feature-first-right">
					<div className="right-section-image">
						<img src="images/front-page/mock-main.svg" />
					</div>
				</div>
			</div>
		{/* Second feature SEction */}
		<hr className="card_section_start_line"/>
		<div className="row features-second-section">
				<div className="col-lg-6 col-md-6 feature-second-left">
					<div className="left-section-image">
						<img src="images/front-page/drawkit.jpg" />
					</div>
					
				</div>
				<div className="col-lg-6 col-md-6 feature-second-right">
					<div className="text-center mt-5">
						<div className="display-3"><abbr title="We Provide Best value services"> Value services </abbr></div>
						<br />
						<div className="h3"> 1914 translation by H. Rackham</div>
						<br />
						<br />

						<p className="lead"> 
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
							sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
							Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
							ut aliquip ex ea commodo consequat.
						</p> 
					</div>
				</div>
			</div>


		</div>
	)
}



export default Features;