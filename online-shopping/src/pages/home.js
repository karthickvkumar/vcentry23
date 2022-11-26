import React from "react";
import Header from "../components/header";

import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const HomePage = () => {

  // const slideImages = [
  //   {
  //     url: require("../images/h4-slide.png"),
  //     caption: 'Slide 1'
  //   },
  //   {
  //     url: require("../images/h4-slide2.png"),
  //     caption: 'Slide 2'
  //   },
  //   {
  //     url: require("../images/h4-slide3.png"),
  //     caption: 'Slide 3'
  //   },
  //   {
  //     url: require("../images/h4-slide4.png"),
  //     caption: 'Slide 4'
  //   },
  // ];

  const images = [
    "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
    "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    require("../images/h4-slide.png")
];

  return(
    <div>
     <Header></Header>
     {/* <div className="slide-container">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div className="each-slide" key={index}>
              <div style={{'backgroundImage': `url(${slideImage.url})`}}>
                <span>{slideImage.caption}</span>
              </div>
            </div>
          ))} 
        </Slide>
      </div> */}
      <Slide>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[0]})` }}>
                    <span>Slide 1</span>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[1]})` }}>
                    <span>Slide 2</span>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[2]})` }}>
                    <span>Slide 3</span>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[3]})` }}>
                    <span>Slide 3</span>
                </div>
            </div>
        </Slide>
    </div>
  )
}

export default HomePage;