import React from 'react'
import NavigationBar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Apple from "../Assets/Apple store.png"
import Playstore from "../Assets/play_store.png"
import restaurants from "../Assets/resturant.png"
import doublephone from "../Assets/double-phone.png"
import dish1 from "../Assets/dish1.png"
import dishes2 from "../Assets/dishes2.png"
import african1 from "../Assets/african1.png"

import about_1 from "../Assets/about_2.png"
import about_3 from "../Assets/about_1.png"
import about_2 from "../Assets/about_3.jpg"
import about_4 from "../Assets/about_4.png"
import phone from "../Assets/phone.png"


import man from "../Assets/man.png"
import "../Styles/about.css"


const Notfound = () => {
    return (
        <div>
            <NavigationBar />
            <br />
            <br />
            <br />
            <br />

            <div className="text-center">
                <h1>404 - Not Found!</h1>
                <p>Sorry, the page you are looking for does not exist.</p>
            </div>



            <Footer />
        </div>
    )
}

export default Notfound