import './globals.css'
import { Inter } from 'next/font/google'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Cards Digify | Lead Board',
  description: 'Revolutionizing the way  you share information  and generate leads  Step into the future with our near-field communication (NFC) business cards.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>

        
        {children}
        
        <Footer/>
      </body>
    </html>
  )
}
