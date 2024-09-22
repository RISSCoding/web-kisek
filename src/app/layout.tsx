import { kodchasan } from "@/lib/font"
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${kodchasan.variable}`}>
      <body>{children}
      </body>
    </html>
  )
}