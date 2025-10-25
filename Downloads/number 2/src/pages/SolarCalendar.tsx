import { Link } from "react-router-dom";

const SolarCalendar = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border">
        <div className="container mx-auto px-6 py-8">
          <div className="flex justify-between items-start">
            <h1 className="text-xl font-normal">Solar Calendar</h1>
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
          <p className="text-sm text-muted-foreground leading-relaxed">
            A chronological view of design work, organized by year and context.
          </p>

          <div className="space-y-12">
            {[2025, 2024, 2023, 2022].map((year) => (
              <div key={year} className="space-y-4">
                <h2 className="text-lg font-normal">{year}</h2>
                <div className="border-t border-border pt-4 space-y-2">
                  <p className="text-sm text-muted-foreground">
                    Projects from {year} coming soon.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default SolarCalendar;
