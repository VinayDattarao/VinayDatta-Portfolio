import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Sree Dattha International Conference (ICSDI 2026)",
    description: "Developed a production-ready website for my college to manage the ICSDI 2026 international conference. The system handles paper submissions, reviewer assignments, acceptance/rejection workflows, and payment processing. Integrated Firebase for backend services and authentication, along with Google Drive API for scalable storage and efficient management of research papers.",
    image: "https://images.pexels.com/photos/36730987/pexels-photo-36730987.png",
    technologies: ["HTML", "CSS", "JavaScript", "Firebase", "Google Drive API"],
    liveUrl: "https://sdi-conference.vercel.app/"
  },
  {
    id: 2,
    title: "ProctorX",
    description: "Built a secure online examination platform with OTP-based authentication, fullscreen enforcement, and real-time violation tracking. Supports role-based access for students and administrators, enabling exam creation, monitoring, and evaluation. Includes detailed result analytics, performance tracking, PostgreSQL-based storage, and automated email notifications for user actions and exam updates.",
    image: "https://images.pexels.com/photos/36731393/pexels-photo-36731393.png",
    technologies: ["Node.js", "PostgreSQL", "JavaScript", "HTML", "CSS"],
    liveUrl: "https://proctorx.vercel.app/",
    exploreUrl: "https://github.com/VinayDattarao/ProctorX"
  },
  {
    id: 3,
    title: "Finance Platform (Next.js + Prisma + AI)",
    description: "Developed a full-stack finance platform that processes CSV, UPI, and PDF bank statements with OCR fallback and normalizes transactions across accounts. Provides AI-driven insights including budgeting, forecasts, and anomaly detection. Built with secure authentication, multi-currency support, and intelligent analytics for improved financial decision-making.",
    image: "https://images.pexels.com/photos/36731436/pexels-photo-36731436.png",
    technologies: ["Next.js", "Prisma", "PostgreSQL", "Tailwind", "AI/ML"],
    exploreUrl: "https://github.com/VinayDattarao/FinReason"
  }
];

const techColors: { [key: string]: string } = {
  "HTML": "primary",
  "CSS": "secondary", 
  "Javascript": "accent",
  "Python": "secondary",
  "SQL": "accent",
  "SQLite": "primary",
  "Tkinter": "secondary"
};

export default function ProjectsSection() {
  const viewAllRepositories = () => {
    window.open("https://github.com/VinayDattarao", "_blank");
  };

  const handleExploreProject = (project: any) => {
    if (project.exploreUrl) {
      window.open(project.exploreUrl, '_blank');
    } else if (project.liveUrl) {
      window.open(project.liveUrl, '_blank');
    } else if (project.githubUrl) {
      window.open(project.githubUrl, '_blank');
    }
  };

  return (
    <section id="projects" className="min-h-screen py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center glow-text font-mono" data-testid="projects-title">
            featured.projects()
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={project.id}
                className="project-card glow-border rounded-lg glass-card overflow-hidden group animate-float"
                style={{ animationDelay: `${index * 0.5}s` }}
                data-testid={`project-card-${project.id}`}
              >
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                  data-testid={`project-image-${project.id}`}
                />
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold font-mono" data-testid={`project-title-${project.id}`}>
                      {project.title}
                    </h3>
                    
                    <div className="flex space-x-2">
                      {project.githubUrl && (
                        <a 
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:text-secondary transition-colors"
                          data-testid={`project-github-${project.id}`}
                        >
                          <Github className="h-5 w-5" />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a 
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:text-secondary transition-colors"
                          data-testid={`project-live-${project.id}`}
                        >
                          <ExternalLink className="h-5 w-5" />
                        </a>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground text-sm mb-4" data-testid={`project-description-${project.id}`}>
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className={`px-2 py-1 bg-${techColors[tech] || 'primary'}/20 text-${techColors[tech] || 'primary'} text-xs rounded font-mono`}
                        data-testid={`project-tech-${project.id}-${tech.toLowerCase().replace('.', '-')}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <button 
                    className="w-full neon-button text-sm font-mono"
                    onClick={() => handleExploreProject(project)}
                    data-testid={`project-explore-${project.id}`}
                  >
                    explore_project()
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <button 
              className="neon-button font-mono text-lg px-8 py-3 animate-float flex items-center justify-center"
              style={{ animationDelay: "3s" }}
              onClick={viewAllRepositories}
              data-testid="button-view-all-repositories"
            >
              <Github className="mr-2 h-5 w-5" />
              All_Repositories()
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
