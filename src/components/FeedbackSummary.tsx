"use client";
import { useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";

const FeedbackSummary = () => {
  const [averageRating, setAverageRating] = useState(0);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      const feedbacksSnapshot = await getDocs(collection(db, "feedbacks"));
      const feedbacks = feedbacksSnapshot.docs.map((doc) => doc.data());
      const totalRating = feedbacks.reduce(
        (acc, feedback) => acc + feedback.rating,
        0
      );
      const avgRating = totalRating / feedbacks.length;
      setAverageRating(avgRating);
    };

    fetchFeedbacks();
  }, []);

  return <p>Average Rating: {averageRating.toFixed(1)}</p>;
};

export default FeedbackSummary;
