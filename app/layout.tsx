import { Navigation } from '@/components/navigation';
import './globals.css'


import "bootstrap/dist/css/bootstrap.min.css";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    <html
      lang="en">

      <body className="min-h-full flex flex-col">
        <Navigation/>
       
        {children}
        </body>
    </html>

  );
}
