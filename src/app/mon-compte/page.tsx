export default function MonComptePage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold text-center mb-8">Mon Compte</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold mb-4">Connexion</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="email-login" className="block text-gray-700 font-semibold mb-2">Email</label>
              <input type="email" id="email-login" className="w-full px-4 py-2 border rounded-lg" />
            </div>
            <div className="mb-4">
              <label htmlFor="password-login" className="block text-gray-700 font-semibold mb-2">Mot de passe</label>
              <input type="password" id="password-login" className="w-full px-4 py-2 border rounded-lg" />
            </div>
            <button type="submit" className="bg-gray-800 text-white font-bold py-2 px-4 rounded-lg hover:bg-gray-700 transition-colors">Se connecter</button>
          </form>
        </div>
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold mb-4">Inscription</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="name-register" className="block text-gray-700 font-semibold mb-2">Nom</label>
              <input type="text" id="name-register" className="w-full px-4 py-2 border rounded-lg" />
            </div>
            <div className="mb-4">
              <label htmlFor="email-register" className="block text-gray-700 font-semibold mb-2">Email</label>
              <input type="email" id="email-register" className="w-full px-4 py-2 border rounded-lg" />
            </div>
            <div className="mb-4">
              <label htmlFor="password-register" className="block text-gray-700 font-semibold mb-2">Mot de passe</label>
              <input type="password" id="password-register" className="w-full px-4 py-2 border rounded-lg" />
            </div>
            <button type="submit" className="bg-gray-800 text-white font-bold py-2 px-4 rounded-lg hover:bg-gray-700 transition-colors">S'inscrire</button>
          </form>
        </div>
      </div>
    </div>
  );
}
