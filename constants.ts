
import { MenuItem, Testimonial } from './types';

export const MENU_ITEMS: MenuItem[] = [
  {
    id: '1',
    name: 'Espresso Algarrobo',
    description: 'Nuestra mezcla especial con notas de chocolate amargo y frutos secos.',
    price: '$3.50',
    category: 'cafe'
  },
  {
    id: '2',
    name: 'Flat White Terciopelo',
    description: 'Doble shot de espresso con leche micro-espumada a la perfección.',
    price: '$4.50',
    category: 'cafe'
  },
  {
    id: '3',
    name: 'Torta Rústica de Algarroba',
    description: 'Bizcocho húmedo de harina de algarroba, nueces y chocolate blanco.',
    price: '$6.50',
    category: 'reposteria'
  },
  {
    id: '4',
    name: 'Alfajor Gourmet',
    description: 'Dos tapas de maicena rellenas con generoso dulce de leche artesanal.',
    price: '$3.00',
    category: 'reposteria'
  },
  {
    id: '5',
    name: 'Avocado Toast Real',
    description: 'Pan de masa madre con palta laminada, huevo pochado y semillas tostadas.',
    price: '$9.50',
    category: 'brunch'
  },
  {
    id: '6',
    name: 'Shakshuka de la Casa',
    description: 'Huevos escalfados en salsa de tomate especiada y pimientos rojos.',
    price: '$11.00',
    category: 'brunch'
  },
  {
    id: '7',
    name: 'Iced Latte Caramelo Salado',
    description: 'Café frío con jarabe de caramelo artesanal y un toque de sal marina.',
    price: '$5.50',
    category: 'especiales'
  },
  {
    id: '8',
    name: 'Matcha Ceremonial',
    description: 'Té verde japonés grado ceremonial batido con leche de almendras.',
    price: '$5.00',
    category: 'especiales'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Carolina Martínez',
    role: 'Arquitecta',
    content: 'El mejor café de la región. El ambiente frente al mar es simplemente inigualable, un espacio que respira diseño y paz.',
    avatar: 'https://i.pravatar.cc/150?u=carolina'
  },
  {
    id: 't2',
    name: 'Juan Pablo Ríos',
    role: 'Crítico Gastronómico',
    content: 'La torta de algarroba es una revelación. Un equilibrio perfecto de sabores locales con una técnica europea impecable.',
    avatar: 'https://i.pravatar.cc/150?u=juan'
  },
  {
    id: 't3',
    name: 'Elena Silva',
    role: 'Escritora',
    content: 'Un refugio de paz en Algarrobo. El servicio es tan sofisticado como su espresso, ideal para tardes de lectura contemplativa.',
    avatar: 'https://i.pravatar.cc/150?u=elena'
  }
];
