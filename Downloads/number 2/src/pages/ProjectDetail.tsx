import { useParams, Link } from "react-router-dom";
import { projects } from "@/data/projects";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === Number(id));

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Project not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-black font-helvetica">
      {/* Header */}
      <header className="border-b border-gray-300">
        <div className="container mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-start gap-8">
          {/* Left Info */}
          <div className="flex flex-col md:flex-row gap-12">
            <div className="space-y-1">
              <h1 className="text-2xl font-normal">{project.title}</h1>
              <p className="text-sm text-gray-500">{project.year}</p>
            </div>
            <div className="space-y-1 max-w-lg">
              <h2 className="text-sm font-normal">{project.category}</h2>
              <p className="text-sm text-gray-500 leading-relaxed">
                {project.description}
              </p>
            </div>
          </div>

          {/* Navigation */}
          <Link
            to="/"
            className="text-sm hover:text-gray-700 transition-colors"
          >
            About
          </Link>
        </div>
      </header>

      {/* Images Grid */}
      <main className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {project.images.map((image, index) => (
            <div key={index} className="relative overflow-hidden">
              <img
                src={image}
                alt={`${project.title} - Image ${index + 1}`}
                className="w-full h-full object-cover"
              />
              {/* Image label */}
              <div className="absolute top-4 left-4 bg-white/80 px-2 py-1 text-xs font-semibold">
                {index === 0 && "Monotype"}
                {index === 1 && "Poster Front"}
                {index === 2 && "Poster Back"}
                {index === 3 && "Monotype Version"}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ProjectDetail;
