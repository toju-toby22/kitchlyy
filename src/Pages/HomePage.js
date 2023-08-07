import React from 'react'
import NavigationBar from '../Components/Navbar'
import Food from "../Assets/ui_background_kitchly.png"
import "../Styles/homePage.css"
import Apple from "../Assets/Apple store.png"
import Playstore from "../Assets/play_store.png"
import phone from "../Assets/phone.png"
import deliver from "../Assets/Download our 1 (1).png"
import pickup from "../Assets/pickup.png"
import phone2 from "../Assets/phone_2.png"

import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from 'react-bootstrap/Button';
import { BsChevronCompactDown } from 'react-icons/bs';
import Footer from '../Components/Footer'
import Accordion from 'react-bootstrap/Accordion';


const HomePage = () => {
    return (
        <div>
            <NavigationBar />

            <div className="container">
                <div className="banner">
                    <div className="row">
                        <div className="col-md-6 ">
                            <div className="header-text">
                                <h2 className="connecting_food">
                                    Home-Made Meals delivered to your doorstep.
                                </h2>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="food-images">
                                <img className='food-plate' src={Food} alt="" />
                            </div>
                        </div>

                        <div className="col-md-6">
                            <p className='sub-text'>
                                Order home-made meals from verified Cooks around your community and get
                                it delivered to you. Are you feeding a large family or just for you.
                                Just tell us your cravings, we will cook it and get it delivered to you.
                                We believe the best meals are cooked in our local kitchens.
                            </p>

                            <div className="download-btn">
                                <div className="">
                                    <div className="download ">
                                        <a href="https://apps.apple.com/ng/app/kitchly-kitchen/id6449434443"><img src={Apple} alt="" /></a>
                                        <a href="https://play.google.com/store/apps/details?id=com.kitchly&pli=1"><img src={Playstore} alt="" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>




                {/* First Section */}

                <div className="first_section">
                    <div className="food-images">
                        <img className="image order_food_image" src={phone} alt="" />
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

                    <div className="food-images">
                        <img className="image order_food_image" src={deliver} alt="" />
                    </div>


                </div>
              



                <div className="first_section">
                    <div className="food-images">
                        <img className="image order_food_image" src={pickup} alt="" />
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









                {/* FAQ */}

                <div className="app_section"> <div className="frequently_asked">

                    <h2 className='header'>Frequently Asked Questions</h2>


                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Can I order Takeaway food with the app ?</Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                        </Accordion.Item>


                        <Accordion.Item eventKey="1">
                            <Accordion.Header>How can I find delivery restaurants near me?</Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                        </Accordion.Item>




                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Can I order from multiple restaurants at once?</Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                        </Accordion.Item>


                        <Accordion.Item eventKey="3">
                            <Accordion.Header>Are there any promotions on food delivery?</Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                        </Accordion.Item>



                        <Accordion.Item eventKey="4">
                            <Accordion.Header>How long do deliveries take?</Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>



                </div></div>

            </div>

            <div className="second_banner">
                <div className="second_header-text">
                    <h2 className="connecting_food">
                        Order your home cooked Food and feel at home
                    </h2>

                    <p className='sub-tex'>
                        Scan the QR code with your phone camera
                        to download the Kitchly kitchen Food app.
                        Available for iOS and Android devices.
                    </p>

                </div>
                <div className="food-images phone_container">
                    <img className=' phone' src={phone2} alt="" />
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default HomePage;