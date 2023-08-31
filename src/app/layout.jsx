import './globals.css'

export const metadata = {
  title: 'Blog Kazuo',
  description: 'Blog user',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className='font-all'>{children}</body>
    </html>
  )
}
