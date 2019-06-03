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
		</div>
	)
}



export default Features;