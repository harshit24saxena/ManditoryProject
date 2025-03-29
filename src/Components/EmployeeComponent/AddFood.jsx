import React from 'react'
import './AddFood.css';

const AddFood = () => {
    return (
        <>
             {/* contents  */}
            <div id="content">
                <div id="heading">
                    <h1 id="mainHeading">Pleasse Add New Food Item : </h1>
                </div>
                <form action="" className="form">
                    <div id="dishName" className="inptType">
                        <div>

                            <label htmlFor="" id="DishName">Enter Dish Name :</label>
                        </div>
                        <input type="text" name="" id="addName" placeholder="Dahi Samosa" required />
                    </div>
                    <div id="Price" className="inptType">
                        <div>

                            <label htmlFor="" id="DishPrice">Enter Price :</label>
                        </div>
                        <input type="number" name="" id="addPrice" placeholder="20" required />
                    </div>
                    <div id="imgUpload" className="inptType">
                        <div>

                            <label htmlFor="" id="FoodName">Enter Food Image :</label>
                        </div>
                        <input type="file" name="" id="addImg" required />
                    </div>
                    {/* <div id="checking" className="inptType">
                        <input type="checkbox" name="" id="addCheck" required />
                            <label htmlFor="addCheck" id="confirm">Confirm! I checked</label>
                    </div> */}
                    <div id="submitBtn">
                        <input type="submit" id="btnSubmit" value="Add This Food" />

                    </div>
                </form>
            </div>
        </>
    )
}

export default AddFood
