import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header } from './components/Header/Header';

import { ThemeProvider } from './context/ThemeContext';
import './globals.css';
import { Footer } from './components/Footer/Footer';
import StyledComponentsRegistry from './registry';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Webworks',
  description: 'Website solutions',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <ThemeProvider>
            <Header />
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                width: '100%',
              }}
            >
              {children}
            </div>
            <Footer />
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
