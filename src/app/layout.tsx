import { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { playfair, merriweather } from '@fonts';
import { Footer, Menu, I18nLayout } from '@components';
import { DESCRIPTION, NAME, TWITTER } from '@constants';

/** Styles */
import './global.css';

/** Metadata */
export const metadata: Metadata = {
  metadataBase: new URL('https://www.zamuner.space'),
  title: `${NAME}`,
  description: `${DESCRIPTION}`,
  verification: {
    google: 'TsWBICNY9XOLMtREB_ZloU8iv9A6Z7XmHadrB6rWXmY',
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' }
    ]
  },
  openGraph: {
    type: 'website',
    title: `${NAME}`,
    description: `${DESCRIPTION}`,
    url: 'https://www.zamuner.space',
    siteName: `${NAME}`,
    locale: 'es_ES',
    images: [
      {
        url: './oph.png',
        width: 1200,
        height: 630,
        alt: 'Zamuner Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${NAME}`,
    description: `${DESCRIPTION}`,
    site: `${TWITTER}`,
    creator: `${TWITTER}`,
    images: [
      {
        url: './oph.png',
        width: 1200,
        height: 630,
        alt: 'Zamuner Logo',
      },
    ],
  },
};

/** RootLayout */
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='es'>
      <body id='root' className={`${playfair.variable} ${merriweather.variable}`}>
        <I18nLayout>
          <Menu />
          <main id='main' data-testid='main'>
            {children}
            <Analytics />
            <SpeedInsights />
          </main>
          <Footer />
        </I18nLayout>
      </body>
    </html>
  );
}
