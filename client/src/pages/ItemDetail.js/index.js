import React from 'react'
import { useDispatch } from 'react-redux'
import { increment } from '../../features/counter/counterSlice'


function ItemDetail({ title, price, description, img }) {

    const dispatch = useDispatch()

    return (
        <div className="item_detail">
            <div className="item_detail1">
                <div className="item_detail_img">
                    <img src={img} alt={title} />
                </div>
            </div>
            <div className="item_detail2">
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
                <div className="item_detail_btn">
                    <button className="item_btn_1" onClick={() => dispatch(increment())}>ADD TO CART</button>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail
