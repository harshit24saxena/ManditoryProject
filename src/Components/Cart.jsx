import React from 'react'
import './ComponentCSS/Cart.css';
import { Link } from 'react-router-dom';


const Cart = () => {
    return (
        <>
            <div id="cart_container">
                <div id="cart_contents">
                    <h1 className='cart_heading' >Please Order These Food : </h1>
                    <div className="all_cart_box">


                        {/* 1 all particular dishes show under the row */}
                        <div className="cart_boxes">
                            <div className="heading_cart_box">
                                <h2 >Your Cart have these foods : </h2>
                            </div>

                            {/* 1. Now Only row is repeating */}
                            <div className="cart_row">
                                <div className="cart_details">
                                    <div className="cart_dish_image">
                                        <img className='cart_image' src="/images/dosa.jpg" alt="" srcSet="" />
                                    </div>
                                    <div className="cart_information">
                                        <div className="Name">Name :
                                            <label htmlFor=""> Pizza</label>
                                        </div>
                                        <div className="Quantity">
                                            <label htmlFor="">Qty : </label>
                                            <label htmlFor="">2</label>
                                        </div>
                                        <div className="price">
                                            <label htmlFor="">Price : </label>
                                            <label htmlFor="">120</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="cart_operation_button">
                                    <div className="cart_deleteBtn">
                                        <button className='delete_button' ><Link to="www.google.com">Delete</Link></button>
                                    </div>
                                </div>
                            </div>



                            {/* 1. Now Only row is repeating */}
                            <div className="cart_row">
                                <div className="cart_details">
                                    <div className="cart_dish_image">
                                        <img className='cart_image' src="/images/dosa.jpg" alt="" srcSet="" />
                                    </div>
                                    <div className="cart_information">
                                        <div className="Name">Name :
                                            <label htmlFor=""> Pizza</label>
                                        </div>
                                        <div className="Quantity">
                                            <label htmlFor="">Qty : </label>
                                            <label htmlFor="">2</label>
                                        </div>
                                        <div className="price">
                                            <label htmlFor="">Price : </label>
                                            <label htmlFor="">120</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="cart_operation_button">
                                    <div className="cart_deleteBtn">
                                        <button className='delete_button' ><Link to="www.google.com">Delete</Link></button>
                                    </div>
                                </div>
                            </div>




                            {/* Paying fee for food */}
                            <div className="cart_proceed">
                                <button><Link id="cart_pay_button" to="www.google.com">Proceed To Pay</Link></button>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Cart
