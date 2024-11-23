import React from 'react'
import { useState } from 'react';
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

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

function HomePage() {

    const [email, setEmail] = useState("")

    const onChangeHandler = event => {
        setEmail(event.target.value);
    };

    const clickHere = () => {
        if (email === "") {
            alert("Please Enter Your Email Address To Place Order")
        } else {
            fetch("https://api.apispreadsheets.com/data/CGsXSSJMuyYRFrGm/", {
                method: "POST",
                body: JSON.stringify({ "data": { "EMAIL": email } }),
            }).then(res => {
                if (res.status === 201) {
                    window.location.replace("https://kitchly.co/cook/download")
                }
                else {
                    window.location.replace("https://kitchly.co/cook/download")
                }
            })
        }
    }
    return (
        <div>
            <NavigationBar />

            <div className='top-banner'>
                <div className="inner-banner">
                    <div className="header-text">
                        <h2 className="connecting_food">
                            The Meals You Love <br />Prepared Just For You.
                        </h2>
                        {/* <p className='inner-text'>
                                Enjoy the flavor of home cooked meals from verified Cooks around your community. Order now and let the irresistible goodness come straight to your door step.
                                We do not just deliver meals, <i><b className="taste">we deliver a taste of home</b></i>.
                            </p> */}
                        <div className="top-btn">
                            <input type="text" id="email" className='emailTxt ' name='email' value={email} onChange={onChangeHandler} placeholder='Enter your Email to place order' />
                            <button className='submit-button   ' target='_blank' href="https://kitchly.co/cook/download" onClick={clickHere} ><b>Place Order</b></button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">





                {/* First Section */}

                <div className="first_section">
                    <div className="food-images">
                        <img className="image order_food_image" src={phone} alt="" />
                    </div>

                    <div className="description">
                        <h2 className="title">
                            How It Works
                        </h2>

                        <div className="list">
                            <span>
                                <p className='number'>1</p>
                            </span>
                            <div>
                                <h5><b>Place order on Kitchly</b></h5>
                                <p>Have access to a variety of homemade meals. Select a Kitchen, view the menu, place an order for your desired meal, Choose time for delivery and delivery type, sit back and relax.</p>
                            </div>
                        </div>

                        <div className="list">
                            <span>
                                <p className='number'>2</p>
                            </span>
                            <div>
                                <h5><b>Order is Received and Prepared by Verified Cook.</b></h5>
                                <p>Orders are made at least a day in advance so cooks have enough time to prepare your meals. Get real time updates on progress of meal preparation through the app and email notifications.</p>
                            </div>
                        </div>


                        <div className="list">
                            <span>
                                <p className='number'>3</p>
                            </span>
                            <div>
                                <h5><b>Enjoy your Homemade Meal.</b></h5>
                                <p>Meals can be picked up, or delivered to you by a delivery partner based on your preferences from the kitchens.</p>
                            </div>
                        </div>

                        <a className='btn btn-outline-success px-5 py-3' target='_blank' href="https://kitchly.co/cook/download">Download App</a>
                    </div>
                </div>

                <div className="first_section second_section row ">


                    <Col className="description" xs>
                        <h2 className="title">
                            Plan your Meals, Eat Healthy Homemade Meals
                        </h2>

                        <div className="list">
                            <span>
                                <p className='number'>1</p>
                            </span>
                            <div>
                                <h5><b>Plan your Day and your Meals</b></h5>
                                <p>We know how busy your day can be, but if it is planned it can be a lot easier. Plan your meal and have what to eat when you need to, this helps you spend less and eat healthier. </p>
                            </div>
                        </div>

                        <div className="list">
                            <span>
                                <p className='number'>2</p>
                            </span>
                            <div>
                                <h5><b>Itemize meals for the week</b></h5>
                                <p>What will you like to eat this week, get it properly planned out, don’t rush we can wait, get order placed on Kitchly from verified cooks and kitchen with variety of homemade meals and cuisine types, and get your meals homemade specially for you</p>
                            </div>
                        </div>


                        <div className="list">
                            <span>
                                <p className='number'>3</p>
                            </span>
                            <div>
                                <h5><b>Get your Meals delivered to you </b></h5>
                                <p>Your meals are delivered in minimum of 24 hours depending on the size and type of meals you order. This gives us time to shop and prepare your meal, our cooks always work to give you the best meals, as every meal is prepared specially for you.</p>
                            </div>
                        </div>

                        <a className='btn btn-outline-success px-5 py-3' target='_blank' href="https://kitchly.co/cook/download">Place your order</a>
                    </Col>

                    <Col className="food-images" xs={{ order: 'first' }} md={{ order: 'last' }}>
                        <img className="image order_food_image" src={deliver} alt="" />
                    </Col>


                </div>




                <div className="first_section">
                    <div className="food-images">
                        <img className="image order_food_image" src={pickup} alt="" />
                    </div>

                    <div className="description">
                        <h2 className="title">
                            Family Meal time is possible
                        </h2>

                        <div className="list">

                            <div>
                                <p>Kitchly makes family meal time possible, our cooks are also people with family and know how a family meal time is important for the bonding of a home. .</p>
                                <p>Our meals are prepared with family in mind, whether it's just you and want to connect with home again, is it a family of 3 or a family of 18 like ours, we have you covered. what if it is a family reunion or friends get together with a touch of home, kitchly is there for you. Life can be demanding, but it shouldn’t be your meal time.</p>
                                <p>We Deliver homemade meals, so you can spend more quality time with family and friends.
                                    We at Kitchly look forward to serving you in your next family meal time.</p>
                            </div>
                        </div>



                        {/* <Button variant="outline-secondary">Learn More</Button>{' '} */}
                    </div>
                </div>









                {/* FAQ */}

                <div className="app_section"> <div className="frequently_asked">

                    <h2 className='header'>Frequently Asked Questions</h2>


                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>How long does it take to get my food ?</Accordion.Header>
                            <Accordion.Body>
                                It take minimum of 24 Hours for your food to be delivered to you....Since Kitchly is a pre-ordering system and the Cooks on the platform focus on healthy Homemade meals, due to this fact, every meals has to
                                be well prepared in advance.
                            </Accordion.Body>
                        </Accordion.Item>


                        <Accordion.Item eventKey="1">
                            <Accordion.Header>How can i make an order?</Accordion.Header>
                            <Accordion.Body>
                                Open the Kitchly App, click on the green top of the app, you will see a page with all the various districts in your state, Select the one you are currently located and all the kitchens in your area will show up.
                            </Accordion.Body>
                        </Accordion.Item>




                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Can I order from multiple restaurants at once?</Accordion.Header>
                            <Accordion.Body>
                                No You Can not order from two kitchens at the same time. Each order has to be made individually from each kitchen. Incase a kitchen does not offer all your request, you can Place the order for what they offer and make another order from another kitchen.
                            </Accordion.Body>
                        </Accordion.Item>


                        <Accordion.Item eventKey="3">
                            <Accordion.Header>Can i pay on delivery?</Accordion.Header>
                            <Accordion.Body>
                                No you cannot pay on delivery. Each order takes different Kitchly partners to fulfill, due to this fact every payment has to be made once the order is placed. If the order was not accepted by the kitchen, Your money will be reverted back to your Kitchly Wallet.
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="4">
                            <Accordion.Header>Can i withdraw from my kitchly wallet?</Accordion.Header>
                            <Accordion.Body>
                                Yes you can withdraw from your kitchly wallet. If you have not set your bank account and withdrawal pin, you will be required to do so before withdrawals can be processed.
                            </Accordion.Body>
                        </Accordion.Item>



                    </Accordion>



                </div></div>

            </div>

            <div className="second_banner">
                <div className="second_header-text">
                    <h2 className="connecting_food">
                        Order your healthy home cooked meal and feel at home
                    </h2>

                    <p className='sub-tex'>
                        <a className='btn btn-outline-light px-5 py-3' target='_blank' href="https://kitchly.co/cook/download">Add to Cart Now </a>
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