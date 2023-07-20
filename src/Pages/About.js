import React from 'react'
import NavigationBar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Food from "../Assets/food 2.png"
import Apple from "../Assets/Apple store.png"
import Playstore from "../Assets/play_store.png"
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
                <div className="banner main-focus">

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

                    <div className="food-images">
                        <img className='food-plate doublephone' src={doublephone} alt="" />
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