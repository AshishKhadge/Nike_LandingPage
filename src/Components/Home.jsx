import React from 'react'
import '../Components/Style.css'
import shoe from '../assets/shoe.png'
import amzn from '../assets/amazon.png'
import fpkt from '../assets/flipkart.png'

const Home = () => {
    return (
        <>
            <div className="hero">
                <div className="textBlock">
                    <div className="text">
                        <h1>your feet</h1>
                        <h1>deserve</h1>
                        <h1>the best</h1>
                    </div>
                    <h5>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</h5>
                    <div className="btn">
                        <button className='btns'>Shop Now</button>
                        <button className='btn2'>Category</button>
                    </div>
                    <p>Also Available On</p>
                    <div className="imgset">
                        <img src={fpkt} alt="" />
                        <img src={amzn} alt="" />
                    </div>
                </div>
                <div className="shoeimg">
                <img src={shoe} alt="" />
                </div>
            </div>
        </>
    )
}

export default Home