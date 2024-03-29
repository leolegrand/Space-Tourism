import Header from '@/components/Header/Header'
import './globals.css'
import { Barlow_Condensed, Bellefair } from 'next/font/google'

const barlow = Barlow_Condensed({ subsets: ['latin'], weight: "400", variable: '--font-barlow' })
const bellefair = Bellefair({ subsets: ['latin'], weight: "400", variable: '--font-bellefair' })

export const metadata = {
  title: 'Space Tourism | To the moon & back',
  description: 'Generated by create next app'
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${barlow.variable} ${bellefair.variable} font-sans overflow-hidden`}>
        <Header/>
        {children}
      </body>
    </html>
  )
}
