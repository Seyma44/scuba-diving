// NAVIGATION
export const NAV_LINKS = [
  { href: '#home', key: 'home', label: 'Home' },
  { href: '#about_app', key: 'about_app', label: 'About App' },
  { href: '#explore_zones', key: 'explore_zones', label: 'Explore Zones' },
  { href: '#features', key: 'features', label: 'Features' },
  { href: '#get_app', key: 'get_app', label: 'Get App', hideInNavbar: true  },
  { href: '#contact_us', key: 'contact_us', label: 'Contact Us' },
];

// EXPLORE SEA SECTION
export const PEOPLE_URL = [
  '/person-1.png',
  '/person-2.png',
  '/person-3.png',
  '/person-4.png',
];

// FEATURES SECTION
export const FEATURES = [
  {
    title: 'Record Your Underwater Adventures',
    icon: '/map.svg',
    variant: 'green',
    description:
      'Keep track of your dives, including dive sites, depths, duration, and marine life sightings, with our comprehensive dive log feature.',
  },
  {
    title: 'Set an adventure schedule',
    icon: '/calendar.svg',
    variant: 'green',
    description:
      "Schedule an adventure with friends. On holidays, there are many interesting offers from Scuba. That way, there's no more discussion",
  },
  {
    title: 'Plan Your Dive Safely',
    icon: '/tech.svg',
    variant: 'green',
    description:
      'Access safety features such as dive alerts, emergency contact integration, and dive buddy tracking to enhance your safety and peace of mind underwater.',
  },
  {
    title: 'Many new locations every month',
    icon: '/location.svg',
    variant: 'orange',
    description:
      'Lots of new locations every month, because we have a worldwide community of divers who share their best experiences with diving',
  },
];

// FOOTER SECTION
export const FOOTER_LINKS = [
  {
    title: 'Learn More',
    links: [
      'About Scubs',
      'Blog Posts',
      'Environment',
      'Privacy Policy',
      'Contact Us',
    ],
  },
  {
    title: 'Our Community',
    links: ['S Scuba Diving', 'Underwater Co.', 'Life Seas'],
  },
];

export const FOOTER_CONTACT_INFO = {
  title: 'Contact Us',
  links: [
    { label: 'Tel', value: '123-456-7890' },
    { label: 'Email', value: 'scuba@diving.com' },
  ],
};

export const SOCIALS = {
  title: 'Social',
  links: [
    '/facebook.svg',
    '/instagram.svg',
    '/twitter.svg',
    '/youtube.svg',
    '/wordpress.svg',
  ],
};
