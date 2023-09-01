import Provider from '@/components/Provider'
import Footer from '@/components/Static/Footer'
import Nav from '@/components/Static/Nav'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'InstaBlogs',
  description:
    'InstaBlogs is a platform for sharing your thoughts and ideas with the world. It is a place where you can share your knowledge and experience with others.'
}

export default function RootLayout ({ children }) {
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
