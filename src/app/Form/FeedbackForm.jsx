
'use client'
import { useRouter } from 'next/navigation';
import React from 'react';

const FeedbackForm = () => {
    const router=useRouter()
    const handleSubmit= async(e)=>{
        e.preventDefault()
        const message=e.target.message.value;
       
        const res = await fetch(`${process.env.NEXT_PUBLIC_server}/api/feedback`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message }),
        });
        const data=await res.json()
        if(data.insertedId){
            alert("Succuss")
            router.push('/feedbacks')
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className='text-center space-y-5' action="">
                <textarea className='border-2 w-xl p-3 ' required name="message" cols={50} rows={ 10} id=""></textarea>
                <hr />
                <button className='text-black text-center cursor-pointer my-5  bg-white py-3 px-10  rounded-2xl'>Add</button>
            </form>
            
        </div>
    );
};

export default FeedbackForm;