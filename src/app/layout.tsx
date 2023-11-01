import { ThemeProvider } from '@/components/theme-provider';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import './globals.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute='class' defaultTheme='dark' >
        <main className="flex flex-col items-center min-h-screen p-24">
      <div className="z-10 items-center justify-between w-full max-w-5xl text-sm lg:flex">
        <Link href='/' className='text-2xl text-bold'>
          Pokémon Finder
        </Link>
      </div>
        {children}
      </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
