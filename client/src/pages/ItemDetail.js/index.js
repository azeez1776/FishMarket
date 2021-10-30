import React from 'react'


function ItemDetail({ title, price, description, img }) {



    return (
        <div>
            <div className="item_detail_img">
                <img src={img} alt={title} />
            </div>
            <div className="item_detail_info">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
            <div className="item_detail_qty">
                <label for="cars">Qty: </label>
                <select name="number of items" id="cars" t className="item_select">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>
            {/* Button */}
        </div>
    )
}

export default ItemDetail
