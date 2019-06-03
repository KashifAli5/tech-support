import React, { Component } from 'react';



class Cards extends Component {
	constructor() {
		super();

		this.state = {
			categories: []
		}
	}


	componentWillMount () {
		this.setState({categories: [
			{
				id: 1,
				title: "Drupal 8",
				image: "images/cards-img/drupal_8_logo.png",
				description: "It is a long established fact that readable content of a page when looking at its layout",
				NoUser: 3947,
				nameOfCreater: "Admin ",
			},
			{
				id: 2,
				title: "Drupal 7",
				image: "images/cards-img/Drupal-7.png",
				description: "It is a long established fact that a reader will be distracted by the readable content of a page when ",
				NoUser: 9328,
				nameOfCreater: "Admin ",
			},
			{
				id: 3,
				title: "Wordpress",
				image: "images/cards-img/wordpress.png",
				description: "It is a long established fact that a reader will be distracted by  of a page when looking at its layout",
				NoUser: 23947,
				nameOfCreater: "Admin",
			},
			{
				id: 4,
				title: "React Js",
				image: "images/cards-img/React-icon.svg.png",
				description: "It is a long established fact that a eadable content of a page when looking at its layout",
				NoUser: 23947,
				nameOfCreater: "Admin",
			},
			{
				id: 5,
				title: "Node Js",
				image: "images/cards-img/Node.js_logo.svg.png",
				description: "It is a long established fact that a reader will be distracted by the readable ",
				NoUser: 23947,
				nameOfCreater: "Admin",
			},
			{
				id: 6,
				title: "Laravel",
				image: "images/cards-img/laravel-frameworkseeklogo.com_.png",
				description: "It is a long established fact that a reader will be distracted by the readable ",
				NoUser: 219237,
				nameOfCreater: "Admin",
			},
			{
				id: 7,
				title: "Boostrap 4",
				image: "images/cards-img/boostrap-4.png",
				description: "It is a long established fact that a reader will be distracted by the readable ",
				NoUser: 59227,
				nameOfCreater: "Admin",
			},
			{
				id: 8,
				title: "React & Firebase",
				image: "images/cards-img/reactwithfirebase.png",
				description: "It is a long established fact that a reader will be distracted by the readable ",
				NoUser: 23947,
				nameOfCreater: "Admin",
			},
			{
				id: 9,
				title: "React & Firebase",
				image: "images/cards-img/reactwithfirebase.png",
				description: "It is a long established fact that a reader will be distracted by the readable ",
				NoUser: 23947,
				nameOfCreater: "Admin",
			},
			{
				id: 10,
				title: "Drupal & React Js",
				image: "images/cards-img/wpis react drupal2-07 (1).jpg",
				description: "It is a long established fact that a reader will be distracted by the readable ",
				NoUser: 23947,
				nameOfCreater: "Admin",
			},
			{
				id: 11,
				title: "Wordpress & React Js",
				image: "images/cards-img/wpandreactlogos (1).jpg",
				description: "It is a long established fact that a reader will be distracted by the readable ",
				NoUser: 23947,
				nameOfCreater: "Admin",
			},
			{
				id: 12,
				title: "Jquery",
				image: "images/cards-img/0_g3ns8QALNBBH7CBA.gif",
				description: "It is a long established fact that a reader will be distracted by the readable ",
				NoUser: 23947,
				nameOfCreater: "Admin",
			},
			{
				id: 13,
				title: "Woocommerce",
				image: "images/cards-img/woocommerce.png",
				description: "It is a long established fact that a reader will be distracted by the readable ",
				NoUser: 23947,
				nameOfCreater: "Admin",
			},


		]});
	}


	render () {
		return (
			<div>
				<div className="row card-main mt-5 mb-5">
					{this.state.categories.map((category, key) => 
						<div key={key} className="col-lg-3 col-md-3 card_main_div mb-4">
							<div className=""> 
								<div className="cards_images text-center"> <img src={category.image} /></div> 
								<h3 className="text-center card-heading pt-4 pb-4"> {category.title} </h3>
								<p className="text-center pb-2"> {category.description} </p>
								<div className="pl-4 pr-4 pb-2">
									<span className="text-left"> <b>{category.nameOfCreater}</b></span>
									<span className="float-right number-of-user-icon"><img src="images/cards-img/user-group-icon.png" /> {category.NoUser}+ </span>
								</div>
							</div>
						</div>
						
					)}
				</div>
				
			</div>
		)	
	}
}



export default Cards;