import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'YouTube Filter App',
  description: 'Search and filter YouTube videos with advanced filtering options',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-red-600 text-white p-4 shadow-md">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">YouTube Filter App</h1>
            <nav>
              <ul className="flex space-x-4">
                <li><a href="/" className="hover:underline">Home</a></li>
                <li><a href="/about" className="hover:underline">About</a></li>
              </ul>
            </nav>
          </div>
        </header>
        <main className="container mx-auto p-4">
          {children}
        </main>
        <footer className="bg-gray-100 p-4 mt-8">
          <div className="container mx-auto text-center text-gray-600">
            <p>YouTube Filter App &copy; {new Date().getFullYear()}</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
