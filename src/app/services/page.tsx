const services = [
  {
    title: 'Aménagement d\'intérieur',
    description: 'Nous vous aidons à repenser et à optimiser vos espaces de vie pour qu\'ils soient à la fois fonctionnels et esthétiques.',
  },
  {
    title: 'Décoration événementielle',
    description: 'Pour vos événements privés ou professionnels, nous créons des décors uniques et mémorables qui marqueront les esprits.',
  },
  {
    title: 'Conseil en décoration',
    description: 'Bénéficiez de l\'expertise de nos décorateurs pour faire les bons choix en matière de couleurs, de mobilier et d\'accessoires.',
  },
];

export default function ServicesPage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold text-center mb-8">Nos Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service) => (
          <div key={service.title} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">{service.title}</h2>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
