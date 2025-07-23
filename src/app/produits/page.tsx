const products = [
  { id: 1, name: 'Coussin Velours', image: 'https://via.placeholder.com/300' },
  { id: 2, name: 'Rideau Lin', image: 'https://via.placeholder.com/300' },
  { id: 3, name: 'Tableau Abstrait', image: 'https://via.placeholder.com/300' },
  { id: 4, name: 'Meuble TV Bois', image: 'https://via.placeholder.com/300' },
  { id: 5, name: 'Lampe de Sol', image: 'https://via.placeholder.com/300' },
  { id: 6, name: 'Tapis Berbère', image: 'https://via.placeholder.com/300' },
];

export default function ProduitsPage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold text-center mb-8">Nos Produits</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{product.name}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
