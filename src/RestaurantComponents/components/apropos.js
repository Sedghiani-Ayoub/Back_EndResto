import React, { Component } from 'react'



class Apropos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            titre: "who we are ?",
            contact: {
                nom: "Golden Restaurant",
                email: "contact@Goldenrestaurant.com",
                logo: 'logo192.png'
            },
        }
    }
    render() {
        return (
            <div>
                <div className="card" style={{ background: 'linear-gradient(to bottom, #FFD700, #FFA500)' }}>
                    <div className="card-header">
                        <h2><label>{this.state.titre}</label></h2>
                    </div>

                    <div className="row p-2">
                        <div className="col col-auto">
                            <img width={150} src={this.state.contact.logo} alt="" />
                        </div>
                        <div className="col">
                            <ul className="list-group">
                                <li className="list-group-item">{this.state.contact.nom}</li>
                                <li className="list-group-item">{this.state.contact.email}</li>
                            </ul>
                        </div>

                    </div>

                </div>
                <div className="container mt-5 card ">
                    <div className="row">
                        <div className="col-md-8 offset-md-2">
                            <h2 className="text-center">You are Welcome</h2>
                            <p className="text-center">
                                to our restaurant, where the culinary journey of your dreams begins. Our website is your canvas, allowing you to craft your own unique dining establishment. We understand that every restaurant is a reflection of its creator's vision, and that's why we offer a template that empowers you to bring your restaurant concept to life.
                            </p>
                            <p className="text-center">
                                With us, you're not just building a restaurant; you're creating an experience. Our platform allows you to design various departments, each with its own charm and character. Whether you want to establish a cozy cafe, a sophisticated fine dining restaurant, a lively bar, or a bustling kitchen, the possibilities are endless.
                            </p>
                            <p className="text-center">
                                Explore our range of categories and menus, each carefully crafted to cater to diverse tastes and preferences. From savory appetizers to decadent desserts, from exotic cocktails to exquisite wines, you have the freedom to curate a menu that delights your customers' palates.
                            </p>
                            <p className="text-center">
                                We understand the importance of every detail, from the ambiance to the presentation of your dishes. Our platform provides you with the tools to customize your restaurant's decor, layout, and branding, ensuring that it aligns perfectly with your vision. You can even create a unique logo and branding materials that capture the essence of your establishment.
                            </p>
                            <p className="text-center">
                                The success of your restaurant is our priority, and we offer a range of features to help you manage your business efficiently. From reservation systems to inventory tracking, we've got you covered.
                            </p>
                            <p className="text-center">
                                So, whether you're a seasoned restaurateur or a passionate food enthusiast, our website template is your blank canvas. Create, innovate, and watch your restaurant come to life. Welcome to the world of endless possibilities.
                            </p>
                        </div>
                    </div>
                </div>
            </div>);
    }
}

export default Apropos;