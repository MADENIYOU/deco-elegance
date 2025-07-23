import Link from 'next/link';

export default function HomePage() {
  return (
    <main>
      {/* Hero Banner */}
      <section className="bg-gray-100 text-center py-20">
        <div className="container mx-auto">
          <h1 className="text-5xl font-bold text-gray-800">Bienvenue chez Déco Elégance</h1>
          <p className="text-xl text-gray-600 mt-4">Votre partenaire pour une décoration et un aménagement qui vous ressemblent.</p>
          <div className="mt-8">
            <Link href="/produits" className="bg-gray-800 text-white font-bold py-3 px-6 rounded-full hover:bg-gray-700 transition-colors">
              Découvrir nos produits
            </Link>
            <Link href="/services" className="ml-4 text-gray-800 font-bold py-3 px-6 rounded-full border border-gray-800 hover:bg-gray-200 transition-colors">
              Voir nos services
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800">Qui sommes-nous ?</h2>
          <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
            DécoÉlégance est une entreprise spécialisée dans la vente d'articles de décoration et les prestations de services d'ameublement. Nous vous aidons à créer des espaces de vie uniques et inspirants.
          </p>
        </div>
      </section>
    </main>
  );
}