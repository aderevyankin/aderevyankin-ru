import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../styles/globals.css';

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Андрей Деревянкин — технический партнёр для бизнеса',
  description:
    'Помогаю бизнесу выстроить цифровую часть: от стратегии до работающего продукта',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={inter.variable}>
      <body>
        <a href="#main" className="skip-link">
          Перейти к содержимому
        </a>
        {children}
      </body>
    </html>
  );
}