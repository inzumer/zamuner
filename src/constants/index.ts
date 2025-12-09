/** Hooks */
export const MEDIA_QUERY = {
  mobile: '(max-width: 767px)',
  tablet: '(min-width: 768px) and (max-width: 1023px)',
  desktop: '(min-width: 1024px)',
  largeDesktop: '(min-width: 1440px)',
};

/** Redirection */
export const SOCIAL_LINKS = {
  GITHUB: 'https://github.com/inzumer',
  LINKEDIN: 'https://www.linkedin.com/in/inzumer',
};

/** Resources */
export const SOCIAL = [
  { url: SOCIAL_LINKS.GITHUB, name: 'Github' },
  { url: SOCIAL_LINKS.LINKEDIN, name: 'LinkedIn' },
];

export const LANGUAGES = ['en', 'es'];

/** API */
const API = '/api';

export const API_PATH = {
  EMAIL: `${API}/send-email`,
};

/** METADATA */
export const NAME = 'Zamuner';

export const TWITTER = '@inzumer';

export const DESCRIPTION = 'Misión: Reconstruir la Diáspora Zamuner. Trazamos la historia familiar desde el Véneto, uniendo las ramas dispersas. Añade tu contribución y ayudemos a completar el mapa.';
