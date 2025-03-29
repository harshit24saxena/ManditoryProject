import React, { useContext } from 'react'
import './ComponentCSS/AllDishBox.css';
import DishAPI from './DishAPI';
import { Link } from 'react-router-dom';


const AllDishBox = () => {
    return (
        <>
            <div id="dish_container">
                <h1 className="all_dish_heading">Our Canteen Other Popular Dishes</h1>
                <div id="dish_boxes">
                    {/* get from api file */}
                    {
                        DishAPI.map((element) => {
                            return (

                                <div className="dish_card" key={element.id}>
                                    <img className="dish_cart_image" src={element.path} alt="myPic" />
                                    <div className="dish_card_info">
                                        <label htmlFor="" id="name">{element.dish_name}</label>
                                        <label htmlFor=" : " id="price"> {element.price}₹</label>
                                    </div>
                                    <div className="operation_card" >
                                        <Link to="/orders" target='_blank' rel="noreferrer">
                                            <button className='add_cart_btn'> add cart </button>
                                            {/* <!-- <i className="fa-solid fa-cart-plus"></i>  --> */}
                                        </Link>
                                    </div>
                                </div>
                            )

                        })
                    }
                </div>
            </div>
        </>

    )
}

export default AllDishBox
