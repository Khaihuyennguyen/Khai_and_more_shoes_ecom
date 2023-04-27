/**
 * In a real app, this data would likely live in a database,
 * and be fetched from an API, either at runtime or at
 * compile-time.
 *
 * Keep in mind, this workshop is focused on CSS. In order
 * to make it easy to focus on the styling, we're cutting
 * some corners when it comes to our data management, and
 * our JavaScript in general. Please don't try to glean
 * any best-practices from stuff like this data file!
 */

const SHOES = [
  {
    slug: 'Derby',
    name: 'Derby 2022',
    imageSrc: '/assets/1.jpg',
    price: 16500,
    salePrice: null,
    releaseDate: Date.now() - 1000 * 60 * 60 * 1,
    numOfColors: 2,
  },
  {
    slug: 'Derby Boots',
    name: 'Derby Boots',
    imageSrc: '/assets/2.jpg',
    price: 16500,
    salePrice: null,
    releaseDate: Date.now() - 1000 * 60 * 60 * 24 * 2,
    numOfColors: 1,
  },
  {
    slug: 'Boat Shoes',
    name: 'Boat Shoes',
    imageSrc: '/assets/3.jpg',
    price: 16500,
    salePrice: null,
    releaseDate: Date.now() - 1000 * 60 * 60 * 24 * 4,
    numOfColors: 4,
  },
  {
    slug: 'Back to the future',
    name: 'Back to the future',
    imageSrc: '/assets/4.jpg',
    price: 16500,
    salePrice: null,
    releaseDate: Date.now() - 1000 * 60 * 60 * 24 * 16,
    numOfColors: 1,
  },
  {
    slug: 'joyride',
    name: 'Enjoy the ride',
    imageSrc: '/assets/5.jpg',
    price: 17000,
    salePrice: null,
    releaseDate: Date.now() - 1000 * 60 * 60 * 24 * 40,
    numOfColors: 2,
  },
  {
    slug: 'legend-academy',
    name: 'legend-academy',
    imageSrc: '/assets/6.jpg',
    price: 16500,
    salePrice: 12500,
    releaseDate: Date.now() - 1000 * 60 * 60 * 24 * 50,
    numOfColors: 8,
  },
  {
    slug: 'to the infinity',
    name: 'The Infinity Pro',
    imageSrc: '/assets/7.jpg',
    price: 16000,
    salePrice: 14500,
    releaseDate: Date.now() - 1000 * 60 * 60 * 24 * 75,
    numOfColors: 1,
  },
  {
    slug: 'Phantop',
    name: 'React Phantom Run 2',
    imageSrc: '/assets/8.jpg',
    price: 18500,
    salePrice: 16000,
    releaseDate: Date.now() - 1000 * 60 * 60 * 24 * 100,
    numOfColors: 4,
  },
  {
    slug: 'The legend',
    name: 'The legend',
    imageSrc: '/assets/9.jpg',
    price: 26000,
    salePrice: null,
    releaseDate: Date.now() - 1000 * 60 * 60 * 24 * 120,
    numOfColors: 1,
  },
];

export default SHOES;
