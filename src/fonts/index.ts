import { Playfair_Display, Merriweather } from 'next/font/google';

/**
 * Fuente Principal para Títulos
 */
const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600', '700', '900'],
  variable: '--font-playfair',
});

/**
 * Fuente Secundaria para Cuerpo de Texto
 */
const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-merriweather',
});

export { playfair, merriweather };
