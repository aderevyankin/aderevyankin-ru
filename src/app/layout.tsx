import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Андрей Деревянкин — технический партнёр для бизнеса',
  description: 'Помогаю бизнесу решать технические задачи: от консультаций до реализации продуктов',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}