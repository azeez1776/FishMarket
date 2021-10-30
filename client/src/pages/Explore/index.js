import React, { useState } from 'react'
import Item from '../../components/Item'
import Nav from '../../components/Nav'
import ItemDetail from '../ItemDetail.js'


function Explore() {

    const items = [
        {
            title: 'salmon',
            price: '2500tsh',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
            img: 'Images/salmon.jpeg'
        },
        {
            title: 'salmon',
            price: '2500tsh',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
            img: 'Images/salmon.jpeg'
        },
        {
            title: 'salmon',
            price: '2500tsh',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
            img: 'Images/salmon.jpeg'
        },
        {
            title: 'salmon',
            price: '2500tsh',
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
        const myitem = itemData
    }

    return (
        <div className="explore">
            <Nav />
            {showInfo ? (
                <ItemDetail
                    title={myitem.title}
                />
            ) :
                (<div className="explore_item">
                    {items.map((item, id) =>
                        <Item
                            title={item.title}
                            description={item.description}
                            price={item.price}
                            img={item.img}
                            onCall={() => moreInfo(item)}
                        />
                    )}
                </div>)}

        </div>
    )
}

export default Explore
