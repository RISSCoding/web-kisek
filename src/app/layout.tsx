// src/app/layout.tsx

'use client'

// Hapus deklarasi useState yang tidak digunakan
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
