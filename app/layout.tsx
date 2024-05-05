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
      <div className="text-center bg-gray-100 text-black">
          <div className="">
              <div>
                  <p className="font-bold text-1xl">Режим работы:</p>
                  <p className="text-1xl">Будни с 9-00 до 18-00</p>
                  <p className="text-1xl">Выходные с 11-00 до 15-00</p>
              </div>
              <br></br>
              <div>
                  <p className="font-bold text-1xl">ИП Жук Никита Анатольевич</p>
                  <p>ИНН: 183313423733, ОГРН: 32183200005883</p>
                  <p className="font-bold" >Имеются противопоказания необходима консультация специалиста </p>
              </div>
          </div>

      </div>
    </html>
  )
}
