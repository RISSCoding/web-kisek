import FeedbackForm from '@/components/FeedbackForm';
import FeedbackList from '@/components/FeedbackList';
import React from 'react'

const FeedbackPages = () => {
  return (
    <div className='mt-[20vh] mb-[15vh]'>
      <div className="font-inter mx-auto text-center font-black text-[24px] leading-[29px] text-white">
        FEEDBACK
      </div>
      <div className="flex flex-row items-center">
        <FeedbackForm />
        <FeedbackList />
      </div>
    </div>
  );
}

export default FeedbackPages