import React from 'react'
import Footer from '../Components/Footer'
import NavigationBar from '../Components/Navbar'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Homechef from "../Assets/Home-chef.png"
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




const BecomeaCook = () => {
    return (
        <div>
            <NavigationBar />
            <div className="container">
                <div className="signup-form">
                    <div className="form">
                        <h2>Cook and Earn from your kitchen</h2>
                        <p>Kitchly-kitchen is an app for everyone who love to cook and can cook good meals.
                            With kitchly kitchens you can cook from the comfort of your kitchen
                            and make extra income by delivering to customers close to you.</p>

                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="text" placeholder="Your Name" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control type="email" placeholder="email@business.com" />
                            </Form.Group>
                            <Button className='submit-button' variant="primary" type="submit">
                                Sign Up
                            </Button>
                        </Form>


                        <p>
                            Our team will contact you shortly with more information.By signing up,
                            you agree to our Terms of Service & Privacy Policy.
                        </p>
                    </div>


                    <div >
                        <img className='home-chef' src={Homechef} alt="" />
                    </div>

                </div>


                <div>

                    <div>
                        <h1 className='benefits_header'>Benefits of a Kitchly Kitchen</h1>
                    </div>

                    <div className="benefits__section">
                        <Card className='card' style={{ width: '18rem' }}>
                            <Card.Img className='card_image' variant="top" src={firstimage} />
                            <Card.Body className='card_body'>
                                <Card.Title>Register your kitchen and provide necessary details.</Card.Title>
                                <Card.Text>
                                    Introduce yourself and get started by registering your Kitchen,
                                    upload images of your kitchen and setup menu of
                                    meals you can cook and let customers discover you.
                                </Card.Text>

                            </Card.Body>
                        </Card>



                        <Card className='card' style={{ width: '18rem' }}>
                            <Card.Img className='card_image' variant="top" src={secondimage} />
                            <Card.Body className='card_body'>
                                <Card.Title>Receive and prepare orders from customers close to you</Card.Title>
                                <Card.Text>
                                    Receive and Accept orders using the kitchly-kitchen App, and Prepare Orders
                                    from the comfort of your kitchen within the stated time.
                                </Card.Text>
                                <Button className='sign_up_button' variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>



                        <Card className='card' style={{ width: '18rem' }}>
                            <Card.Img className='card_image' variant="top" src={thirdimage} />
                            <Card.Body className='card_body'>
                                <Card.Title>Deliver order to your customers.</Card.Title>
                                <Card.Text>
                                    You have just prepared a delicious meal, Deliver the prepared
                                    meal to your customers and get paid. Enjoy the services at ease
                                </Card.Text>

                            </Card.Body>
                        </Card>
                    </div>
                </div>




                <div>

                    <div>
                        <h1 className='benefits_header'>Starting with Kitchly Kitchen is easy</h1>
                    </div>

                    <div className="benefits__section">
                        <Card className='card' style={{ width: '18rem' }}>
                            <Card.Img className='card_image' variant="top" src={signicon} />
                            <Card.Body className='card_body'>
                                <Card.Title className='text'>Sign up for free</Card.Title>
                                <Card.Text className='text'>
                                    Our team will be in touch to get you started.
                                </Card.Text>

                            </Card.Body>
                        </Card>


                        <img className='site' src={site} alt="" />


                        <Card className='card' style={{ width: '18rem' }}>
                            <Card.Img className='card_image' variant="top" src={homeicon} />
                            <Card.Body className='card_body'>
                                <Card.Title className='text'>We set up your profile</Card.Title>
                                <Card.Text className='text'>
                                    We'll add your menu and desired working hours to the app for you.
                                </Card.Text>
                                <Button className='sign_up_button' variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>

                        <img className='site' src={site} alt="" />


                        <Card className='card' style={{ width: '18rem' }}>
                            <Card.Img className='card_image' variant="top" src={ratings} />
                            <Card.Body className='card_body'>
                                <Card.Title className='text'>Start making more sales</Card.Title>
                                <Card.Text className='text'>
                                    Sit back, relax and watch your business thrive.
                                </Card.Text>

                            </Card.Body>
                        </Card>
                    </div>
                </div>



                <div className="faq">
                    <div>
                        <h1 className='benefits_header'>FAQ</h1>
                    </div>



                    <div className="faq-body">

                        <Card.Title>How long does it take to sign up as a Kitchly Kitchen  partner restaurant?</Card.Title>
                        <Card.Text>
                            This depends on your location and the number of premises.
                            Once you complete the sign-up form, our team will be in contact to get you set up.
                        </Card.Text>


                        <Card.Title>What do I need to get started?</Card.Title>
                        <Card.Text>
                            Just a tablet — which we can provide if you don't already have one.
                            Launch the Bolt Food app on your device and your team can start accepting,
                            managing and tracking food delivery orders in real-time.
                        </Card.Text>


                        <Card.Title>How much does it cost to sign up with Kitchly Kitchen</Card.Title>
                        <Card.Text>
                            There's no joining fee. If you need us to supply a tablet,
                            there will be some extra cost. In this case,
                            a small fee will be deducted from each food order until the total amount is paid off.
                        </Card.Text>


                        <Card.Title>What about the commission fee?</Card.Title>
                        <Card.Text>
                            Each order includes a small amount that helps cover the cost of delivery and other expenses.
                            This fee is calculated based on the approximate volumes of your business.
                        </Card.Text>

                    </div>
                </div>


                <div>
                    <div className="more">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={bike} />
                            <Card.Body>
                                <Card.Title className="text">Sign up as a Kitchly Kitchen logistic!</Card.Title>
                                <Card.Text className="text">
                                Earn money by delivering food orders.
                                Work whenever you want!
                                </Card.Text>
                                <Button className='more_button' variant="primary">Sign Up!</Button>
                            </Card.Body>
                        </Card>




                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={app} />
                            <Card.Body>
                                <Card.Title className="text">Download the app</Card.Title>
                                <Card.Text className="text">
                                Order  your  favorite dishes direct to your doorstep with the Bolt Food app.
                                </Card.Text>
                                <Button className='more_button' variant="primary">Get the App!</Button>

                            </Card.Body>
                        </Card>




                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={team} />
                            <Card.Body>
                                <Card.Title className="text">Join the team</Card.Title>
                                <Card.Text className="text">
                                Make an impact, working for one of Europe's leading tech companies.
                                </Card.Text>
                                <Button className='more_button' variant="primary">Join the Team</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>


            </div>
            <Footer />
        </div>
    )
}

export default BecomeaCook