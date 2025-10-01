import type { Metadata } from 'next'
import Navbar from "./components/common/Navbar";
import Footer from './components/common/Footer';


export const metadata: Metadata = {
  title: 'AI-Solutions',
  description: 'Empowering the future of work with AI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
      <Navbar/>
       
        <main>{children}</main>
        <Footer/>
       
      </body>
    </html>
  )
}
