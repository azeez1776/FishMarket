import React from 'react'

function ItemDetail({ title, price, description, img }) {
    return (
        <div>
            {/* image */}
            <div className="item_detail_info">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
            {/* Quantity */}
            {/* Button */}
        </div>
    )
}

export default ItemDetail
