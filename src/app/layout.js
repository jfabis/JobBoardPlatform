import './globals.css'
import Header from '@/components/Header'

export const metadata = {
  title: 'Job Board Platform',
  description: 'Find your dream job or hire the best talent',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <Header />
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
      </body>
    </html>
  )
}
