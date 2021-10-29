import React from 'react'
import Item from '../../components/Item'
import Nav from '../../components/Nav'


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

    return (
        <div className="explore">
            <Nav />
            <div className="explore_item">
                {items.map((item, id) =>
                    <Item
                        title={item.title}
                        description={item.description}
                        price={item.price}
                        img={item.img}
                    />
                )}
            </div>

        </div>
    )
}

export default Explore
