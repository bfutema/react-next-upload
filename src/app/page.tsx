import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main>
      <h1 className={inter.className}>
        React 18 + Next 13 (with appDir feature) + Styled Components (SSR
        Support)
      </h1>
    </main>
  );
}
