import React, { useState } from 'react'
import Item from '../../components/Item'
import Nav from '../../components/Nav'
import ItemDetail from '../ItemDetail/index.js'


function Explore() {

    const items = [
        {
            title: 'salmon',
            price: '2500tsh',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
            img: 'Images/salmon.jpeg'
        },
        {
            title: 'tilapia',
            price: '3500tsh',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
            img: 'Images/salmon.jpeg'
        },
        {
            title: 'Squid',
            price: '4500tsh',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
            img: 'Images/salmon.jpeg'
        },
        {
            title: 'Crab',
            price: '5500tsh',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
            img: 'Images/salmon.jpeg'
        },
    ]

    const [showInfo, setShowInfo] = useState(false)
    const [itemInfo, setItemInfo] = useState({
        title: '',
        description: '',
        price: '',
        img: ''
    })

    const moreInfo = (itemData) => {
        setShowInfo(true)
        setItemInfo(itemData)
    }

    return (
        <div className="explore">
            {/* <Nav /> */}
            <div className="explore_item">
                {items.map((item, id) =>
                    <Item
                        title={item.title}
                        description={item.description}
                        price={item.price}
                        img={item.img}
                        onCall={() => {
                            localStorage.setItem('itemTitle', item.title);
                            localStorage.setItem('itemDescription', item.description)
                            localStorage.setItem('itemPrice', item.price)
                            localStorage.setItem('itemImg', item.img)
                        }}
                    />
                )}
            </div>

        </div>
    )
}

export default Explore
