import React from 'react';


const FooterCopyRight = () => {
	return (
		<div>
		<hr className="footer-cr-line" />	
			<div className="footer_copy_right_main row text-center">
				<div className="col-lg-4 col-md-4 footer_cr_text">
					<span> Copy right © <b>Devtron Genesis</b> 2019 </span>
				</div>
				<div className="col-lg-4 col-md-4 footer_cr_links">
					<span> Help </span> &nbsp; &nbsp; &nbsp; <span> Privacy </span>  &nbsp; &nbsp; &nbsp; <span> Terms </span>
				</div>
				<div className="col-lg-4 col-md-4 footer_cr_icons">
					<i className="fa fa-twitter"></i>  &nbsp; &nbsp; &nbsp; 
					<i className="fa fa-facebook-square"></i>  &nbsp; &nbsp; &nbsp; 
					<i className="fa fa-google-plus"></i>  &nbsp; &nbsp; &nbsp; 
					<i className="fa fa-linkedin"></i>  &nbsp; &nbsp; &nbsp; 
				</div>
			</div>
		</div>
	)
}


export default FooterCopyRight;