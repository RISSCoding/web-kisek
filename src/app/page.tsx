//src/app/page.tsx

import KisahsekolahPages from '@/pages/KisahsekolahPages'
import LandingPages from '@/pages/LandingPages'
import React from 'react'
import FeedbackPages from '@/pages/FeedbackPages'
import AboutusPages from '@/pages/AboutusPages'
import Footer from '@/components/Footer'

const page = () => {
  return (
    <div>
      <section id="landing"><LandingPages /></section>
      <section id="kisahsekolah"><KisahsekolahPages /></section>
      <section id="feedback"><FeedbackPages /></section>
      <section id="aboutus"><AboutusPages /></section>
      <Footer />
    </div>
  );
}

export default page