import React from 'react';
import './ComponentCSS/FoodSlider.css';

const FoodSlider = () =>{
    return(
        <>
             <div id="specialFoodSlider">
                     {/* here mentioned all special food by animation  */}
                     {/* <h1 id="Special-Heading">* TODAY'S &nbsp; SPECIAL &nbsp; FOOD *</h1>  */}
                    <h1 id="slider_heading">* Today's Special Food *</h1>
                     {/* contents  */}
                    <div id="slider">
                         {/* this is slider animation  */}
                        <figure className="figure" >
                            <img className="img" src="/Images/slider-image/slider-1.png"  srcSet='' alt="" />
                            <img className="img" src="/Images/slider-image/slider-2.jfif"  srcSet='' alt="" />
                            <img className="img" src="/Images/slider-image/slider-3.jpg"  srcSet='' alt="" />
                            <img className="img" src="/Images/slider-image/slider-4.jpg"  srcSet='' alt="" />
                            <img className="img" src="/Images/slider-image/slider-5.jpg"  srcSet='' alt="" />
                              {/* <img className="img" src="/Images/slider-image/zomato.jpg"  srcSet='' alt="" />
                            <img className="img" src="/Images/slider-image/amazon.jpg"  srcSet='' alt="" />
                            <img className="img" src="/Images/slider-image/newsswallah.jpg"  srcSet='' alt="" />
                            <img className="img" src="/Images/slider-image/flipkart2.jpg"  srcSet='' alt="" />
                            <img className="img" src="/Images/slider-image/youtube.jpg"  srcSet='' alt="" /> */}
                        </figure>
                    </div>
                </div>
        </>
    );
}

export default FoodSlider