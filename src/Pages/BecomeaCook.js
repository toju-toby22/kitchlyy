import React from 'react'
import Footer from '../Components/Footer'
import NavigationBar from '../Components/Navbar'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Homechef from "../Assets/Download our 1.png"
import "../Styles/becomeaChef.css";
import Card from 'react-bootstrap/Card';
import firstimage from "../Assets/first_image.png"
import secondimage from "../Assets/second_image.png"
import thirdimage from "../Assets/Third_image.png"
import signicon from "../Assets/sign-up-icon.png"
import homeicon from "../Assets/home-icon.png"
import ratings from "../Assets/ratings.png"
import site from "../Assets/site.png"
import bike from "../Assets/bike-image.png"
import app from "../Assets/app.png"
import team from "../Assets/team.png"
import Accordion from 'react-bootstrap/Accordion';



const BecomeaCook = () => {
    return (
        <div>
            <NavigationBar />
            <div className="container">
                <div className="signup-form row">
                    <div className="form col-md-7">
                        <h1 className='form_header'>Cook And Earn From Your Kitchen</h1>
                        <p>Kitchly-kitchen is an app for everyone who love to cook and can cook good meals.
                            With Kitchly kitchens you can cook from the comfort of your kitchen
                            and make extra income by delivering to customers close to you.</p>

                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="text" placeholder="Your Name" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control type="email" placeholder="email@business.com" />
                            </Form.Group>
                            <a className='submit-button btn btn-success px-5 py-3' target='_blank' href="https://kitchly.co/kitchen/download">Sign Up Now</a>

                        </Form>


                        <p className='signUp_terms_of_services'>
                            Our team will contact you shortly with more information.By signing up,
                            you agree to our Terms of Service & Privacy Policy.
                        </p>
                    </div>


                    <div className='signup_image col-md-7'>
                        <img className='home-chef' src={Homechef} alt="" />
                    </div>

                </div>


                <div>

                    <div>
                        <h1 className='benefits_header'>Benefits of a Kitchly Kitchen</h1>
                    </div>

                    <div className="benefits__section row">
                        <Card className='card col-md-7' style={{ width: '20rem' }}>
                            <Card.Img className='card_image' variant="top" src={firstimage} />
                            <Card.Body className='card_body'>
                                <Card.Title className='first-text'>Register your kitchen and provide necessary details.</Card.Title>
                                <Card.Text className="card_container">
                                    Introduce yourself and get started by registering your Kitchen,
                                    upload images of your kitchen and setup menu of
                                    meals you can cook and let customers discover you.
                                </Card.Text>
                            </Card.Body>
                        </Card>



                        <Card className='card col-md-7' style={{ width: '20rem' }}>
                            <Card.Img className='card_image' variant="top" src={secondimage} />
                            <Card.Body className='card_body'>
                                <Card.Title className='first-text'>Receive and prepare orders from customers close to you</Card.Title>
                                <Card.Text>
                                    Receive and Accept orders using the kitchly-kitchen App, and Prepare Orders
                                    from the comfort of your kitchen within the stated time.
                                </Card.Text>
                            </Card.Body>

                            <a className='submit-button btn btn-success px-5 py-3' target='_blank' href="https://kitchly.co/kitchen/download">List Your Kitchen</a>

                        </Card>



                        <Card className='card col-md-7' style={{ width: '20rem' }}>
                            <Card.Img className='card_image' variant="top" src={thirdimage} />
                            <Card.Body className='card_body'>
                                <Card.Title className='first-text'>Deliver order to your customers.</Card.Title>
                                <Card.Text>
                                    You have just prepared a delicious meal, Deliver the prepared
                                    meal to your customers and get paid. Enjoy the services at ease
                                </Card.Text>

                            </Card.Body>
                        </Card>
                    </div>
                </div>




                <div className='sections_header'>

                    <div>
                        <h1 className='benefits_header'>Starting with Kitchly Kitchen is easy</h1>
                    </div>

                    <div className="benefits__section row">
                        <Card className='card col-md-7' style={{ width: '20rem' }}>
                            <Card.Img className='Join_the_team' variant="top" src={signicon} />
                            <Card.Body className='card_container'>
                                <Card.Title className='first-text'>Sign up for free</Card.Title>
                                <Card.Text className='card_container'>
                                    Our team will be in touch to get you started.
                                </Card.Text>

                            </Card.Body>
                        </Card>


                        {/* <img className='site' src={site} alt="" /> */}


                        <Card className='card col-md-7' style={{ width: '20rem' }}>
                            <Card.Img className='cooking' variant="top" src={homeicon} />
                            <Card.Body className='card_container'>
                                <Card.Title className='first-text'>We set up your profile</Card.Title>
                                <Card.Text className='card_container'>
                                    We'll add your menu and desired working hours to the app for you.
                                </Card.Text>
                                <a className='submit-button btn btn-success px-5 py-3' target='_blank' href="https://kitchly.co/kitchen/download">Sign Up Now</a>

                            </Card.Body>
                        </Card>

                        {/* <img className='site' src={site} alt="" /> */}


                        <Card className='card col-md-7' style={{ width: '20rem' }}>
                            <Card.Img className='Join_the_team' variant="top" src={ratings} />
                            <Card.Body className='card_container'>
                                <Card.Title className='first-text'>Start making more sales</Card.Title>
                                <Card.Text className='card_container'>
                                    Sit back, relax and watch your business thrive.
                                </Card.Text>

                            </Card.Body>
                        </Card>
                    </div>
                </div>



                <div>
                    <div>
                        <h1 className='benefits_header'>Frequently Asked Questions</h1>
                    </div>



                    <div>

                        <Accordion>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>What do I need to get started?</Accordion.Header>
                                <Accordion.Body>
                                    Just a Mobile Device (Android Or IOS) — Launch the Kitchen app on your device and you team can start accepting,
                                    managing and tracking food delivery orders in real-time.

                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="1">
                                <Accordion.Header>How do i get verified on Kitchen on Kitchly?</Accordion.Header>
                                <Accordion.Body>
                                    This depends on your location, We are currently serving only those in Abuja. It takes two to three days to get listed on kitchlys.
                                    Which requires a Physical verification from a Kitchly Rep who will help Setup your menu on the platform and get your location pin.
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="2">
                                <Accordion.Header>How much does it cost to sign up with Kitchly Kitchen ?</Accordion.Header>
                                <Accordion.Body>
                                    There's no joining fee. We will help setup your kitchen and get you onboard and its totally free.
                                </Accordion.Body>
                            </Accordion.Item>



                            <Accordion.Item eventKey="3">
                                <Accordion.Header>What about the commission fee?</Accordion.Header>
                                <Accordion.Body>
                                    Each order includes a small amount that helps cover the cost of maintaining the system and other expenses.
                                    This fee is calculated based on the Percentage discussed during onboarding with the kitchly Rep.
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="4">
                                <Accordion.Header>Who pays for delivery fee?</Accordion.Header>
                                <Accordion.Body>
                                   Delivery for each order is paid by the customer before the order is placed. Once the order is placed, the delivery company gets notified  on the Date and time to pick the order.
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="5">
                                <Accordion.Header>When do i get my money?</Accordion.Header>
                                <Accordion.Body>
                                   It takes 24 Hours after delivery for a kitchen to be credited for each order delivered. Once the 24 Hours after delivery is completed, the amount of the meals ordered is credited to your Kitchly wallet and you can decide when to make withdrawal. Please note that you have to set a bank and withdrawal pin for your withdrawal to be processed.
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="6">
                                <Accordion.Header>What kind of food do i make on kitchly?</Accordion.Header>
                                <Accordion.Body>
                                    Strictly Homemade meals, As a kitchen you are required to make quality, healthy homemade meals without compromise. Each order gets reviewed once it is delivered to the customer. And your kitchen is rated based on the review from the customer and Kitchly.
                                </Accordion.Body>
                            </Accordion.Item>

                            
                        </Accordion>








                    </div>
                </div>


                <div>

                    
           




                    
                    <div className="more">
                        <Card className='card ' style={{ width: '25rem' }}>
                            <Card.Img className='Join_the_team' variant="top" src={bike} />
                            <Card.Body className="card_container">
                                <Card.Title className="first-text">Sign up as a Kitchly Kitchen logistic!</Card.Title>
                                <Card.Text className="card_container">
                                    Earn money by delivering food orders.
                                    Work whenever you want!
                                </Card.Text>
                            </Card.Body>
                            <div className="button_container">
                                <Button className='more_button' variant="success">Join the Team</Button>
                            </div>
                        </Card>




                        <Card className='card' style={{ width: '25rem' }}>
                            <Card.Img className='Join_the_team' variant="top" src={app} />
                            <Card.Body className="card_container">
                                <Card.Title className="first-text">Download the app</Card.Title>
                                <Card.Text className="card_container">
                                    Order  your  favorite dishes direct to your doorstep with the Bolt Food app.
                                </Card.Text>
                            </Card.Body>
                            <div className="button_container">
                                <Button className='more_button' variant="success">Join the Team</Button>
                            </div>

                        </Card>




                        <Card className='card ' style={{ width: '25rem' }}>
                            <Card.Img className='Join_the_team' variant="top" src={team} />
                            <Card.Body className="card_container">
                                <Card.Title className="first-text" >Join the team</Card.Title>
                                <Card.Text>
                                    Make an impact, working for one of Europe's leading tech companies .
                                </Card.Text>
                            </Card.Body>
                            <div className="button_container">
                                <Button className='more_button' variant="success">Join the Team</Button>
                            </div>
                        </Card>
                    </div>
                </div>
         </div>
            <Footer />
        </div>
    )
}

export default BecomeaCook