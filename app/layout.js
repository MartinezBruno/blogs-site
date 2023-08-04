import Footer from '@/components/Static/Footer'
import Nav from '@/components/Static/Nav'
import Provider from '@/components/Provider'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'InstaBlogs'
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${inter.className} h-screen`}>
        <Provider>
          <Nav />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  )
}
