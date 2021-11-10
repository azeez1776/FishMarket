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
                    <h4 className="modal_title1">Salmon</h4>
                    <img className="modal_img" src='Images/salmon.jpeg' alt='Salmon' />
                    <p className="modal_price">Price: 2500</p>
                </div>
                <div className="modal_item">
                    <h4 className="modal_title1">Salmon</h4>
                    <img className="modal_img" src='Images/salmon.jpeg' alt='Salmon' />
                    <p className="modal_price">Price: 2500</p>
                </div>
                <div className="modal_item">
                    <h4 className="modal_title1">Salmon</h4>
                    <img className="modal_img" src='Images/salmon.jpeg' alt='Salmon' />
                    <p className="modal_price">Price: 2500</p>
                </div>




            </div>
        </div>
    )
}

export default Modal
