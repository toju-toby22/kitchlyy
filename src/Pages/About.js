import React from 'react'
import NavigationBar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Apple from "../Assets/Apple store.png"
import Playstore from "../Assets/play_store.png"
import restaurants from "../Assets/resturant.png"
import doublephone from "../Assets/double-phone.png"
import dish1 from "../Assets/dish1.png"
import dishes2 from "../Assets/dishes2.png"

import about_1 from "../Assets/about_2.png"
import about_3 from "../Assets/about_1.png"
import about_2 from "../Assets/about_3.jpg"
import about_4 from "../Assets/about_4.png"
import phone from "../Assets/phone.png"


import man from "../Assets/man.png"
import "../Styles/about.css"


const About = () => {
    return (
        <div>
            <NavigationBar />

            <div className='container about_us'>
                <div className="banner main-focus row">

                    <div className="header-text col-md-5">
                        <h3 className="best-foods ">
                            Best foods are cooked in our local kitchens in local ways.
                        </h3>

                    </div>

                    <div className="food-images col-md-5">
                        <img className='doublephone' src={about_1} alt="" />
                    </div>

                    <div className="col-md-5">
                        <p className='sub-text'>
                            Kitchly an online  food marketplace for all.
                            We aim to revolutionize the food industry from the ground up.
                            Our mission is to redefine who can actively partake in the food economy.
                        </p>
                    </div>


                </div>



                <div className="banner main-focus row">

                    <div className="food-images col-md-5">
                        <img className='people-picture' src={about_2} alt="" />
                    </div>

                    <div className="header-text col-md-6">
                        <h3 className="best-foods ">
                            The Main Focus Of Kitchly
                        </h3>

                        <p className='sub-tex'>
                            Our focus is to bring homemade food online; local kitchens, private kitchen,
                            village kitchens and food stands. the vision is to make food accessible to everyone,
                            anywhere, anytime at the most affordable rate and
                            give everyone who loves to cook the opportunity to start a venture for themselves
                        </p>

                    </div>

                </div>

                <div className="banner main-focus row">

                    <div className="food-images col-md-5">
                        <img className='doublephone' src={about_4} alt="" />
                    </div>


                    <div className="header-text col-md-7">
                        <h3 className="best-foods ">
                            “No restaurant or hotel can bring you Grandma’s recipe, but the local Kitchens can!”
                        </h3>

                    </div>

                </div>


                <div className="banner main-focus row">


                    <div className="header-text col-md-6">
                        <h3 className="best-foods ">
                            Empowering a 80% entrepreneurs
                        </h3>
                    </div>


                    <div className="food-images col-md-5">
                        <img className='doublephone' src={about_3} alt="" />
                    </div>


                    <div className="col-md-5">
                    <p className='sub-text'>
                            We are empowering 80% of women who can cook quality meals,
                            get it delivered and earn from the comfort of their home, bringing economic diversity.
                        </p>
                    </div>

                </div>



                <div className="banner main-focus row">

                    <div className="food-images col-md-5">
                        <img className='doublephone' src={phone} alt="" />
                    </div>


                    <div className="header-text col-md-6">
                        <h3 className="best-foods ">
                            Making food accessible by breaking the monopoly through homemade meals.
                        </h3>

                        <p className='sub-tex'>
                            Maybe one day, while the amazing aroma comes out of your neighbour’s kitchen,
                            rather than dreaming of the food being prepared,
                            you will open kitchly and place an order for sme of that wonderful food.
                        </p>

                    </div>

                </div>









            </div> 



            {/* <Footer /> */}
        </div>
    )
}

export default About