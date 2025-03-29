import React from 'react'

import './ComponentCSS/Orders.css';
import QueueStatus from './Queue';

const Orders = () => {
    
    return (
        <>

            {/* Main contents  */}
            <div id="order_container">
                <h1 className="order_heading" >Your Cart</h1>
                <div id="all_message_content">
                    <div className="messages_box">


                        {/* 1st row of order  */}
                        <div className="showing">
                            <div className="message_div">
                                <h2 className="message" >Order Details</h2>
                            </div>
                            <div className="message_content_row">
                                <div className="dishDetails">
                                    <div className="dishImage_div">
                                        <img className="dish_image" src="./Images/Pizza.jpg" alt="" />
                                    </div>
                                    <div className="dishInfo">
                                        <div className="Name">
                                            <label htmlFor="">Your order </label>
                                        </div>
                                        <div className="Quantity">
                                            <label htmlFor="">Qty : </label>
                                            <label htmlFor="">1</label>
                                        </div>
                                        <div className="price">
                                            <label htmlFor="">Estimated Time : </label>
                                            <label htmlFor="">120</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>



                    </div>
                </div>
            </div>
            <QueueStatus />
        </>
    )
}

export default Orders
