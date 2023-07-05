import React from 'react'
import NavigationBar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Food from "../Assets/food 2.png"
import Apple from "../Assets/Apple store.png"
import Playstore from "../Assets/image 23.png"
import chef1 from "../Assets/chef 1.png"
import chef2 from "../Assets/chef 2.png"
import restaurants from "../Assets/resturant.png"
import doublephone from "../Assets/double-phone.png"
import dish1 from "../Assets/dish1.png"
import dishes2 from "../Assets/dishes2.png"



import man from "../Assets/man.png"
import "../Styles/about.css"


const About = () => {
    return (
        <div>
            <NavigationBar />

            <div className='container'>
                <div className="banner">
                    <div className="header-text">
                        <h3 className="connecting_food best-foods ">
                            Best foods are cooked in our local kitchens in local ways.
                        </h3>

                        <p className='sub-text'>
                            Kitchly an online  food marketplace for all.
                            We aim to revolutionize the food industry from the ground up.
                            Our mission is to redefine who can actively partake in the food economy.
                        </p>

                    </div>
                    <div className="food-images vendor">
                        <div>
                            <img className='food-plate chef1' src={chef1} alt="" />
                        </div>
                        <div className='photo'>
                            <img className='food-plate chef2' src={chef2} alt="" />
                            <img className='food-plate resturant' src={restaurants} alt="" />
                        </div>
                    </div>
                </div>



                <div className="banner main-focus">
                    <div className="header-text">
                        <h3 className="connecting_food best-foods ">
                            The main focus of kitchly
                        </h3>

                        <p className='sub-text'>
                            Our focus is to bring homemade food online; local kitchens, private kitchen,
                            village kitchens and food stands. the vision is to make food accessible to everyone,
                            anywhere, anytime at the most affordable rate and
                            give everyone who loves to cook the opportunity to start a venture for themselves
                        </p>

                    </div>
                    <div className="food-images">
                        <img className='food-plate chef1' src={man} alt="" />
                    </div>
                </div>


                <div className="banner main-focus">

                    <div className="food-images">
                        <img className='food-plate dishes' src={dish1} alt="" />
                        <img className='food-plate dishes' src={dishes2} alt="" />
                    </div>


                    <div className="header-text">
                        <h3 className="connecting_food best-foods ">
                        “No restaurant or hotel can bring you Grandma’s recipe, but the local Kitchens can!”
                        </h3>
                    </div>

                </div>



                <div className="banner">
                    <div className="header-text">
                        <h3 className="connecting_food best-foods ">
                            Best foods are cooked in our local kitchens in local ways.
                        </h3>

                        <p className='sub-text'>
                            Kitchly an online  food marketplace for all.
                            We aim to revolutionize the food industry from the ground up.
                            Our mission is to redefine who can actively partake in the food economy.
                        </p>

                    </div>
                    <div className="food-images vendor">
                        <div>
                            <img className='food-plate chef1' src={chef1} alt="" />
                        </div>
                        <div className='photo'>
                            <img className='food-plate chef2' src={chef2} alt="" />
                            <img className='food-plate resturant' src={restaurants} alt="" />
                        </div>
                    </div>
                </div>





                <div className="banner main-focus">

                    <div className="food-images">
                        <img className='food-plate doublephone' src={doublephone} alt="" />
                    </div>


                    <div className="header-text">
                        <h3 className="connecting_food best-foods ">
                            Making food accessible by breaking the monopoly through homemade meals.
                        </h3>

                        <p className='sub-text'>
                            Maybe one day, while the amazing aroma comes out of your neighbour’s kitchen,
                            rather than dreaming of the food being prepared,
                            you will open kitchly and place an order for sme of that wonderful food.
                        </p>

                    </div>

                </div>
            </div>



            <Footer />
        </div>
    )
}

export default About