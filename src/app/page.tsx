import KisahsekolahPages from '@/pages/KisahsekolahPages'
import LandingPages from '@/pages/LandingPages'
import React from 'react'
import FeedbackPages from '@/pages/FeedbackPages'

const page = () => {
  return (
    <div>
      <LandingPages />
      <KisahsekolahPages />
      <FeedbackPages />
    </div>
  );
}

export default page