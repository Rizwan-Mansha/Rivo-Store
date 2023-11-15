import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'

import CartProvider from '../components/Providers'
import ShoppingCartModel from '@/components/ShoppingCartModel'
import Script from 'next/script'
import Head from 'next/head'
import Footer from '@/components/Footer'



const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Riz Store',
  description: 'Riz E-Commerce Store',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
       

        <CartProvider>
          <Navbar />
          <ShoppingCartModel />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
