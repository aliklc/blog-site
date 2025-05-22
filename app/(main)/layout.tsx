import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Blog Sitesi',
  description: 'Next.js ve Tailwind CSS ile oluşturulmuş blog sitesi',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body className={inter.className}>
        <nav className="bg-blue-600 text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <a href="/" className="text-4xl font-bold">BlogSitesi</a>
            <div className="space-x-4">
              <a href="/" className="hover:underline">Ana Sayfa</a>
              <a href="/blog" className="hover:underline">Blog</a>
              <a href="/about" className="hover:underline">Hakkında</a>
              <a href="/contact" className="hover:underline">İletişim</a>
            </div>
          </div>
        </nav>
        <main className="container mx-auto p-4">
          {children}
        </main>
        <footer className="fixed bottom-0 left-0 w-full bg-gray-800 text-white p-4 mt-8">
          <div className="container mx-auto text-center">
            © {new Date().getFullYear()} Blog Sitesi. Tüm hakları saklıdır.
          </div>
        </footer>
      </body>
    </html>
  )
}