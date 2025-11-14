import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  metadataBase: new URL('https://agentic-2f1ceaf6.vercel.app'),
  title: {
    default: 'SmartJus ? Legal tech de alta performance',
    template: '%s ? SmartJus'
  },
  description:
    'Plataforma jur?dica digital que une IA e rede de advogados parceiros para captar, qualificar e operar casos em escala.',
  openGraph: {
    title: 'SmartJus ? Legal tech de alta performance',
    description:
      'Direito em escala, intelig?ncia em cada caso. Converta mais clientes e opere com efici?ncia.',
    url: 'https://agentic-2f1ceaf6.vercel.app',
    siteName: 'SmartJus',
    images: [
      {
        url: '/og.jpg',
        width: 1200,
        height: 630,
        alt: 'SmartJus ? Legal tech de alta performance'
      }
    ],
    locale: 'pt_BR',
    type: 'website'
  },
  robots: {
    index: true,
    follow: true
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SmartJus ? Legal tech de alta performance',
    description: 'Direito em escala, intelig?ncia em cada caso.'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className="min-h-dvh antialiased selection:bg-accent/40 selection:text-white">
        {children}
      </body>
    </html>
  );
}
