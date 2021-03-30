/*import React, { useState } from 'react';
import Categories from '../components/Categories';
import MenuItems from '../components/MenuItem';
import Tittle from '../components/Title';
import portfolios from '../components/allportfolios';

export default function PortfolioPage() {
  //  const [categories, setCategories] = useState(null);
    const [menuItems, setMenuItems] = useState(portfolios);
    return(
        <div className="PortfolioPage">
            <div className="title">
                <Tittle title={'Portfolios'} span={'portfolios'}/>
            </div>
            <div className="portfolios">
                <Categories />
                <MenuItems MenuItem={menuItems}/>
            </div>
        </div>
    )
}
*/

import React, { useState } from 'react';
import Categories from '../components/Categories';
import MenuItems from '../components/MenuItem';
import Tittle from '../components/Title';
import portfolios from '../components/allportfolios';


const allCategories = ['All', ...new Set(portfolios.map(item => item.category))];

function PortfoliosPage() {
    const [categories, setCategories] = useState(allCategories);
    const [menuItems, setMenuItems] = useState(portfolios);

    const filter = (category) =>{
        if(category === 'All'){
            setMenuItems(portfolios)
            return;
        }
        const filteredData  = portfolios.filter((item)=>{
            return item.category === category;
        })
        setMenuItems(filteredData);
    }

    return (
        <div className="PortfolioPage">
            <div className="title">
                <Tittle title={'Portfolio'} span={'portfolio'} />
            </div>
            <div className="portfolios-data">
                <Categories filter={filter} categories={categories} />
                <MenuItems menuItem={menuItems} />
            </div>
        </div>
    )
}

export default PortfoliosPage;