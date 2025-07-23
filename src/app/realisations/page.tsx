const projects = [
  { id: 1, before: 'https://via.placeholder.com/400x300/cccccc/000000?text=Avant', after: 'https://via.placeholder.com/400x300/a2d2ff/000000?text=Après' },
  { id: 2, before: 'https://via.placeholder.com/400x300/cccccc/000000?text=Avant', after: 'https://via.placeholder.com/400x300/bde0fe/000000?text=Après' },
  { id: 3, before: 'https://via.placeholder.com/400x300/cccccc/000000?text=Avant', after: 'https://via.placeholder.com/400x300/ffafcc/000000?text=Après' },
];

export default function RealisationsPage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold text-center mb-8">Nos Réalisations</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="grid grid-cols-2">
              <img src={project.before} alt="Avant" className="w-full h-full object-cover" />
              <img src={project.after} alt="Après" className="w-full h-full object-cover" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
