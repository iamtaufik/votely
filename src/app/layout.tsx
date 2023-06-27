'use client';
import './globals.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SessionProvider } from 'next-auth/react';
import Footer from '@/components/Footer';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>
        <SessionProvider>
          <div className="container bg-white">{children}</div>
          <Footer />
          <ToastContainer />
        </SessionProvider>
      </body>
    </html>
  );
}
