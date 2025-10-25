import { useParams, Link } from "react-router-dom";
import { projects } from "@/data/projects";

const ProjectDetail = () => {
  // id는 문자열(string)로 들어옴
  const { id } = useParams<{ id: string }>();

  // projects 배열의 id가 숫자라면 Number(id)로 변환
  const project = projects.find((p) => p.id === Number(id));

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Project not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container mx-auto px-6 py-8">
          <div className="flex justify-between items-start">
            <div className="flex gap-16">
              <div className="space-y-1">
                <h1 className="text-xl font-normal">{project.title}</h1>
                <p className="text-sm text-muted-foreground">{project.year}</p>
              </div>
              <div className="space-y-1">
                <h2 className="text-sm font-normal">{project.category}</h2>
                <p className="text-sm text-muted-foreground max-w-md leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
            <Link
              to="/"
              className="text-sm hover:text-muted-foreground transition-colors"
            >
              About
            </Link>
          </div>
        </div>
      </header>

      {/* Project Images Grid */}
      <main className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {project.images.map((image, index) => (
            <div
              key={index}
              className="aspect-[4/3] bg-muted relative overflow-hidden"
            >
              <img
                src={image}
                alt={`${project.title} - Image ${index + 1}`}
                className="w-full h-full object-cover"
              />
              {/* Optional: Add image labels */}
              <div className="absolute top-4 left-4 bg-background/80 px-2 py-1 text-xs">
                {index === 0 && "Monotype"}
                {index === 1 && "Poster Font"}
                {index === 2 && "Poster Stick"}
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
