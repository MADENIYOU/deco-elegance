export default function AProposPage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold text-center mb-8">À Propos de Déco Elégance</h1>
      
      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Notre Histoire</h2>
        <p className="text-gray-600">
          Fondée en 2020, Déco Elégance est née d'une passion pour la décoration et le design d'intérieur. Notre mission est de rendre le beau accessible à tous, en proposant des produits de qualité et des services sur-mesure.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Notre Équipe</h2>
        <p className="text-gray-600">
          Notre équipe est composée de décorateurs, de designers et de conseillers passionnés, tous experts dans leur domaine. Nous mettons notre savoir-faire à votre service pour vous accompagner dans tous vos projets.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-semibold mb-4">Nos Valeurs</h2>
        <ul className="list-disc list-inside text-gray-600">
          <li>Créativité : Nous aimons surprendre et innover.</li>
          <li>Qualité : Nous sélectionnons nos produits avec le plus grand soin.</li>
          <li>Proximité : Nous sommes à l'écoute de vos besoins et de vos envies.</li>
        </ul>
      </div>
    </div>
  );
}
