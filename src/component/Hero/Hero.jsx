import React from 'react';
import Header from '../Header/Header';
import "./Hero.css";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import {motion} from "framer-motion"
import NumberCounter from 'number-counter'
export default function Hero() {
  const transition = {type:"sring", duration:3}
  const mobile = window.innerWidth<=768?true:false;
  return (
    <div className="hero">
      <div className="blur hero-blur"></div>
        <div className="left-h">
          <Header/>
        <div className="the-best-app">
          <motion.div initial = {{left:mobile?"100px":"140px"}}
        whileInView = {{left:"8px"}}
        transition = {{...transition, type:"tween"}}>
          </motion.div>
          <span>The best fitness club</span>
        </div>
        <div className="hero-text">
          <div>
            <span className='stroke-text'>Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>
              Ideal body
            </span>
          </div>
          <div>
          <span>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus cum accusantium nostrum cumque ab atque illum numquam doloribus harum iste!
          </span>
        </div>
        </div>
        <div className="figures">
          <div>
            <span>
              <NumberCounter end={140}
              start={100}
              delay="4"
              preFix="+"/>
            </span>
            <span>expert coaches</span>
          </div>
          <div>
            <span><NumberCounter end={900}
              start={760}
              delay="4"
              preFix="+"/></span>
            <span>Members joined</span>
          </div>
          <div>
            <span>
            <span><NumberCounter end={50}
              start={10}
              delay="4"
              preFix="+"/></span>
            </span>
            <span>fitness Program</span>
          </div>
        </div>
        <div className="hero-button">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
        </div>
        <div className="right-h">
          <button className='btn'>Join now</button>
          <motion.div initial={{right: "-1rem"}} 
          whileInView={{right: "4rem"}} 
          transition={transition} className="heart-rate">
            <img src={Heart} alt="" />
            <span>Heart Rate</span>
            <span>116 BPM</span>
          </motion.div>
          <img 
           src={hero_image} alt="" className='hero-image'/>
          <motion.img initial={{right: "11rem"}} 
          whileInView={{right: "20rem"}} 
          transition={transition}  src={hero_image_back} alt="" className='hero-image-back' />
          <motion.div initial={{right: "37rem"}} 
          whileInView={{right: "28rem"}} 
          transition={transition}  className="calories">
            <img src={Calories} alt="" />
            <div>
            <span>Calories Burned</span>
            <span>220 Kcal</span>
            </div>
          </motion.div>
        </div>
    </div>
  )
}
