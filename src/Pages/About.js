import React from 'react'
import NavigationBar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Apple from "../Assets/Apple store.png"
import Playstore from "../Assets/play_store.png"
import restaurants from "../Assets/resturant.png"
import doublephone from "../Assets/double-phone.png"
import dish1 from "../Assets/dish1.png"
import dishes2 from "../Assets/dishes2.png"

import about_1 from "../Assets/about_1.png"
import about_2 from "../Assets/about_2.png"
import about_3 from "../Assets/about_3.jpg"
import about_4 from "../Assets/about_4.png"


import man from "../Assets/man.png"
import "../Styles/about.css"


const About = () => {
    return (
        <div>
            <NavigationBar />

            <div className='container'>
                <div className="banner main-focus row">

                    <div className="header-text col-md-6">
                        <h3 className="connecting_food best-foods ">
                            Making food accessible by breaking the monopoly through homemade meals.
                        </h3>

                        <p className='sub-text'>
                            Maybe one day, while the amazing aroma comes out of your neighbour’s kitchen,
                            rather than dreaming of the food being prepared,
                            you will open kitchly and place an order for sme of that wonderful food.
                        </p>

                    </div>

                    <div className="food-images col-md-5">
                        <img className='food-plate doublephone' src={about_1} alt="" />
                    </div>

                </div>



                <div className="banner main-focus row">

                    <div className="header-text col-md-6">
                        <h3 className="connecting_food best-foods ">
                            Making food accessible by breaking the monopoly through homemade meals.
                        </h3>

                        <p className='sub-text'>
                            Maybe one day, while the amazing aroma comes out of your neighbour’s kitchen,
                            rather than dreaming of the food being prepared,
                            you will open kitchly and place an order for sme of that wonderful food.
                        </p>

                    </div>

                    <div className="food-images col-md-5">
                        <img className='food-plate doublephone' src={about_2} alt="" />
                    </div>

                </div>




                <div className="banner main-focus row">

                <div className="food-images col-md-5">
                        <img className='food-plate doublephone' src={about_3} alt="" />
                    </div>


                    <div className="header-text col-md-6">
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








                <div className="banner main-focu row">

                    <div className="food-images col-md-5">
                        <img className='food-plate doublephone' src={about_4} alt="" />
                    </div>


                    <div className="header-text col-md-7">
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