'use client';

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const menuItems = [
  { name: 'Accueil', href: '/' },
  {
    name: 'Produits',
    href: '/produits',
    subsections: [
      { name: 'Tapis', href: '/produits/tapis' },
      { name: 'Meubles', href: '/produits/meubles' },
      { name: 'Luminaires', href: '/produits/luminaires' },
    ],
  },
  {
    name: 'Services',
    href: '/services',
    subsections: [
      { name: 'Aménagement', href: '/services/amenagement' },
      { name: 'Décoration événementielle', href: '/services/decoration-evenementielle' },
      { name: 'Conseil déco', href: '/services/conseil-deco' },
    ],
  },
  { name: 'Réalisations', href: '/realisations' },
  { name: 'Blog', href: '/blog' },
  { name: 'À propos', href: '/a-propos' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto flex justify-between items-center p-4">
        <Link href="/" className="text-2xl font-bold text-gray-800">Déco Elégance</Link>
        <div className="hidden md:flex items-center space-x-4">
          {menuItems.map((item) => (
            <div
              key={item.name}
              className="relative"
              onMouseEnter={() => setHoveredItem(item.name)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <Link href={item.href} className="p-2 text-gray-600 hover:text-gray-900 transition-colors">
                {item.name}
              </Link>
              <AnimatePresence>
                {hoveredItem === item.name && item.subsections && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10"
                  >
                    {item.subsections.map((subsection) => (
                      <Link
                        key={subsection.name}
                        href={subsection.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {subsection.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
        <div className="flex items-center space-x-4">
          <Link href="/mon-compte" className="p-2 text-gray-600 hover:text-gray-900 transition-colors">Mon Compte</Link>
          <Link href="/panier" className="p-2 text-gray-600 hover:text-gray-900 transition-colors">Panier</Link>
        </div>
      </nav>
    </header>
  );
}
