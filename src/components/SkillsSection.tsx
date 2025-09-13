import { SkillCard } from "./SkillCard";

export function SkillsSection() {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: ["Java", "JavaScript", "Typescript", "Python"],
    },
    {
      category: "Web Technologies",
      skills: ["React.js", "Node.js", "Express.js", "RESTful APIs", "HTML/CSS"],
    },
    {
      category: "Machine Learning & Data",
      skills: ["scikit-learn", "Pandas", "XGBoost", "CatBoost", "NLP", "SHAP", "Spacy"],

    },
    {
      category: "Cloud & DevOps",
      skills: ["AWS", "Databricks", "Docker", "CI/CD", "Git", "Linux", "Spark"],
    },
    {
      category: "Databases & Tools",
      skills: ["PostgreSQL", "MySQL", "MongoDB", "Prisma ORM", "Streamlit", "FastAPI"],
    },
    {
      category: "Methodologies & Auth",
      skills: ["Agile/SCRUM", "SAFe", "JWT Auth", "bcrypt", "Debugging", "Testing"],
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-background/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-mono text-4xl font-bold text-foreground mb-4 glitch">
            ./skills
          </h2>
          <div className="font-mono text-terminal-green">
            <span className="text-terminal-amber">$</span> find . -name "*.skill" -type f
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCard key={index} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
}