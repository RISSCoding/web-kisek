// src/components/FeedbackList.tsx
"use client";
import { useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import { collection, onSnapshot } from "firebase/firestore";

interface Feedback {
  name: string;
  rating: number;
  review: string;
}

const FeedbackCard: React.FC<Feedback> = ({ name, rating, review }) => {
  return (
    <div className="relative w-full h-[200px] bg-gradient-to-b from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] bg-[#2c296b]  p-4 flex flex-col justify-between  mb-[5vh] rounded-[20px] shadow-lg">
      <h3 className="font-inter font-bold text-[18px] text-white">{name}</h3>
      <p className="text-sm text-gray-400">Rating: {rating}/5</p>
      <p className="font-light text-white text-justify-center">{review}</p>
    </div>
  );
};

const FeedbackList = () => {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "feedbacks"), (snapshot) => {
      const feedbacksData = snapshot.docs.map((doc) => doc.data() as Feedback);
      setFeedbacks(feedbacksData);
    });

    return () => unsubscribe(); // Cleanup listener on unmount
  }, []);

  return (
    <div className="relative text-center">
      <div className="max-h-[400px] w-[550px] tece mx-auto overflow-y-scroll bg-[#1f1d46] mt-[50px]  p-[20px] rounded-[20px] shadow-md">
        <div className="font-inter font-black text-[24px] leading-[29px] text-white  mb-8">
          OUR REVIEWER
        </div>
          {feedbacks.length > 0 ? (
            feedbacks.map((feedback, index) => (
              <FeedbackCard key={index} {...feedback} />
            ))
          ) : (
            <p className="text-gray-400">No feedback yet.</p>
          )}
      </div>
    </div>
  );
};

export default FeedbackList;
