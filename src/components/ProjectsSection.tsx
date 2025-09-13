import { ProjectCard } from "./ProjectCard";

export function ProjectsSection() {
  const projects = [
    {
      title: "Automation Toolkit for SAFe Agile Processes",
      duration: "Oct 2024 - Dec 2024",
      description: "Implemented ML models to automate task assignment in Agile teams using Jira data. Applied NLP to analyze workload distribution and task complexity. Designed asynchronous backend communication for efficient concurrent task updates and API requests.",
      technologies: ["Python", "FastAPI", "Pandas", "scikit-learn", "Spacy", "NLP"]
    },
    {
      title: "Full-Stack Digital Wallet Application",
      duration: "Jan 2025 - Present",
      description: "Engineered a fintech application with comprehensive user authentication, account management, and secure money transfer capabilities. Built robust RESTful APIs and implemented JWT-based authentication with bcrypt encryption.",
      technologies: ["React.js", "Node.js", "Express.js", "JWT", "Tailwind CSS", "Vite"]
    },
    {
      title: "Twitter Analytics on the Cloud",
      duration: "Feb 2025 - Present",
      description: "Built distributed microservices for blockchain verification, QR code generation, and user recommendations. Performed large-scale ETL, reducing 1TB of raw Twitter data to 35GB. Achieved 100,000+ requests/sec throughput within budget.",
      technologies: ["Java", "Spark", "AWS", "Databricks", "ETL", "Microservices"]
    },
    {
      title: "ML Benchmarking Pipeline",
      duration: "Jan 2025 - Present",
      description: "Developed a comprehensive cross-library benchmarking framework for tabular ML models including scikit-learn, XGBoost, and CatBoost. Handled inconsistent CSVs, missing data, and categorical encoding through robust preprocessing pipelines.",
      technologies: ["Python", "Streamlit", "Pandas", "SHAP", "XGBoost", "CatBoost"]
    }
  ];

  return (
    <section id="projects" className="py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-mono text-4xl font-bold text-foreground mb-4 glitch">
            ./projects
          </h2>
          <div className="font-mono text-terminal-green">
            <span className="text-terminal-amber">$</span> ls -la projects/
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}