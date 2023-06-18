import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/app/Component/Navbar'
import Logo from "@/app/Component/Logo";


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ЦентрМедПрокат',
  description: 'Технические средства реабилитации в аренду и продажу',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">



      <body>
      <Navbar/>

      {children}
      </body>
    </html>
  )
}
