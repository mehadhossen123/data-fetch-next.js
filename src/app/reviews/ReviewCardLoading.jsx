import React from 'react';
import ReviewCardSkeleton from '../Component/Skeliton/ReviewCardSkeleton';

const ReviewCardLoading = () => {
    return (
      <div className=" gap-5 my-5 grid lg:grid-cols-3 grid-cols-1">
        {[...Array(12)].map((_,index)=><ReviewCardSkeleton key={index}></ReviewCardSkeleton>)}
      </div>
    );
};

export default ReviewCardLoading;