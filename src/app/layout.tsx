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
    'Помогаю компаниям выстроить цифровую часть: от стратегии до работающего продукта. Запуск MVP, архитектура, автоматизация.',
  keywords: [
    'технический партнёр',
    'CTO',
    'разработка MVP',
    'цифровизация бизнеса',
    'автоматизация процессов',
  ],
  authors: [{ name: 'Андрей Деревянкин' }],
  openGraph: {
    title: 'Андрей Деревянкин — технический партнёр для бизнеса',
    description:
      'Помогаю компаниям выстроить цифровую часть: от стратегии до работающего продукта',
    url: 'https://aderevyankin.ru',
    siteName: 'Андрей Деревянкин',
    locale: 'ru_RU',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL('https://aderevyankin.ru'),
  icons: {
    icon: '/icon.svg',
  },
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