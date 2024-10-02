'use client'

import { useState } from 'react'
import { kodchasan } from "@/lib/font"
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${kodchasan.variable}`}>
      <head>
        <title>RPLThree Games</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
