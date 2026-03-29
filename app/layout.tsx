import { Navigation } from '@/components/navigation';
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs';
import { Counter } from '@/components/counter';
import "bootstrap/dist/css/bootstrap.min.css";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider> 
    <html
      lang="en">

      <body className="min-h-full flex flex-col">
        <Navigation/>
        {/* <Counter/> */}
        {children}
        </body>
    </html>
    </ClerkProvider>
  );
}
