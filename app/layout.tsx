import '../styles/globals.scss';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Auth Demo',
  description: 'Simple authentication flow demo',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}