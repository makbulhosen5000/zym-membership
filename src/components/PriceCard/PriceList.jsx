import React, { useState,useEffect } from 'react';
import Card from './Card';

const PriceList = () => {
    const [prices,setPrices] = useState([]);
    useEffect(()=>{
        const loadData = async () =>{
            const res = await fetch('prices.json');
            const data = await res.json();
            setPrices(data);
        }
        loadData();
    },[]);
    return (
        <div className='grid sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-3  mx-5 text-center'>
            {prices.map(price=><Card price={price} key={price.id} />)}
        </div>
    );
};

export default PriceList;