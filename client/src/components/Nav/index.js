import React from 'react'
// import { Link } from 'react-router-dom'
import '../../assets/CSS/styles.css'

function Nav() {
    return (
        <div className="nav">
            <div className="nav_header">
                <div className="nav_head">
                    <div className="title">
                        <img className="nav_img" src="Images/fishbone.png" alt="fishbone" />
                        <h1 className="nav_title">FISH MARKET</h1>
                    </div>
                    <div className="basket">
                        <img className="nav_basket" src="Images/basket.png" alt="basket" />
                        <span className="basket_dot">1</span>
                    </div>
                </div>
            </div>
            <div className="nav_links">

            </div>

        </div>
    )
}

export default Nav
