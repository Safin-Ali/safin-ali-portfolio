import '../../style/globals.css';
import { Poppins } from 'next/font/google';

const inter = Poppins({
  fallback:['sans-serif','Verdana'],
  weight:['100','200','300','400','500','600','700','800','900'],
  subsets:['latin','devanagari','latin-ext']
});

export const metadata = {
  title: 'Safin Ali',
  description: 'A Web Application Developer',

};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`light`}>
      <link rel="icon" href="../favicon.ico" sizes="any" />
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
