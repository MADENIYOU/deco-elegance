export default function ContactPage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold text-center mb-8">Contactez-nous</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold mb-4">Envoyez-nous un message</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Nom</label>
              <input type="text" id="name" className="w-full px-4 py-2 border rounded-lg" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
              <input type="email" id="email" className="w-full px-4 py-2 border rounded-lg" />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
              <textarea id="message" rows={4} className="w-full px-4 py-2 border rounded-lg"></textarea>
            </div>
            <button type="submit" className="bg-gray-800 text-white font-bold py-2 px-4 rounded-lg hover:bg-gray-700 transition-colors">Envoyer</button>
          </form>
        </div>
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold mb-4">Nos coordonnées</h2>
          <p className="text-gray-600 mb-4">123 Rue de la Déco, 75000 Paris</p>
          <div className="h-64 bg-gray-200 rounded-lg">
            <img src="https://via.placeholder.com/400x300/cccccc/000000?text=Carte" alt="Carte" className="w-full h-full object-cover rounded-lg" />
          </div>
          <div className="mt-4">
            <a href="#" className="p-2">Facebook</a>
            <a href="#" className="p-2">Instagram</a>
            <a href="#" className="p-2">Pinterest</a>
          </div>
        </div>
      </div>
    </div>
  );
}
