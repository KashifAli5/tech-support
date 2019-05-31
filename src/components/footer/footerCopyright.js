import React from 'react';


const FooterCopyRight = () => {
	return (
		<div>
		<hr />	
			<div className="footer_copy_right_main row">
				<div className="col-lg-3 col-md-4 footer_cr_text">
					<span> Copy right © Devtron Genesis 2019 </span>
				</div>
				<div className="col-lg-3 col-md-3 footer_cr_links">
					<span> Help </span> &nbsp; &nbsp; &nbsp; <span> Privacy </span>  &nbsp; &nbsp; &nbsp; <span> Terms </span>
				</div>
				<div className="col-lg-5 col-md-5 footer_cr_icons">
					<i class="fa fa-twitter"></i>  &nbsp; &nbsp; &nbsp; 
					<i class="fa fa-facebook-square"></i>  &nbsp; &nbsp; &nbsp; 
					<i class="fa fa-google-plus"></i>  &nbsp; &nbsp; &nbsp; 
					<i class="fa fa-linkedin"></i>  &nbsp; &nbsp; &nbsp; 
				</div>
			</div>
		</div>
	)
}


export default FooterCopyRight;