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
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <ThemeProvider>
            <Header />
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                width: '100%',
                padding: '0', // Remove padding if any
                margin: '0', // Remove margin if any
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
