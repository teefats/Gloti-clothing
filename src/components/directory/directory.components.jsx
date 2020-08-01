
import React from 'react'
import MenuItem from '../components/../menu-item/menu-item.component'
import './directory.styles.scss'


// Step 6 would be a class component because we need to store the state of the items and values in the menu items component


class Directory extends React.Component {
    constructor() {
        super();

    //because we are populating different items we would source the different elements from array. section 
    this.state = {
        sections:[
            {
              title: 'hats',
              imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
              id: 1,
              linkUrl: 'shop/hats'
            },
            {
              title: 'jackets',
              imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
              id: 2,
              linkUrl: 'shop/jackets'
            },
            {
              title: 'sneakers',
              imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
              id: 3,
              linkUrl: 'shop/sneakers'
            },
            {
              title: 'womens',
              imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
              size: 'large',
              id: 4,
              linkUrl: 'shop/womens'
            },
            {
              title: 'mens',
              imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
              size: 'large',
              id: 5,
              linkUrl: 'shop/mens'
            }
          ]
    }}

    //using destructuring we pass the values into the class
    render() {
    return (
        <div className = 'directory-menu'>
        {this.state.sections.map(({title, imageUrl,id, size}) => (
            <MenuItem key = {id} title= {title} imageUrl= {imageUrl} size = {size}/>
        ))}
        </div>
    );
}}



export default Directory;
