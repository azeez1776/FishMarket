import React from 'react'
import '../../assets/CSS/styles.css'


function Item({ title, price, description, img, onCall }) {
    return (
        <div className="item">
            <div className="item_img">
                <img className="img_body" src={img} alt="item" />
            </div>
            <div className="item_description">
                <h3 className="item_title">{title}</h3>
                <div className="description">
                    <small className="item_info">{description}</small>
                </div>
                <div className="item_btn_price">
                    <div>
                        <small className="item_price"><b>Price:</b>{price}</small>
                    </div>
                    <div>
                        <button className="item_btn" onClick={onCall}>ADD TO CART</button>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Item
