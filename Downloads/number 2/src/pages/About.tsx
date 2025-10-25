import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border">
        <div className="container mx-auto px-6 py-8">
          <div className="flex justify-between items-start">
            <h1 className="text-xl font-normal">About</h1>
            <Link
              to="/"
              className="text-sm hover:text-muted-foreground transition-colors"
            >
              Home
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-16">
        <div className="max-w-2xl space-y-8">
          <div className="space-y-4">
            <h2 className="text-lg font-normal">Eun Kyeol Kim</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Designer and researcher exploring the intersections of design, art history, 
              and contemporary contexts. Currently based in Seoul, working on projects 
              that bridge traditional and experimental approaches to visual communication.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-base font-normal">Education</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              B.A. in Design, Double Major in Art History
              <br />
              Ewha Womans University
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-base font-normal">Contact</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              For inquiries and collaborations
              <br />
              <a href="mailto:contact@example.com" className="hover:text-foreground transition-colors">
                contact@example.com
              </a>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
