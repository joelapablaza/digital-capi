export const PRODUCT_CATEGORIES = [
  {
    label: 'UI Kits',
    value: 'ui_kits' as const,
    featured: [
      {
        name: 'Selecciones del editor',
        href: `/products?category=ui_kits`,
        imageSrc: '/nav/ui-kits/mixed.webp',
      },
      {
        name: 'Novedades',
        href: '/products?category=ui_kits&sort=desc',
        imageSrc: '/nav/ui-kits/blue.webp',
      },
      {
        name: 'Más vendidos',
        href: '/products?category=ui_kits',
        imageSrc: '/nav/ui-kits/purple.webp',
      },
    ],
  },
  {
    label: 'Iconos',
    value: 'icons' as const,
    featured: [
      {
        name: 'Selecciones de íconos favoritos',
        href: `/products?category=icons`,
        imageSrc: '/nav/icons/picks.webp',
      },
      {
        name: 'Novedades',
        href: '/products?category=icons&sort=desc',
        imageSrc: '/nav/icons/new.webp',
      },
      {
        name: 'Iconos Más vendidos',
        href: '/products?category=icons',
        imageSrc: '/nav/icons/bestsellers.webp',
      },
    ],
  },
];
