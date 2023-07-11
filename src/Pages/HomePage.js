import React from 'react'
import NavigationBar from '../Components/Navbar'
import Food from "../Assets/food 2.png"
import "../Styles/homePage.css"
import Apple from "../Assets/Apple store.png"
import Playstore from "../Assets/image 23.png"
import phone from "../Assets/phone.png"
import deliver from "../Assets/deliver.png"
import pickup from "../Assets/pickup.png"
import phone2 from "../Assets/phone 2.png"

import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from 'react-bootstrap/Button';
import { BsChevronCompactDown } from 'react-icons/bs';
import Footer from '../Components/Footer'



const HomePage = () => {
    return (
        <div>
            <NavigationBar />

            <div className="container">
                <div className="banner">
                    <div className="header-text">
                        <h2 className="connecting_food">
                            Connecting food lovers to Kitchens nearby
                        </h2>

                        <p className='sub-text'>
                            An online food ordering platform focused on bringing local and private kitchens online.
                            We believe that the best foods are cooked in our local kitchensAn online food
                            ordering platform focused on bringing local and private kitchens online.
                            We believe that the best foods are cooked in our local kitchens
                        </p>

                        <div className="download-btn">
                            <img src={Apple} alt="" />
                            <img src={Playstore} alt="" />
                        </div>
                    </div>
                    <div className="food-images">
                        <img className='food-plate' src={Food} alt="" />
                        <img className='food-plate' src={Food} alt="" />
                        <img className='food-plate' src={Food} alt="" />
                    </div>
                </div>




                {/* First Section */}

                <div className="first_section">
                    <div className="image">
                        <img src={phone} alt="" />
                    </div>

                    <div className="description">
                        <h2 className="title">
                            Order food from kitchen closest to you.
                        </h2>

                        <div className="list">
                            <span>
                                <p className='number'>1</p>
                            </span>
                            <div>
                                <h5>Order food from kitchen closest to you.</h5>
                                <p>Choose how you want your order to be delivered to you from kitchens closest to you.</p>
                            </div>
                        </div>

                        <div className="list">
                            <span>
                                <p className='number'>2</p>
                            </span>
                            <div>
                                <h5>Order food from kitchen closest to you.</h5>
                                <p>Choose how you want your order to be delivered to you from kitchens closest to you.</p>
                            </div>
                        </div>


                        <div className="list">
                            <span>
                                <p className='number'>3</p>
                            </span>
                            <div>
                                <h5>Order food from kitchen closest to you.</h5>
                                <p>Choose how you want your order to be delivered to you from kitchens closest to you.</p>
                            </div>
                        </div>

                        <Button variant="outline-secondary">Learn More</Button>{' '}
                    </div>
                </div>

                <div className="first_section">


                    <div className="description">
                        <h2 className="title">
                            Fast delivery because of our large network of kitchens.
                        </h2>

                        <div className="list">
                            <span>
                                <p className='number'>1</p>
                            </span>
                            <div>
                                <h5>Order food from kitchen closest to you.</h5>
                                <p>Choose how you want your order to be delivered to you from kitchens closest to you.</p>
                            </div>
                        </div>

                        <div className="list">
                            <span>
                                <p className='number'>2</p>
                            </span>
                            <div>
                                <h5>Order food from kitchen closest to you.</h5>
                                <p>Choose how you want your order to be delivered to you from kitchens closest to you.</p>
                            </div>
                        </div>


                        <div className="list">
                            <span>
                                <p className='number'>3</p>
                            </span>
                            <div>
                                <h5>Order food from kitchen closest to you.</h5>
                                <p>Choose how you want your order to be delivered to you from kitchens closest to you.</p>
                            </div>
                        </div>

                        <Button className='order-food-online-button' variant="outline-secondary">Learn More</Button>{' '}
                    </div>
                    
                    <div className="image">
                        <img src={deliver} alt="" />
                    </div>


                </div>

                <div className="first_section">
                    <div className="image">
                        <img src={pickup} alt="" />
                    </div>

                    <div className="description">
                        <h2 className="title">
                            Pickup, Eat-in or Delivery
                        </h2>

                        <div className="list">
                            <span>
                                <p className='number'>1</p>
                            </span>
                            <div>
                                <h5>Order food from kitchen closest to you.</h5>
                                <p>Choose how you want your order to be delivered to you from kitchens closest to you.</p>
                            </div>
                        </div>

                        <div className="list">
                            <span>
                                <p className='number'>2</p>
                            </span>
                            <div>
                                <h5>Order food from kitchen closest to you.</h5>
                                <p>Choose how you want your order to be delivered to you from kitchens closest to you.</p>
                            </div>
                        </div>


                        <div className="list">
                            <span>
                                <p className='number'>3</p>
                            </span>
                            <div>
                                <h5>Order food from kitchen closest to you.</h5>
                                <p>Choose how you want your order to be delivered to you from kitchens closest to you.</p>
                            </div>
                        </div>

                        <Button variant="outline-secondary">Learn More</Button>{' '}
                    </div>
                </div>







{/* FAQ */}

                <div className="frequently_asked">

                    <h2 className='header'>Frequently Asked Questions</h2>

                    <button className='drop-down'>Can I order Takeaway food with the app ?
                        <span>
                            <BsChevronCompactDown />
                        </span>
                    </button>



                    <button className='drop-down'>How can I find delivery restaurants near me?
                        <span>
                            <BsChevronCompactDown />
                        </span>
                    </button>




                    <button className='drop-down'>Can I order from multiple restaurants at once?
                        <span>
                            <BsChevronCompactDown />
                        </span>
                    </button>



                    <button className='drop-down'>Are there any promotions on food delivery?
                        <span>
                            <BsChevronCompactDown />
                        </span>
                    </button>


                    <button className='drop-down'>How long do deliveries take?
                        <span>
                            <BsChevronCompactDown />
                        </span>
                    </button>
                </div>






                <div className="banner2">
                    <div className="header-text">
                        <h2 className="connecting_food">
                        Order your home cooked Food and feel at home 
                        </h2>

                        <p className='sub-text'>
                        Scan the QR code with your phone camera 
                        to download the Kitchly kitchen Food app. 
                        Available for iOS and Android devices.
                        </p>

                    </div>
                    <div className="food-images phone_container">
                        <img className='food-plate phone' src={phone2} alt="" />
                       
                    </div>
                </div>
            </div>


            <Footer/>
        </div>
    )
}

export default HomePage;