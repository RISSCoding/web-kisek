// src/components/FeedbackForm.tsx
"use client";
import React, { useState } from "react";
import { db } from "@/lib/firebase";
import { collection, addDoc } from "firebase/firestore";
import { div } from "framer-motion/client";

const FeedbackForm = () => {
  const [name, setName] = useState("");
  const [rating, setRating] = useState<number>(0);
  const [review, setReview] = useState("");

  const handleRatingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);

    // Automatically set rating to 5 if the value is greater than 5
    if (value > 5) {
      setRating(5);
    } else if (value >= 1) {
      setRating(value); // Set to value if it's between 1 and 5
    } else {
      setRating(0); // Set to 0 if less than 1
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Prevent submission if rating is invalid (0)
    if (name && rating >= 1 && review) {
      await addDoc(collection(db, "feedbacks"), {
        name,
        rating,
        review,
      });
      setName("");
      setRating(0);
      setReview("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative w-full max-w-[500px] mt-10 bg-[#1f1d46] rounded-[20px] p-4 shadow-md ml-[20vh] mr-[7vh] mb-8"
    >
      <h3 className="font-inter font-bold text-[24px] text-white mb-4">
        Submit Feedback
      </h3>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 rounded-[10px] bg-gradient-to-b from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] bg-[#2c296b] text-white"
          required
        />
      </div>
      <div className="mb-4">
        <input
          type="number"
          placeholder="Rating (1-5)"
          value={rating}
          onChange={handleRatingChange} // Use the new handleRatingChange
          className="w-full p-2 rounded-[10px] bg-gradient-to-b from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] bg-[#2c296b] text-white"
          min="1"
          max="5"
          required
        />
      </div>
      <div className="mb-4">
        <textarea
          placeholder="Your Review"
          value={review}
          onChange={(e) => setReview(e.target.value)}
          className="w-full p-2 rounded-[10px] bg-gradient-to-b from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] bg-[#2c296b] text-white"
          rows={3}
          required
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white rounded-[10px] p-2 hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
};

export default FeedbackForm;
