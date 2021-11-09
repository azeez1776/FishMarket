import React from 'react'
import '../../assets/CSS/styles.css'

function Modal() {


    return (
        <div className="modal">
            <div className="modal_header">
                <h1 className="modal_title">Basket</h1>
            </div>
            <div className="modal_description">
                <div className="modal_item">
                    <img src='Images/salmon.jpeg' alt='Salmon ' className="modal_img" />
                    <h3 className="modal_title">Salmon</h3>
                    <p className="modal_price">2500</p>

                </div>
            </div>
        </div>
    )
}

export default Modal
