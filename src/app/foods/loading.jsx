import React from 'react';
import FoodCardSkeleton from '../Component/FoodCardSkeleton';

const loading = () => {
    return <div className="gap-5 my-5 grid lg:grid-cols-3 grid-cols-1">
        {[...Array(12)].map((_,i)=><FoodCardSkeleton key={i}></FoodCardSkeleton>)}
    </div>;
};

export default loading;