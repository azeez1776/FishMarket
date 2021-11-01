import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Nav from '../../components/Nav'
import { increment } from '../../features/counter/counterSlice'


function ItemDetail() {

    const count = useSelector(state => state.value)
    const showModal = useSelector(state => state.truthy)
    const dispatch = useDispatch()

    const itemTitle = localStorage.getItem('itemTitle');
    const itemPrice = localStorage.getItem('itemPrice');
    const itemDescription = localStorage.getItem('itemDescription')
    const itemImg = localStorage.getItem('itemImg');

    return (
        <div>
            {/* <Nav /> */}

            <div className="item_detail">
                <div className="item_detail1">
                    <div className="item_detail_img">
                        <img src={itemImg} alt={itemTitle} />
                    </div>
                </div>
                <div className="item_detail2">
                    <div className="item_detail_info">
                        <h2>{itemTitle}</h2>
                        <p>{itemDescription}</p>
                        <p>Price: {itemPrice}</p>
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
        </div>
    )
}

export default ItemDetail
