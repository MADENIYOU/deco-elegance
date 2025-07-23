const posts = [
  { id: 1, title: '10 astuces pour un salon chaleureux', excerpt: 'Découvrez nos conseils pour transformer votre salon en un cocon de bien-être...' },
  { id: 2, title: 'Les tendances couleurs de l\'année', excerpt: 'Du vert sauge au terracotta, on vous dit tout sur les couleurs à adopter chez vous...' },
  { id: 3, title: 'DIY : fabriquez votre propre tête de lit', excerpt: 'Un tutoriel simple et économique pour une chambre personnalisée...' },
];

export default function BlogPage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold text-center mb-8">Notre Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.map((post) => (
          <div key={post.id} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">{post.title}</h2>
            <p className="text-gray-600">{post.excerpt}</p>
            <a href="#" className="text-blue-500 hover:underline mt-4 inline-block">Lire la suite</a>
          </div>
        ))}
      </div>
    </div>
  );
}