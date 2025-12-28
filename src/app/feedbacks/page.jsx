import React from 'react';
import MessageCard from '../Component/MessageCard';
import Link from 'next/link';
export const dynamic = 'force-dynamic'; 
export const metadata = {
  title: {
    default: "feedbacks",
    template: "%s | Yantun khaijan",
  },
 
};
const getFeedback=async()=>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_server}/api/feedback`, {
     
      next: { revalidate: 60 },
    });
    return res.json()
}

const FeedbacksPage = async() => {
    const feedbacks=await getFeedback()
   
    return (
        <div>
            <h1 className='text-center font-bold  text-yellow-700 text-4xl my-3 '>{feedbacks.length} Feedbacks</h1>
            <div className='my-5 '>
                <Link href={"/feedbacks/add"} className='text-center bg-white text-black rounded-2xl font-bold py-4 px-3 '>Add Feedback</Link>
            </div>
            
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                {
                    feedbacks.map(item=><MessageCard item={item} key={item._id}></MessageCard>)
                }
            </div>
            
        </div>
    );
};

export default FeedbacksPage;